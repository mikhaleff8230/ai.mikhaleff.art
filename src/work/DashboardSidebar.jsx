const copy = {
  ru: {
    home: "Главная",
    welcomeLine1: "С возвращением,",
    welcomeLine2: "Джон!",
    subtitle: "Текущая сводка вашего крипто-портфеля",
    pocket: "Портфель",
    stakedRewards: "Стейкинг награды",
    menu: ["Обзор", "Выписка кошелька", "Прогноз портфеля", "Аккаунт"]
  },
  en: {
    home: "Home",
    welcomeLine1: "Welcome Back,",
    welcomeLine2: "John!",
    subtitle: "Current summary of your crypto portfolio",
    pocket: "Pocket",
    stakedRewards: "Staked Rewards",
    menu: ["Overview", "Wallet Statement", "Portfolio Projection", "Account"]
  }
};

export default function DashboardSidebar({
  collapsed,
  openMobile,
  onCloseMobile,
  onToggleCollapsed,
  lang
}) {
  const t = copy[lang] ?? copy.en;
  const menuGroups = [
    {
      title: t.home,
      items: [
        [t.menu[0], "⌂", "overview"],
        [t.menu[1], "◫", "wallet-statement"],
        [t.menu[2], "◧", "portfolio-projection"],
        [t.menu[3], "◎", "account"]
      ]
    }
  ];

  return (
    <>
      {openMobile ? (
        <button
          aria-label="Close sidebar backdrop"
          onClick={onCloseMobile}
          className="fixed inset-0 z-40 bg-black/60 lg:hidden"
        />
      ) : null}

      <aside
        className={`fixed left-0 top-0 z-50 h-screen border-r border-white/10 bg-[#0b0b0b] transition-all duration-300 lg:sticky lg:z-30 ${
          collapsed ? "w-[80px]" : "w-[260px]"
        } ${openMobile ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}
      >
        <div className="flex h-16 items-center justify-between border-b border-white/10 px-4">
          <div className={`flex items-center gap-2 ${collapsed ? "w-full justify-center" : ""}`}>
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-[#172013] text-xs font-semibold text-neon">
              AC
            </span>
            {!collapsed ? <span className="text-sm text-zinc-200">Alex Studio</span> : null}
          </div>
          {!collapsed ? (
            <button
              aria-label="Collapse sidebar"
              onClick={onToggleCollapsed}
              className="hidden rounded-md bg-white/5 px-2 py-1 text-zinc-300 hover:bg-white/10 lg:block"
            >
              ←
            </button>
          ) : null}
        </div>

        <div className="h-[calc(100vh-64px)] overflow-y-auto p-3">
          {!collapsed ? (
            <div className="mb-7 px-1 pt-2">
              <h2 className="text-[46px] font-semibold leading-[0.95]">
                {t.welcomeLine1}
                <br />
                {t.welcomeLine2}
              </h2>
              <p className="mt-2 text-xs text-zinc-400">{t.subtitle}</p>
            </div>
          ) : null}

          {collapsed ? (
            <button
              aria-label="Expand sidebar"
              onClick={onToggleCollapsed}
              className="mb-3 hidden w-full rounded-xl bg-white/5 px-2 py-2 text-zinc-200 hover:bg-white/10 lg:block"
            >
              →
            </button>
          ) : null}

          {menuGroups.map((group) => (
            <div key={group.title} className="mb-5">
              {!collapsed ? (
                <p className="mb-2 px-2 text-[11px] uppercase tracking-[0.2em] text-zinc-500">
                  {group.title}
                </p>
              ) : null}
              <div className="space-y-1">
                {group.items.map(([label, icon, id], i) => (
                  <a
                    key={label}
                    href={`#${id}`}
                    className={`flex items-center rounded-xl px-3 py-2.5 text-sm transition ${
                      i === 0 && group.title === t.home
                        ? "bg-[#f4f4f4] text-black"
                        : "text-zinc-300 hover:bg-white/5 hover:text-white"
                    } ${collapsed ? "justify-center" : "gap-3"}`}
                  >
                    <span className="text-base">{icon}</span>
                    {!collapsed ? <span>{label}</span> : null}
                  </a>
                ))}
              </div>
            </div>
          ))}

          <div className={`mt-8 ${collapsed ? "px-0" : "px-1"}`}>
            {!collapsed ? (
              <div className="mb-2 flex items-center justify-between">
                <p className="text-[11px] uppercase tracking-[0.2em] text-zinc-500">{t.pocket}</p>
                <button className="grid h-5 w-5 place-items-center rounded-full bg-neon text-xs font-semibold text-black">
                  +
                </button>
              </div>
            ) : null}
            <button
              className={`flex w-full items-center rounded-xl py-2.5 text-sm text-zinc-300 hover:bg-white/5 hover:text-white ${
                collapsed ? "justify-center px-0" : "gap-3 px-3"
              }`}
            >
              <span className="text-base">◍</span>
              {!collapsed ? <span>{t.stakedRewards}</span> : null}
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}
