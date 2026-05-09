import { useMemo, useState } from "react";
import { useLandingContent } from "./hooks/useLandingContent";

const pick = (value, lang) => {
  if (!value) return "";
  if (typeof value === "string") return value;
  return value[lang] ?? value.en ?? value.ru ?? "";
};

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 32 32" className="h-5 w-5 fill-current" aria-hidden="true">
      <path d="M19.11 17.16c-.27-.14-1.58-.78-1.82-.87-.24-.09-.42-.14-.6.14-.18.27-.69.87-.85 1.05-.15.18-.31.2-.58.07-.27-.14-1.13-.42-2.15-1.34-.79-.71-1.33-1.59-1.49-1.86-.16-.27-.02-.41.12-.54.13-.13.27-.31.4-.47.13-.15.18-.27.27-.45.09-.18.04-.34-.02-.47-.07-.14-.6-1.44-.82-1.98-.22-.52-.44-.45-.6-.46h-.51c-.18 0-.47.07-.71.34-.24.27-.93.91-.93 2.22 0 1.31.96 2.58 1.09 2.76.13.18 1.88 2.87 4.56 4.03.64.28 1.14.45 1.53.58.64.2 1.23.17 1.69.1.52-.08 1.58-.65 1.8-1.27.22-.62.22-1.15.15-1.27-.06-.13-.24-.2-.51-.34Z" />
      <path d="M16.02 3.2c-7.07 0-12.79 5.72-12.79 12.78 0 2.25.59 4.45 1.72 6.39l-1.83 6.69 6.84-1.79a12.73 12.73 0 0 0 6.06 1.54h.01c7.06 0 12.79-5.73 12.79-12.79S23.08 3.2 16.02 3.2Zm0 23.46h-.01a10.6 10.6 0 0 1-5.4-1.48l-.39-.23-4.06 1.06 1.08-3.96-.25-.41a10.62 10.62 0 0 1-1.63-5.62c0-5.89 4.79-10.68 10.67-10.68 5.89 0 10.68 4.79 10.68 10.68 0 5.89-4.8 10.68-10.69 10.68Z" />
    </svg>
  );
}

export default function App() {
  const { content } = useLandingContent();
  const { settings, page, projects, services, testimonials } = content;

  const [activeFilter, setActiveFilter] = useState("All");
  const [lang, setLang] = useState("ru");

  const whatsappUrl = `https://wa.me/${(settings.whatsappNumber || "").replace(/\D/g, "")}`;

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return projects;
    const needle = activeFilter.toUpperCase();
    return projects.filter((p) => {
      if (p.category) return p.category.toUpperCase() === needle;
      return (p.tags || []).some((tag) => tag.toUpperCase().startsWith(needle));
    });
  }, [activeFilter, projects]);

  const tx = (v) => pick(v, lang);

  return (
    <main id="top" className="page-bg min-h-screen bg-[#050505] text-white">
      <div className="mx-auto w-full max-w-[1380px] px-4 py-5 md:px-10 lg:px-12">
        <header className="mb-8 flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm">
            <span className="grid h-6 w-6 place-items-center rounded-full bg-[#192312] text-[10px] font-semibold text-neon">
              {settings.logo}
            </span>
            <span className="text-zinc-300">{settings.logoText}</span>
          </div>
          <nav className="hidden items-center gap-1 rounded-full border border-white/10 bg-[#0e1117] p-1 md:flex">
            <a href="#top" className="rounded-full bg-neon px-4 py-2 text-sm text-black">
              {tx(settings.nav?.home)}
            </a>
            <a href="#work" className="rounded-full px-4 py-2 text-sm text-zinc-300 hover:text-white">
              {tx(settings.nav?.work)}
            </a>
            <a href="#services" className="rounded-full px-4 py-2 text-sm text-zinc-300 hover:text-white">
              {tx(settings.nav?.services)}
            </a>
            <a href="#contact" className="rounded-full px-4 py-2 text-sm text-zinc-300 hover:text-white">
              {tx(settings.nav?.contact)}
            </a>
          </nav>
          <div className="flex items-center gap-2.5">
            <div className="flex items-center rounded-full border border-white/10 bg-[#0f131b] p-1">
              <button
                type="button"
                onClick={() => setLang("ru")}
                aria-pressed={lang === "ru"}
                className={`rounded-full px-3 py-1.5 text-xs font-semibold transition ${
                  lang === "ru" ? "bg-white text-[#0b0d12]" : "text-zinc-300 hover:text-white"
                }`}
              >
                RU
              </button>
              <button
                type="button"
                onClick={() => setLang("en")}
                aria-pressed={lang === "en"}
                className={`rounded-full px-3 py-1.5 text-xs font-semibold transition ${
                  lang === "en" ? "bg-white text-[#0b0d12]" : "text-zinc-300 hover:text-white"
                }`}
              >
                EN
              </button>
            </div>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="grid h-12 w-12 place-items-center rounded-full bg-[#22C55E] text-white shadow-[0_6px_18px_rgba(34,197,94,.35)] transition duration-200 hover:scale-[1.03]"
            >
              <WhatsAppIcon />
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="pill-hover-ring group flex items-center gap-2 rounded-full bg-neon px-6 py-2.5 text-sm font-semibold leading-none text-black hover:scale-[1.02]"
            >
              <span>{tx(settings.hireMe)}</span>
              <span className="grid h-5 w-5 place-items-center rounded-full bg-black text-[11px] text-neon transition duration-200 group-hover:translate-x-0.5">↗</span>
            </a>
          </div>
        </header>

        <section className="relative grid min-h-[520px] gap-5 overflow-hidden rounded-[28px] border border-white/10 bg-[#0f1219] p-6 md:grid-cols-[1.15fr_0.85fr] md:p-9">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(520px_300px_at_0%_0%,rgba(201,255,56,0.24),transparent_60%),radial-gradient(520px_320px_at_100%_100%,rgba(201,255,56,0.22),transparent_62%),radial-gradient(500px_300px_at_100%_0%,rgba(201,255,56,0.08),transparent_72%),radial-gradient(480px_260px_at_0%_100%,rgba(201,255,56,0.07),transparent_74%)]" />
          <div className="relative z-10 md:pt-5">
            <span className="inline-flex rounded-full border border-white/10 bg-[#111610] px-3 py-1 text-xs text-zinc-300">
              {tx(page.hero?.badge)}
            </span>
            <h1 className="mt-6 text-5xl font-semibold leading-[0.96] md:text-[78px]">
              {tx(page.hero?.title1)}
              <br />
              {tx(page.hero?.title2)}<span className="text-neon">..</span>
            </h1>
            <p className="mt-5 max-w-[620px] text-xl leading-relaxed text-zinc-300">
              {tx(page.hero?.subtitle)}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="pill-hover-ring rounded-full bg-neon px-5 py-2.5 text-sm font-medium text-black"
              >
                {tx(page.hero?.cta1)}
              </a>
              <a href="#work" className="rounded-full border border-white/10 bg-[#12161f] px-5 py-2.5 text-sm text-zinc-200">
                {tx(page.hero?.cta2)}
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-2 text-[11px] text-zinc-300">
              <span className="rounded-full border border-white/10 bg-[#11161f] px-3 py-1">{tx(page.hero?.badge1)}</span>
              <span className="rounded-full border border-white/10 bg-[#11161f] px-3 py-1">{tx(page.hero?.badge2)}</span>
            </div>
          </div>
          <div className="relative z-10 my-auto rounded-2xl border border-white/10 bg-[#12161f] p-5">
            <div className="mb-3 flex items-center justify-between">
              <p className="text-[11px] uppercase tracking-[0.24em] text-zinc-500">{tx(page.hero?.portrait)}</p>
              <span className="grid h-7 w-7 place-items-center rounded-full bg-[#1c2317] text-neon">✺</span>
            </div>
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0d1016] shadow-[0_24px_60px_rgba(0,0,0,.45)]">
              <img
                src={page.hero?.portraitImage || "/profile-photo.png"}
                alt="Alex portrait"
                className="h-[420px] w-full object-cover object-center"
              />
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_75%_at_100%_0%,rgba(201,255,56,0.16),transparent_58%),linear-gradient(to_top,rgba(5,8,13,0.3),transparent_52%)]" />
            </div>
          </div>
        </section>

        <section className="py-7">
          <div className="overflow-hidden border-y border-white/5 py-4">
            <div className="marquee-track">
              {[...(settings.techMarquee || []), ...(settings.techMarquee || [])].map((item, i) => (
                <span key={`${item}-${i}`} className="mx-6 inline-flex items-center gap-6 text-[12px] uppercase tracking-[0.25em] text-zinc-500">
                  {item}
                  <span className="text-zinc-700">—</span>
                </span>
              ))}
            </div>
          </div>
        </section>

        <section id="work" className="scroll-mt-24 pb-14 pt-1">
          <p className="text-xs uppercase tracking-[0.22em] text-neon">{tx(page.workSection?.eyebrow)}</p>
          <h2 className="mt-3 text-4xl font-semibold leading-tight md:text-6xl">
            {tx(page.workSection?.title1)}
            <br />
            {tx(page.workSection?.title2)}
          </h2>
          <div className="mt-4 flex flex-wrap items-center justify-end gap-2">
            {(page.filters || []).map((f) => {
              const isActive = activeFilter === f.id;
              return (
                <button
                  key={f.id}
                  type="button"
                  onClick={() => setActiveFilter(f.id)}
                  aria-pressed={isActive}
                  className={`rounded-full px-4 py-2 text-xs transition duration-200 ${
                    isActive
                      ? "bg-neon text-black"
                      : "bg-[#12161f] text-zinc-300 hover:bg-[#171c27] hover:text-white"
                  }`}
                >
                  {tx(f.label)}
                </button>
              );
            })}
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {filteredProjects.length === 0 && (
              <p className="col-span-full rounded-2xl border border-dashed border-white/10 bg-[#0f1219] p-8 text-center text-sm text-zinc-400">
                {tx(page.workSection?.empty)}
              </p>
            )}
            {filteredProjects.map((item) => {
              const Wrapper = item.link ? "a" : "article";
              const wrapperProps = item.link
                ? { href: item.link, target: "_blank", rel: "noreferrer" }
                : {};
              const badges = [item.category, ...(item.tags || [])].filter(Boolean);
              return (
                <Wrapper
                  key={item._id || item.title}
                  {...wrapperProps}
                  className="group block overflow-hidden rounded-[22px] border border-white/10 bg-[#0f1219] transition hover:-translate-y-1 hover:shadow-card"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                    <span className="absolute left-3 top-3 rounded-full bg-black/60 px-2 py-1 text-[11px]">
                      {item.year}
                    </span>
                    {item.link && (
                      <span className="absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-full bg-neon text-black opacity-0 transition group-hover:opacity-100">
                        ↗
                      </span>
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="text-[34px] font-semibold leading-tight">{item.title}</h3>
                    <p className="mt-2 text-sm text-zinc-400">{tx(item.description)}</p>
                    {badges.length > 0 && (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {badges.map((tag, i) => (
                          <span
                            key={`${tag}-${i}`}
                            className={`rounded-full border px-3 py-1 text-[11px] ${
                              i === 0 && item.category
                                ? "border-neon/40 bg-neon/10 text-neon"
                                : "border-white/10 text-zinc-300"
                            }`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </Wrapper>
              );
            })}
          </div>
        </section>

        <section id="services" className="scroll-mt-24 pb-14">
          <p className="text-xs uppercase tracking-[0.22em] text-neon">{tx(page.servicesSection?.eyebrow)}</p>
          <div className="mt-3 grid gap-4 md:grid-cols-[1fr_360px] md:items-start">
            <h2 className="text-4xl font-semibold leading-tight md:text-6xl">
              {tx(page.servicesSection?.title1)}
              <br />
              {tx(page.servicesSection?.title2)}
            </h2>
            <p className="text-sm text-zinc-400">{tx(page.servicesSection?.desc)}</p>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-4">
            {services.map((s) => (
              <article key={s._id || s.idx} className="rounded-2xl border border-white/10 bg-[#0f1219] p-5">
                <p className="text-xs text-zinc-500">{s.idx}</p>
                <h4 className="mt-4 text-xl font-medium">{tx(s.title)}</h4>
                <p className="mt-2 text-sm text-zinc-400">{tx(s.text)}</p>
              </article>
            ))}
          </div>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {testimonials.map((t) => (
              <article key={t._id} className="rounded-2xl border border-white/10 bg-[#0f1219] p-5">
                <p className="text-zinc-200">{tx(t.quote)}</p>
                <p className="mt-4 text-sm text-zinc-400">{tx(t.author)}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="scroll-mt-24 grid gap-6 rounded-[28px] border border-white/10 bg-gradient-to-r from-[#10141d] to-[#1c2a0f]/45 p-6 md:grid-cols-2 md:p-8">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-neon">{tx(page.contactSection?.eyebrow)}</p>
            <h2 className="mt-2 text-4xl font-semibold leading-tight md:text-5xl">
              {tx(page.contactSection?.title1)}
              <br />
              {tx(page.contactSection?.title2)}
            </h2>
            <p className="mt-3 text-sm text-zinc-400">{tx(page.contactSection?.desc)}</p>
            <div className="mt-6 space-y-2 text-sm text-zinc-300">
              <p>{settings.email}</p>
              <p>{tx(settings.city)}</p>
            </div>
          </div>
          <form className="rounded-2xl border border-white/10 bg-[#12161f] p-4">
            <label className="mb-2 block text-xs uppercase tracking-[0.15em] text-zinc-500">{tx(page.contactSection?.formName)}</label>
            <input placeholder={tx(page.contactSection?.formName)} className="mb-3 w-full rounded-xl border border-white/10 bg-[#0d1016] px-4 py-3 text-sm outline-none" />
            <label className="mb-2 block text-xs uppercase tracking-[0.15em] text-zinc-500">{tx(page.contactSection?.formEmail)}</label>
            <input placeholder={tx(page.contactSection?.formEmail)} className="mb-3 w-full rounded-xl border border-white/10 bg-[#0d1016] px-4 py-3 text-sm outline-none" />
            <label className="mb-2 block text-xs uppercase tracking-[0.15em] text-zinc-500">{tx(page.contactSection?.formDetails)}</label>
            <textarea placeholder={tx(page.contactSection?.formDetailsPh)} className="mb-4 h-24 w-full rounded-xl border border-white/10 bg-[#0d1016] px-4 py-3 text-sm outline-none" />
            <button className="pill-hover-ring rounded-full bg-neon px-5 py-2.5 text-sm font-medium text-black">{tx(page.contactSection?.formSubmit)}</button>
          </form>
        </section>

        <footer className="mt-14 border-t border-white/5 py-9">
          <div className="grid gap-6 md:grid-cols-3">
            <div>
              <p className="text-[34px] font-semibold leading-tight">
                {tx(settings.footer?.ctaLine1)}
                <br />
                <span className="text-neon">{tx(settings.footer?.ctaLine2)}</span>
              </p>
              <a href="#contact" className="pill-hover-ring mt-4 inline-block rounded-full bg-neon px-4 py-2 text-sm text-black">{tx(settings.footer?.ctaButton)}</a>
            </div>
            <div className="text-sm text-zinc-300">
              <p className="mb-2 text-xs uppercase tracking-[0.2em] text-zinc-500">{tx(settings.footer?.sitemap)}</p>
              <div className="space-y-1">
                <a href="#top" className="block hover:text-white">{tx(settings.nav?.home)}</a>
                <a href="#work" className="block hover:text-white">{tx(settings.nav?.work)}</a>
                <a href="#services" className="block hover:text-white">{tx(settings.nav?.services)}</a>
                <a href="#contact" className="block hover:text-white">{tx(settings.nav?.contact)}</a>
              </div>
            </div>
            <div className="text-sm text-zinc-300">
              <p className="mb-2 text-xs uppercase tracking-[0.2em] text-zinc-500">{tx(settings.footer?.elsewhere)}</p>
              <div className="space-y-1">
                {(settings.social || []).map((s) => (
                  <a
                    key={s.name}
                    href={s.url || "#"}
                    target={s.url && s.url !== "#" ? "_blank" : undefined}
                    rel="noreferrer"
                    className="block hover:text-white"
                  >
                    {s.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-between gap-2 border-t border-white/5 pt-4 text-xs text-zinc-500">
            <p>{tx(settings.footer?.copyright)}</p>
            <p>{tx(settings.footer?.version)}</p>
          </div>
        </footer>
      </div>
    </main>
  );
}
