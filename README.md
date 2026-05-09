# Client Entry Landing

Vite + React + Tailwind лендинг с Sanity CMS и i18n (RU/EN).

## Структура

```
client-entry-landing/
├── src/                # фронтенд (Vite + React)
│   ├── App.jsx
│   ├── lib/sanity.js   # клиент Sanity
│   ├── lib/queries.js  # GROQ-запросы
│   ├── hooks/useLandingContent.js
│   └── data/fallback.js  # стартовые данные / fallback
└── studio/             # Sanity Studio (CMS)
    ├── schemas/
    └── scripts/seed.mjs
```

## Первый запуск (фронтенд)

```bash
npm install
cp .env.example .env       # заполни projectId после создания проекта в Sanity
npm run dev
```

Лендинг работает и без Sanity — берёт `src/data/fallback.js`. Как только в `.env` появится
`VITE_SANITY_PROJECT_ID`, контент будет подтягиваться из CMS.

## Sanity CMS

См. `studio/README.md`.

```bash
cd studio
npm install
npx sanity login
# скопировать .env.example -> .env, заполнить projectId и токен
npm run seed     # один раз, чтобы залить стартовый контент
npm run dev      # локальный запуск Studio на :3333
npm run deploy   # опубликовать Studio на *.sanity.studio
```

## Деплой на Vercel

```bash
npm install -g vercel
vercel login
vercel             # первый деплой (preview)
vercel --prod      # production
```

В настройках проекта на Vercel добавь переменные окружения:
- `VITE_SANITY_PROJECT_ID`
- `VITE_SANITY_DATASET=production`

После деплоя добавь домен Vercel в **Sanity → API → CORS origins**.
