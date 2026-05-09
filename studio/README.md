# Sanity Studio — Client Entry Landing

CMS для лендинга. Все локализуемые поля имеют RU/EN.

## Первый запуск

```bash
cd studio
npm install
npx sanity login        # авторизуйся в Sanity (откроется браузер)
```

Создай проект (если ещё нет):

1. Открой https://www.sanity.io/manage и создай новый проект (Free).
2. В разделе **API → CORS origins** добавь:
   - `http://localhost:5173` (для локального лендинга)
   - URL твоего Vercel-деплоя (после первого деплоя)
3. В **API → Tokens** сгенерируй токен с правами **Editor** — он нужен только для seed.

Создай `.env` (скопируй из `.env.example`) и заполни:

```
SANITY_STUDIO_PROJECT_ID=<projectId из шага 1>
SANITY_STUDIO_DATASET=production
SANITY_AUTH_TOKEN=<editor token из шага 3>
```

## Seed (заливка стартового контента)

```bash
npm run seed
```

Скрипт берёт данные из `../src/data/fallback.js` и создаёт:
- 1 документ `siteSettings`
- 1 документ `landingPage`
- 4 документа `project`
- 4 документа `service`
- 2 документа `testimonial`

## Локальный запуск Studio

```bash
npm run dev
```

Откроет http://localhost:3333 — добавляй/редактируй контент.

## Деплой Studio

Чтобы редактировать контент откуда угодно, опубликуй Studio:

```bash
npm run deploy
```

Sanity спросит поддомен — например `client-entry`. Studio будет доступна по
`https://client-entry.sanity.studio`.
