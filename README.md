# Test-Task-Usense (World News)

Angular app for browsing the latest world news: headlines by category, keyword search and article details. Data comes from [GNews API](https://gnews.io).

Built with Angular 22 (standalone components, signals, `httpResource`, signal forms).

## Getting started

Requires Node.js 22.22.3+ or 24.

```bash
npm install
cp .env.example .env
```

Put your GNews API key into `.env`:

```
NG_APP_GNEWS_API_KEY=your_key
```

```bash
npm start
```

The app runs at `http://localhost:4200/`.
