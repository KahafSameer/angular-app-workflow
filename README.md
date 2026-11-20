# Angular App: GitHub Actions Workflow

A starter Angular app used to test a **GitHub Actions build workflow**.

## Workflow (`.github/workflows/main.yml`)

"Build My angular app to test workflow in this app" runs on every push to `main`:

1. Check out the repository
2. Set up Node.js 22.x
3. `npm install`
4. `npm run build`

## Tech Stack

Angular · TypeScript · RxJS · Karma/Jasmine · GitHub Actions

## Run locally

```bash
git clone https://github.com/KahafSameer/angular-app-workflow.git
cd angular-app-workflow
npm install
npm start          # ng serve → http://localhost:4200
```

| Command | Description |
|---|---|
| `npm start` | Dev server (`ng serve`) |
| `npm run build` | Production build into `dist/` |
| `npm run watch` | Rebuild on change (development config) |
| `npm test` | Unit tests (Karma) |
