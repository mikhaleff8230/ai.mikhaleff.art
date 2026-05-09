# Client Entry Landing

Vite + React + Tailwind лендинг с Sanity CMS и i18n (RU/EN).

**Полная пошаговая инструкция (локально, Sanity, Vercel, Git, токены, CORS):** [SETUP.md](./SETUP.md)

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

## GitHub (одна команда)

После настройки `git remote` и авторизации GitHub (HTTPS с токеном или SSH):

```bash
npm run ship
```

Скрипт делает `git add -A`, при наличии изменений — коммит с сообщением по умолчанию `chore: sync`, затем `git push -u origin` **на текущую ветку** (например `main`).

Со своим сообщением:

```bash
npm run ship -- "feat: обновил hero"
```

Только пуш (если уже закоммитил):

```bash
npm run push
```

Ветку можно переопределить: `$env:GIT_BRANCH="main"; npm run ship` (PowerShell) или `GIT_BRANCH=main npm run ship` (bash).

### SSH на Windows (если `git push` пишет `Permission denied` или `Host key verification failed`)

Иногда Git подставляет «ломаный» путь к `~/.ssh`. Тогда в **этом** репозитории один раз задай явный ключ и `known_hosts` (подставь свой путь к файлу ключа, если он не `id_ed25519_github_new`):

```powershell
git config core.sshCommand "ssh -i C:/Users/<YOU>/.ssh/id_ed25519_github_new -o IdentitiesOnly=yes -o StrictHostKeyChecking=accept-new -o UserKnownHostsFile=C:/Users/<YOU>/.ssh/known_hosts"
```

Проверка: `ssh -T git@github.com` должно ответить `Hi <username>!`.

## Контактная форма → Telegram

Форма из секции **Contact** отправляет заявку прямо в Telegram-чат через Bot API. Никакого бэкенда.

1. В Telegram открой [@BotFather](https://t.me/BotFather) → `/newbot` → задай имя и username, получишь токен вида `123456789:AAE...`.
2. Получи свой `chat_id`:
   - Напиши новому боту любое сообщение (`/start`).
   - Открой `https://api.telegram.org/bot<TOKEN>/getUpdates` в браузере.
   - В ответе найди `"chat":{"id": ...}` — это нужный chat_id.
   - Можно также отправить в чат [@userinfobot](https://t.me/userinfobot) — он сразу пришлёт твой id.
3. Заполни в `.env`:

```
VITE_TELEGRAM_BOT_TOKEN=123456789:AAE...
VITE_TELEGRAM_CHAT_ID=123456789
```

4. Перезапусти `npm run dev`. Заявка с формы прилетает в Telegram мгновенно.

> Токен попадает в клиентский бандл — это ограничение «без бэкенда». Для контактной формы это допустимый риск (бот может отправлять только в твой `chat_id`). Если нужен серьёзнее уровень — делаем Vercel API + Resend.

После деплоя на Vercel не забудь добавить эти же переменные в **Settings → Environment Variables** проекта.

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
