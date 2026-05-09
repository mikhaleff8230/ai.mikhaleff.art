import { Link } from "react-router-dom";

const tabs = {
  ru: ["Обзор", "Проекты", "Сбережения", "Доход", "Активность"],
  en: ["Overview", "Portfolio", "Savings", "Income", "Activity"]
};

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 32 32" className="h-5 w-5 fill-current" aria-hidden="true">
      <path d="M19.11 17.16c-.27-.14-1.58-.78-1.82-.87-.24-.09-.42-.14-.6.14-.18.27-.69.87-.85 1.05-.15.18-.31.2-.58.07-.27-.14-1.13-.42-2.15-1.34-.79-.71-1.33-1.59-1.49-1.86-.16-.27-.02-.41.12-.54.13-.13.27-.31.4-.47.13-.15.18-.27.27-.45.09-.18.04-.34-.02-.47-.07-.14-.6-1.44-.82-1.98-.22-.52-.44-.45-.6-.46h-.51c-.18 0-.47.07-.71.34-.24.27-.93.91-.93 2.22 0 1.31.96 2.58 1.09 2.76.13.18 1.88 2.87 4.56 4.03.64.28 1.14.45 1.53.58.64.2 1.23.17 1.69.1.52-.08 1.58-.65 1.8-1.27.22-.62.22-1.15.15-1.27-.06-.13-.24-.2-.51-.34Z" />
      <path d="M16.02 3.2c-7.07 0-12.79 5.72-12.79 12.78 0 2.25.59 4.45 1.72 6.39l-1.83 6.69 6.84-1.79a12.73 12.73 0 0 0 6.06 1.54h.01c7.06 0 12.79-5.73 12.79-12.79S23.08 3.2 16.02 3.2Zm0 23.46h-.01a10.6 10.6 0 0 1-5.4-1.48l-.39-.23-4.06 1.06 1.08-3.96-.25-.41a10.62 10.62 0 0 1-1.63-5.62c0-5.89 4.79-10.68 10.67-10.68 5.89 0 10.68 4.79 10.68 10.68 0 5.89-4.8 10.68-10.69 10.68Z" />
    </svg>
  );
}

export default function DashboardTopbar({ onOpenMobileSidebar, lang, onChangeLanguage }) {
  const labels = tabs[lang] ?? tabs.en;

  return (
    <header className="sticky top-0 z-20 flex h-16 items-center justify-between border-b border-white/10 bg-[#090b10]/85 px-4 backdrop-blur md:px-6">
      <div className="flex min-w-0 items-center gap-3">
        <button
          aria-label="Open sidebar"
          onClick={onOpenMobileSidebar}
          className="rounded-lg bg-white/5 px-2.5 py-1.5 text-zinc-100 hover:bg-white/10 lg:hidden"
        >
          ☰
        </button>
        <div className="hide-scrollbar flex min-w-0 items-center gap-2 overflow-x-auto rounded-full bg-[#11141a] p-1">
          {labels.map((tab, i) => (
            <button
              key={tab}
              className={`whitespace-nowrap rounded-full px-4 py-2 text-sm transition ${
                i === 0 ? "bg-neon text-black" : "text-zinc-300 hover:text-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-2">
        <Link
          to="/"
          className="rounded-full border border-white/20 bg-[#12161f] px-4 py-2 text-sm font-medium text-zinc-200 transition hover:scale-[1.02] hover:border-white/35 hover:text-white md:px-5"
        >
          {lang === "ru" ? "На главную" : "Back home"}
        </Link>

        <div className="flex items-center rounded-full bg-[#1b2436] p-1">
          <button
            onClick={() => onChangeLanguage("ru")}
            className={`rounded-full px-3 py-1 text-xs font-semibold transition ${
              lang === "ru" ? "bg-white text-[#293140]" : "text-zinc-300 hover:text-white"
            }`}
          >
            RU
          </button>
          <button
            onClick={() => onChangeLanguage("en")}
            className={`rounded-full px-3 py-1 text-xs font-semibold transition ${
              lang === "en" ? "bg-white text-[#293140]" : "text-zinc-300 hover:text-white"
            }`}
          >
            EN
          </button>
        </div>

        <a
          href="https://wa.me/37378503062"
          target="_blank"
          rel="noreferrer"
          aria-label="WhatsApp"
          className="grid h-10 w-10 place-items-center rounded-full bg-[#22C55E] text-white shadow-[0_6px_18px_rgba(34,197,94,.35)] transition hover:scale-[1.02]"
        >
          <WhatsAppIcon />
        </a>

        <button className="rounded-full border border-white/20 bg-[#152039] px-4 py-2 text-sm font-semibold text-zinc-100 transition hover:scale-[1.02] hover:bg-[#1a2746] md:px-5">
          {lang === "ru" ? "Получить оффер" : "Get a quote"}
        </button>
      </div>
    </header>
  );
}
