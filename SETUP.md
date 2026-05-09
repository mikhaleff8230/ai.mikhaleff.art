# Инструкция: лендинг, Sanity, Vercel, Git

Полный чеклист по проекту **client-entry-landing**. Краткий обзор структуры — в [README.md](./README.md).

---

## 1. Локальный запуск лендинга

```bash
cd client-entry-landing
npm install
```

Создай файл `.env` в корне (можно скопировать из `.env.example`):

```env
VITE_SANITY_PROJECT_ID=n72tvosu
VITE_SANITY_DATASET=production
VITE_SANITY_API_VERSION=2024-09-01
```

Опционально — форма «Контакт» в Telegram:

```env
VITE_TELEGRAM_BOT_TOKEN=...
VITE_TELEGRAM_CHAT_ID=...
```

Запуск:

```bash
npm run dev
```

Открой [http://localhost:5173](http://localhost:5173).

- Без `VITE_SANITY_PROJECT_ID` контент берётся из `src/data/fallback.js`.
- С переменными — данные подгружаются из Sanity (см. раздел 3).

---

## 2. Локальная админка Sanity (Studio)

```bash
cd studio
npm install
```

Файл `studio/.env`:

```env
SANITY_STUDIO_PROJECT_ID=n72tvosu
SANITY_STUDIO_DATASET=production
SANITY_AUTH_TOKEN=...   # токен с правами Editor (для seed)
```

### Первый раз: заливка контента (seed)

```bash
npm run seed
```

Создаёт документы: `siteSettings`, `landingPage`, проекты, услуги, отзывы.

### Запуск Studio

```bash
npm run dev
```

Открой [http://localhost:3333](http://localhost:3333). Войди через аккаунт Sanity (браузер).

### Проекты: обложка

В типе **Project** поле **«Обложка проекта»** — загрузка файла (JPG/PNG/WebP). Можно заменить или удалить в интерфейсе. Старое поле URL скрыто; лендинг отдаёт `coalesce(загруженный файл, legacy URL)`.

Подробнее по Studio — [studio/README.md](./studio/README.md).

---

## 3. Sanity в браузере (manage)

1. [sanity.io/manage](https://www.sanity.io/manage) → выбери проект (ID вида `n72tvosu`).

### CORS (обязательно для продакшена)

**API → CORS origins → Add CORS origin**

Добавь:

- `http://localhost:5173` — локальный лендинг
- `https://<твой-домен>.vercel.app` — продакшен на Vercel
- свой кастомный домен, если подключишь позже

Без CORS браузер заблокирует запросы к `*.api.sanity.io`.

### Токены

- **Editor** — для `npm run seed` и скриптов.
- Деплой Studio на `*.sanity.studio` требует **входа через `sanity login`** или токен с правами на деплой Studio (не Editor-only).

**Безопасность:** не публикуй токены в чаты и репозиторий. Отзывай скомпрометированные токены в **API → Tokens**.

---

## 4. Публикация Studio в облако (`*.sanity.studio`)

На своей машине (нужен браузер для OAuth):

```bash
cd studio
npx sanity login
npx sanity deploy
```

Поддомен задаётся в [sanity.cli.ts](./studio/sanity.cli.ts) (`studioHost`). Если имя занято — поменяй и снова `deploy`.

---

## 5. Vercel

1. [vercel.com](https://vercel.com) → Import **GitHub** → репозиторий с этим лендингом.
2. **Root Directory:** `./` (корень репозитория, где `package.json` лендинга).
3. **Framework:** Vite. **Build:** `npm run build`. **Output:** `dist`.

### Переменные окружения (Settings → Environment Variables)

Минимум для контента из Sanity:

| Name | Value |
|------|--------|
| `VITE_SANITY_PROJECT_ID` | `n72tvosu` |
| `VITE_SANITY_DATASET` | `production` |

Для формы в Telegram (опционально):

| Name | Value |
|------|--------|
| `VITE_TELEGRAM_BOT_TOKEN` | токен бота |
| `VITE_TELEGRAM_CHAT_ID` | числовой chat id |

Сохрани → **Redeploy** последнего деплоя.

После деплоя добавь URL продакшена в **Sanity → CORS** (раздел 3).

---

## 6. Git: коммит и push одной командой

Из корня `client-entry-landing`:

```bash
npm run ship
```

Сообщение коммита:

```bash
npm run ship -- "feat: описание изменений"
```

Только push (если уже закоммитил):

```bash
npm run push
```

### SSH на Windows

Если `git push` пишет `Permission denied` или проблемы с `known_hosts`, в этом репозитории можно задать явный ключ (подставь свой путь):

```powershell
git config core.sshCommand "ssh -i C:/Users/<YOU>/.ssh/id_ed25519_github_new -o IdentitiesOnly=yes -o StrictHostKeyChecking=accept-new -o UserKnownHostsFile=C:/Users/<YOU>/.ssh/known_hosts"
```

---

## 7. Частые вопросы

**Лендинг пустой / старый контент на Vercel**  
Проверь переменные `VITE_SANITY_*`, CORS в Sanity и сделай Redeploy.

**Форма не отправляется**  
На Vercel должны быть `VITE_TELEGRAM_*`. Локально — в `.env` в корне.

**Studio не открывается**  
`cd studio && npm install && npm run dev`. Проверь `SANITY_STUDIO_PROJECT_ID` в `studio/.env`.

**Контент не меняется после правок в Studio**  
У лендинга `useCdn: true` в клиенте Sanity — обычно обновление с задержкой до ~60 с. Для мгновенной проверки можно временно `useCdn: false` в `src/lib/sanity.js` (только для отладки).

---

## 8. Полезные ссылки

- Репозиторий: `https://github.com/mikhaleff8230/ai.mikhaleff.art`
- Управление Sanity: [sanity.io/manage](https://www.sanity.io/manage)
- Документация Sanity Studio в папке: [studio/README.md](./studio/README.md)
