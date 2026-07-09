export default async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");
  try {
    const path = String(req.query.path || "");
    if (!/^\/v3\/mlb\/(scores|projections|stats)\/json\/[A-Za-z0-9_\/.-]*$/.test(path)) return res.status(400).json({ error: "Invalid SportsDataIO path" });

    const allowClientKeys = process.env.ALLOW_CLIENT_KEYS === "true";
    const key = process.env.SPORTSDATAIO_KEY || (allowClientKeys ? req.headers["x-sdio-key"] : null);
    if (!key) return res.status(400).json({ error: "Missing SPORTSDATAIO_KEY" });

    const url = new URL("https://api.sportsdata.io" + path);
    url.searchParams.set("key", key);

    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 25000);
    const r = await fetch(url.toString(), { signal: controller.signal });
    clearTimeout(timer);

    const raw = await r.text();
    let data; try { data = JSON.parse(raw); } catch { data = raw; }
    if (!r.ok) {
      const message = typeof data === "string" ? data.slice(0, 500) : JSON.stringify(data).slice(0, 500);
      return res.status(r.status).json({ error: message });
    }
    return res.status(200).json({ data });
  } catch (e) {
    const msg = e?.name === "AbortError" ? "SportsDataIO timeout" : (e.message || String(e));
    return res.status(500).json({ error: msg });
  }
}
