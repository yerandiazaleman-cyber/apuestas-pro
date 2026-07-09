export default function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");
  res.status(200).json({
    version: "V30.5",
    mode: "AI Test Fix + Pro UI + QA Clean + No False Good Mode",
    oddsEnv: !!process.env.ODDS_API_KEY,
    sdioEnv: !!process.env.SPORTSDATAIO_KEY,
    openaiEnv: !!process.env.OPENAI_API_KEY,
    clientKeyFallback: process.env.ALLOW_CLIENT_KEYS === "true",
    openaiModel: process.env.OPENAI_MODEL || "gpt-5-mini"
  });
}
