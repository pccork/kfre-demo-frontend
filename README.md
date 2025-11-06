# KFRE Demo Frontend

Lightweight React/Vite demo for stakeholders — no backend, no data stored.

## Run locally
```bash
npm install
npm run dev
```

## Build & Deploy
```bash
npm run build
aws s3 mb s3://kfre-demo-frontend --region eu-west-1
aws s3 sync dist/ s3://kfre-demo-frontend --delete
```

## Description
- Simple form collects Age, Sex, eGFR, ACR.
- Mock risk calculation runs client-side.
- Result color-coded: Low / Moderate / High.
- Perfect for non-clinical UX demos.
