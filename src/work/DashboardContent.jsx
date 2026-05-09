import DonutChart from "./DonutChart";

function WidgetShell({ children, className = "" }) {
  return (
    <article
      className={`rounded-[22px] border border-white/10 bg-[#151515] p-4 shadow-[0_12px_30px_rgba(0,0,0,.25)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_14px_34px_rgba(182,255,59,.12)] md:p-5 ${className}`}
    >
      {children}
    </article>
  );
}

function AssetAllocationCard({ t }) {
  const value = 75;

  return (
    <WidgetShell className="bg-[#0f0f0f]">
      <div className="mb-4 flex items-start justify-between">
        <div>
          <p className="text-3xl font-semibold">$17.3K</p>
          <p className="text-sm text-zinc-400">{t.total}</p>
        </div>
        <button className="rounded-full border border-white/20 px-4 py-1.5 text-sm text-zinc-300">{t.weekly}</button>
      </div>
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-3xl font-medium">{t.assetAllocation}</h3>
        <div className="text-xs text-zinc-500">• {t.bitcoin} • {t.ethereum} • {t.altcoins}</div>
      </div>
      <div className="donut-panel-bg relative grid min-h-[250px] place-items-center gap-4 overflow-hidden rounded-2xl border border-white/10 bg-[#0b0d11] p-6">
        <div className="donut-panel-glow-a pointer-events-none absolute z-0" />
        <div className="donut-panel-glow-b pointer-events-none absolute z-0" />

        <div className="relative z-10 grid place-items-center">
          <DonutChart value={value} size={210} strokeWidth={12} />
        </div>
        <div className="relative z-10 text-center">
          <p className="text-sm text-zinc-300">{t.completionLabel}</p>
          <p className="mt-2 text-xs leading-relaxed text-zinc-500">{t.completionText}</p>
        </div>
      </div>
    </WidgetShell>
  );
}

function PromoCard({ t }) {
  return (
    <WidgetShell className="relative overflow-hidden bg-black">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(182,255,59,.26),transparent_35%)]" />
      <h3 className="relative text-5xl font-semibold leading-tight">
        {t.joinCryptoLine1}
        <br />
        {t.joinCryptoLine2}
      </h3>
      <div className="relative mt-6 flex flex-wrap items-center justify-between gap-3">
        <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-zinc-300">{t.discount}</span>
        <button className="rounded-full bg-[#B6FF3B] px-4 py-2 text-sm font-medium text-black transition hover:scale-[1.02]">
          {t.joinClass} ↗
        </button>
      </div>
    </WidgetShell>
  );
}

function EarningsCard({ t }) {
  return (
    <WidgetShell className="bg-black">
      <p className="text-sm text-zinc-400">{t.todaysEarnings}</p>
      <p className="mt-2 text-5xl font-semibold">$532,921</p>
      <p className="mt-2 text-sm text-zinc-400">{t.percentageChange}</p>
    </WidgetShell>
  );
}

function ReportCard({ t }) {
  return (
    <WidgetShell className="bg-gradient-to-br from-[#23380C] to-[#11150D]">
      <div className="mb-4 flex items-center gap-2">
        <button className="grid h-8 w-8 place-items-center rounded-full bg-black/35 text-sm">↓</button>
        <button className="grid h-8 w-8 place-items-center rounded-full bg-black/35 text-sm">↗</button>
      </div>
      <p className="text-3xl font-medium">{t.portfolioReport}</p>
      <p className="mt-2 max-w-[28ch] text-sm text-zinc-200">{t.portfolioReportText}</p>
    </WidgetShell>
  );
}

function UpcomingMeetingsCard({ t }) {
  const meetings = [
    ["Oct 22, 16:00", t.meeting1, "Evgeny B."],
    ["Oct 23, 12:30", t.meeting2, "Lilu W."]
  ];

  return (
    <WidgetShell className="bg-[#161722]">
      <div className="mb-4 flex items-center justify-between">
        <p className="text-sm font-medium text-zinc-200">{t.upcomingMeetings}</p>
        <button className="text-zinc-500">•••</button>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {meetings.map(([date, title, person]) => (
          <div key={date} className="rounded-2xl border border-white/10 bg-[#10111a] p-3">
            <p className="text-xs text-zinc-400">{date}</p>
            <p className="mt-2 text-sm text-zinc-100">{title}</p>
            <p className="mt-4 text-xs text-zinc-400">{person}</p>
          </div>
        ))}
      </div>
    </WidgetShell>
  );
}

function RecentProjectsCard({ t }) {
  const items = [
    [t.project1, t.active, t.dayRemaining],
    [t.project2, t.paused, t.daysRemaining],
    [t.project3, t.done, t.projectDone]
  ];

  return (
    <WidgetShell className="bg-[#161722]">
      <div className="mb-4 flex items-center justify-between">
        <p className="text-sm font-medium text-zinc-200">{t.recentProjects}</p>
        <button className="text-zinc-500">•••</button>
      </div>
      <div className="space-y-3">
        {items.map(([name, status, right]) => (
          <div key={name} className="grid grid-cols-[1.3fr_120px_1fr] items-center gap-2 border-b border-white/5 pb-3 last:border-0 last:pb-0">
            <p className="text-sm text-zinc-200">{name}</p>
            <span
              className={`w-fit rounded-full px-3 py-1 text-xs ${
                status === t.active
                  ? "bg-[#B6FF3B]/20 text-[#B6FF3B]"
                  : status === t.paused
                    ? "bg-zinc-600/40 text-zinc-300"
                    : "bg-zinc-700/40 text-zinc-200"
              }`}
            >
              {status}
            </span>
            <p className="text-xs text-zinc-500">{right}</p>
          </div>
        ))}
      </div>
    </WidgetShell>
  );
}

function AddWidgetCard({ t }) {
  return (
    <WidgetShell className="grid place-items-center bg-[#161722]">
      <button className="grid h-24 w-24 place-items-center rounded-full border border-zinc-500 text-3xl text-zinc-400 transition hover:scale-[1.02] hover:border-zinc-300 hover:text-zinc-200">
        +
      </button>
      <p className="mt-4 text-zinc-400">{t.addWidget}</p>
    </WidgetShell>
  );
}

function PortfolioShowcase({ t }) {
  const items = [
    {
      title: "Nova Finance Dashboard",
      description: t.portfolioItem1,
      tags: ["UI/UX", "Web App", "Fintech"],
      image:
        "https://images.unsplash.com/photo-1518773553398-650c184e0bb3?auto=format&fit=crop&w=1200&q=80"
    },
    {
      title: "Halo Design System",
      description: t.portfolioItem2,
      tags: ["Design System", "Branding"],
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80"
    },
    {
      title: "Pulse Mobile Banking",
      description: t.portfolioItem3,
      tags: ["Mobile", "UI/UX", "Fintech"],
      image:
        "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1200&q=80"
    },
    {
      title: "Atlas Studio Website",
      description: t.portfolioItem4,
      tags: ["Web", "Branding", "Editorial"],
      image:
        "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=1200&q=80"
    }
  ];

  return (
    <div className="mt-4 rounded-[22px] border border-white/10 bg-[#161722] p-4 md:p-5">
      <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-neon">{t.selectedWork}</p>
          <h2 className="mt-2 text-3xl font-semibold leading-tight md:text-5xl">{t.projectsTitle}</h2>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {items.map((item) => (
          <article
            key={item.title}
            className="group overflow-hidden rounded-[22px] border border-white/10 bg-[#10111a] transition hover:-translate-y-0.5 hover:shadow-[0_14px_34px_rgba(182,255,59,.12)]"
          >
            <div className="aspect-[16/11] overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-4">
              <h3 className="text-2xl font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-zinc-400">{item.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 px-3 py-1 text-[11px] text-zinc-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

const copy = {
  ru: {
    portfolioOverview: "Обзор портфеля",
    breadcrumb: "Обзор > Все отчеты",
    activity: "Активность",
    journal: "Журнал",
    filter: "Фильтр",
    total: "Всего",
    weekly: "За неделю",
    assetAllocation: "Распределение активов",
    completionLabel: "Прогресс распределения активов",
    completionText: "Диаграмма обновляется динамически от значения value и плавно анимируется при загрузке.",
    bitcoin: "Биткоин",
    ethereum: "Эфир",
    altcoins: "Альткоины",
    joinCryptoLine1: "Присоединяйтесь к",
    joinCryptoLine2: "крипто мастер-классу",
    discount: "+15% скидка для участников",
    joinClass: "Присоединиться",
    todaysEarnings: "Доход за сегодня",
    percentageChange: "+73% изменение",
    portfolioReport: "Отчет портфеля",
    portfolioReportText: "Сформируйте и скачайте подробный отчет по эффективности вашего крипто-портфеля.",
    upcomingMeetings: "Ближайшие встречи",
    meeting1: "Брифинг по сайту",
    meeting2: "Концепт дизайна лендинга",
    recentProjects: "Последние проекты",
    project1: "Лендинг: дизайн дашборда",
    project2: "E-Commerce сайт",
    project3: "Баннер для Google",
    active: "Активно",
    paused: "Пауза",
    done: "Готово",
    dayRemaining: "1 день осталось",
    daysRemaining: "19 дней осталось",
    projectDone: "Проект завершен",
    addWidget: "Добавить виджет",
    selectedWork: "Избранные проекты",
    projectsTitle: "Проекты, которые приносят ценность, а не только пиксели.",
    portfolioItem1: "Крипто-дашборд с аналитикой в реальном времени и кастомными графиками.",
    portfolioItem2: "Масштабируемая дизайн-система для B2B SaaS с продуманными токенами.",
    portfolioItem3: "Мобильный банкинг с биометрическим входом и быстрыми переводами.",
    portfolioItem4: "Маркетинговый сайт с акцентом на типографику и интерактивные истории."
  },
  en: {
    portfolioOverview: "Portfolio Overview",
    breadcrumb: "Overview > All Reports",
    activity: "Activity",
    journal: "Journal",
    filter: "Filter",
    total: "Total",
    weekly: "Weekly",
    assetAllocation: "Asset Allocation",
    completionLabel: "Asset allocation progress",
    completionText: "The chart updates from the value variable and animates smoothly on load.",
    bitcoin: "Bitcoin",
    ethereum: "Ethereum",
    altcoins: "Altcoins",
    joinCryptoLine1: "Join Our Crypto",
    joinCryptoLine2: "Mastery Class",
    discount: "+15% discount for members",
    joinClass: "Join Class",
    todaysEarnings: "Today's Earnings",
    percentageChange: "+73% Percentage Change",
    portfolioReport: "Portfolio Report",
    portfolioReportText: "Generate and download detailed report of your crypto performance.",
    upcomingMeetings: "Upcoming meetings",
    meeting1: "Briefing for website",
    meeting2: "Landing Page Concept Design",
    recentProjects: "Recent projects",
    project1: "Landing Page: dashboard design",
    project2: "E-Commerce website",
    project3: "Banner for Google",
    active: "Active",
    paused: "Paused",
    done: "Done",
    dayRemaining: "1 day remaining",
    daysRemaining: "19 days remaining",
    projectDone: "Project done",
    addWidget: "Add new widget",
    selectedWork: "Selected work",
    projectsTitle: "Projects that ship value, not just pixels.",
    portfolioItem1: "A crypto portfolio dashboard with real-time analytics and custom charts.",
    portfolioItem2: "A scalable design system for B2B SaaS with robust tokens.",
    portfolioItem3: "Mobile banking with biometric onboarding and fast transfers.",
    portfolioItem4: "A marketing website focused on typography and interactive storytelling."
  }
};

export default function DashboardContent({ lang }) {
  const t = copy[lang] ?? copy.en;

  return (
    <section className="relative overflow-hidden rounded-[24px] border border-white/10 bg-[#1b1b1d] p-4 md:p-6">
      <div className="work-glow-bg pointer-events-none absolute inset-0 z-0" />

      <div className="relative z-10 mb-5 flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="text-5xl font-medium">{t.portfolioOverview}</h1>
          <p className="mt-1 text-sm text-zinc-400">{t.breadcrumb}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <button className="rounded-full bg-black px-4 py-2 text-sm text-zinc-200">{t.activity}</button>
          <button className="rounded-full bg-black px-4 py-2 text-sm text-zinc-200">{t.journal}</button>
          <button className="rounded-full bg-black px-4 py-2 text-sm text-zinc-200">{t.filter} ⊝</button>
        </div>
      </div>

      <div className="relative z-10 grid grid-cols-1 gap-4 xl:grid-cols-[1.1fr_1fr]">
        <AssetAllocationCard t={t} />
        <div className="grid grid-cols-1 gap-4">
          <PromoCard t={t} />
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <EarningsCard t={t} />
            <ReportCard t={t} />
          </div>
        </div>
      </div>

      <div className="relative z-10 mt-4 grid grid-cols-1 gap-4 xl:grid-cols-[1fr_1.6fr_0.9fr]">
        <UpcomingMeetingsCard t={t} />
        <RecentProjectsCard t={t} />
        <AddWidgetCard t={t} />
      </div>

      <div className="relative z-10">
        <PortfolioShowcase t={t} />
      </div>
    </section>
  );
}
