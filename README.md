# StorageIQ — Deal Analyzer

Self-storage deal analyzer with AI-powered document extraction.

## Setup

### 1. Create GitHub repo
Create a new repo called `storageiq-app` and upload all these files.

### 2. Deploy to Vercel
- Import `storageiq-app` repo in Vercel
- Add environment variable: `VITE_API_URL` = `https://storageiq-backend.vercel.app`
- Deploy

### 3. Open your app
Visit your Vercel URL — e.g. `https://storageiq-app.vercel.app`

## Features
- Deal pipeline dashboard
- Buy Box criteria checker
- Kill Switch (REIT, MHI, Crime, Flood Zone)
- 100-point scorecard with live scoring
- Offer multiple calculator
- AI document extraction (PDF, Word, Excel, Images)
- Market intel tracking
- Deal persistence via localStorage
