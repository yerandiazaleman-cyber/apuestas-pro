export default async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");
  try {
    const path = String(req.query.path || "");
    if (!/^\/v4\/[A-Za-z0-9_\/.-]+$/.test(path)) return res.status(400).json({ error: "Invalid Odds path" });

    const allowClientKeys = process.env.ALLOW_CLIENT_KEYS === "true";
    const key = process.env.ODDS_API_KEY || (allowClientKeys ? req.headers["x-odds-key"] : null);
    if (!key) return res.status(400).json({ error: "Missing ODDS_API_KEY" });

    const allowedParams = new Set(["regions","oddsFormat","markets","dateFormat","commenceTimeFrom","commenceTimeTo","eventIds","bookmakers","includeLinks","includeSids","includeBetLimits"]);
    const url = new URL("https://api.the-odds-api.com" + path);
    for (const [k, v] of Object.entries(req.query)) {
      if (k !== "path" && allowedParams.has(k) && v !== undefined) url.searchParams.set(k, Array.isArray(v) ? String(v[0]) : String(v));
    }
    url.searchParams.set("apiKey", key);

    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 25000);
    const r = await fetch(url.toString(), { signal: controller.signal });
    clearTimeout(timer);

    const raw = await r.text();
    let data; try { data = JSON.parse(raw); } catch { data = raw; }
    const meta = { remaining: r.headers.get("x-requests-remaining"), used: r.headers.get("x-requests-used"), last: r.headers.get("x-requests-last") };

    if (!r.ok) {
      const message = typeof data === "string" ? data.slice(0, 500) : JSON.stringify(data).slice(0, 500);
      return res.status(r.status).json({ error: message, meta });
    }
    return res.status(200).json({ data, meta });
  } catch (e) {
    const msg = e?.name === "AbortError" ? "Odds API timeout" : (e.message || String(e));
    return res.status(500).json({ error: msg });
  }
}
