# StorageIQ Backend

Vercel serverless proxy for the StorageIQ Deal Analyzer.
Securely forwards document extraction requests to the Anthropic API.

## Setup

### 1. Deploy to Vercel
- Push this repo to GitHub
- Import it in Vercel (vercel.com/new)
- Vercel will auto-detect and deploy it

### 2. Add your Anthropic API key
In Vercel dashboard:
- Go to your project → Settings → Environment Variables
- Add: `ANTHROPIC_API_KEY` = your key from console.anthropic.com
- Redeploy

### 3. Copy your Vercel URL
It will look like: `https://storageiq-backend.vercel.app`

### 4. Paste it into StorageIQ
In the StorageIQ artifact, enter your Vercel URL when prompted.

## API
`POST /api/extract` — proxies requests to Anthropic claude-sonnet-4-6
