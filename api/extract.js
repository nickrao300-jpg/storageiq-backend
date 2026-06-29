export const config = {
  api: {
    bodyParser: {
      sizeLimit: '20mb',
    },
  },
};

export default async function handler(req, res) {
  // Set CORS headers on every response including errors
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "*");
  res.setHeader("Access-Control-Max-Age", "86400");

  // Preflight
  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  // Health check
  if (req.method === "GET") {
    res.status(200).json({ status: "ok", message: "StorageIQ API is running" });
    return;
  }

  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    res.status(500).json({ error: "ANTHROPIC_API_KEY not configured" });
    return;
  }

  let body = req.body;

  // If body is a string (raw), parse it
  if (typeof body === "string") {
    try { body = JSON.parse(body); } catch {}
  }

  const { messages, max_tokens = 1500 } = body || {};

  if (!messages) {
    res.status(400).json({ error: "Missing messages" });
    return;
  }

  try {
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({ model: "claude-sonnet-4-6", max_tokens, messages }),
    });

    const data = await response.json();

    if (!response.ok) {
      res.status(response.status).json({ error: data.error || "Anthropic API error" });
      return;
    }

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: `Server error: ${err.message}` });
  }
}
