export const fallbackContent = {
  settings: {
    logo: "AC",
    logoText: "Alex.studio",
    whatsappNumber: "37378503062",
    email: "hello@alexcarter.studio",
    city: { ru: "Удалённо · Berlin", en: "Remote · Berlin" },
    hireMe: { ru: "Связаться", en: "Hire me" },
    nav: {
      home: { ru: "Главная", en: "Home" },
      work: { ru: "Работы", en: "Work" },
      services: { ru: "Услуги", en: "Services" },
      contact: { ru: "Контакты", en: "Contact" }
    },
    techMarquee: ["Next.js", "Tailwind", "Framer", "Webflow", "Notion", "Linear", "Figma", "React"],
    social: [
      { name: "Dribbble", url: "#" },
      { name: "LinkedIn", url: "#" },
      { name: "GitHub", url: "#" },
      { name: "Twitter", url: "#" }
    ],
    footer: {
      ctaLine1: { ru: "Сделаем что-то", en: "Let’s make something" },
      ctaLine2: { ru: "выдающееся.", en: "remarkable." },
      ctaButton: { ru: "Начать проект ↗", en: "Start a project ↗" },
      sitemap: { ru: "Карта сайта", en: "Sitemap" },
      elsewhere: { ru: "Соцсети", en: "Elsewhere" },
      copyright: { ru: "© 2026 Alex Carter. Все права защищены.", en: "© 2026 Alex Carter. All rights reserved." },
      version: { ru: "Сделано с заботой · v1.0", en: "Designed & built with care · v1.0" }
    }
  },
  page: {
    hero: {
      badge: { ru: "Открыт для новых проектов · Удалённо · Berlin", en: "Available for new projects · Remote · Berlin" },
      title1: { ru: "Привет,", en: "Welcome," },
      title2: { ru: "я Алекс", en: "I’m Alex" },
      subtitle: {
        ru: "Помогаю стартапам и фаундерам запускать красивые сайты и веб-приложения с высокой конверсией.",
        en: "I help startups and founders ship beautiful, high-converting websites and web apps."
      },
      cta1: { ru: "Связаться", en: "Hire me" },
      cta2: { ru: "Смотреть работы ↗", en: "View work ↗" },
      badge1: { ru: "Top Rated Plus на Upwork", en: "Top Rated Plus on Upwork" },
      badge2: { ru: "Awwwards SOTD x 3", en: "Awwwards SOTD x 3" },
      portrait: { ru: "Портрет", en: "Portrait" },
      portraitImage: "/profile-photo.png"
    },
    workSection: {
      eyebrow: { ru: "Избранные работы", en: "Selected work" },
      title1: { ru: "Проекты, которые приносят результат,", en: "Projects that ship value," },
      title2: { ru: "а не просто красивые пиксели.", en: "not just pixels." },
      empty: { ru: "Пока нет проектов в этой категории.", en: "No projects in this category yet." }
    },
    servicesSection: {
      eyebrow: { ru: "Что я делаю", en: "What I do" },
      title1: { ru: "Услуги для амбициозных", en: "Services tailored for" },
      title2: { ru: "фаундеров.", en: "ambitious founders." },
      desc: {
        ru: "От одного лендинга до полного редизайна продукта — помогаю двигаться быстро, не теряя в качестве.",
        en: "From a single landing page to a full product re-design — I help teams move fast without losing craft."
      }
    },
    contactSection: {
      eyebrow: { ru: "Поехали", en: "Let’s build" },
      title1: { ru: "Есть проект", en: "Have a project" },
      title2: { ru: "на примете?", en: "in mind?" },
      desc: {
        ru: "Расскажите о продукте, сроках и бюджете. Я лично читаю каждое сообщение и отвечаю в течение дня.",
        en: "Tell me about your product, timeline and budget. I read every message personally and reply within a day."
      },
      formName: { ru: "Ваше имя", en: "Your name" },
      formEmail: { ru: "Email", en: "Email" },
      formDetails: { ru: "О проекте", en: "Project details" },
      formDetailsPh: { ru: "Что вы строите?", en: "What are you building?" },
      formSubmit: { ru: "Отправить", en: "Send message" }
    },
    filters: [
      { id: "All", label: { ru: "Все", en: "All" } },
      { id: "UI/UX", label: { ru: "UI/UX", en: "UI/UX" } },
      { id: "Web", label: { ru: "Веб", en: "Web" } },
      { id: "Branding", label: { ru: "Брендинг", en: "Branding" } },
      { id: "Mobile", label: { ru: "Мобайл", en: "Mobile" } }
    ]
  },
  projects: [
    {
      _id: "fallback-project-1",
      year: "2025",
      title: "Nova Finance Dashboard",
      description: {
        ru: "Дашборд криптопортфеля с аналитикой в реальном времени и кастомными чартами.",
        en: "A crypto portfolio dashboard with real-time analytics and custom charting."
      },
      category: "Web",
      tags: ["UI/UX", "FINTECH"],
      image: "https://images.unsplash.com/photo-1518773553398-650c184e0bb3?auto=format&fit=crop&w=1200&q=80",
      link: ""
    },
    {
      _id: "fallback-project-2",
      year: "2025",
      title: "Halo Design System",
      description: {
        ru: "Библиотека компонентов на токенах, питающая B2B SaaS-семью из 6 продуктов.",
        en: "Token-driven component library powering a B2B SaaS suite across 6 products."
      },
      category: "Branding",
      tags: ["DESIGN SYSTEM"],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
      link: ""
    },
    {
      _id: "fallback-project-3",
      year: "2024",
      title: "Pulse Mobile Banking",
      description: {
        ru: "Биометрический онбординг и переводы без трения.",
        en: "Biometric onboarding and zero-friction transfers."
      },
      category: "Mobile",
      tags: ["UI/UX", "FINTECH"],
      image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1200&q=80",
      link: ""
    },
    {
      _id: "fallback-project-4",
      year: "2024",
      title: "Atlas Studio Website",
      description: {
        ru: "Редакторская типографика и интерактивный сторителлинг для архитектурной студии.",
        en: "Editorial typography and interactive storytelling for an architecture studio."
      },
      category: "Web",
      tags: ["BRANDING", "EDITORIAL"],
      image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=1200&q=80",
      link: ""
    }
  ],
  services: [
    {
      _id: "fallback-service-1",
      idx: "01",
      title: { ru: "Продуктовый дизайн", en: "Product Design" },
      text: {
        ru: "End-to-end UX/UI для SaaS, финтеха и потребительских продуктов. Фокус — ясность и конверсия.",
        en: "End-to-end UX/UI design for SaaS, fintech and consumer products with a focus on clarity and conversion."
      }
    },
    {
      _id: "fallback-service-2",
      idx: "02",
      title: { ru: "Веб-разработка", en: "Web Development" },
      text: {
        ru: "Production-фронтенды на React, Next.js и Tailwind. Pixel-perfect, быстро и доступно.",
        en: "Production-ready front-ends in React, Next.js and Tailwind. Pixel-perfect, fast and accessible."
      }
    },
    {
      _id: "fallback-service-3",
      idx: "03",
      title: { ru: "Брендинг", en: "Brand Identity" },
      text: {
        ru: "Логотипы, типографика, цвет и гайды, чтобы современный бренд звучал убедительно.",
        en: "Logo systems, type, color and guidelines that make modern brands feel inevitable."
      }
    },
    {
      _id: "fallback-service-4",
      idx: "04",
      title: { ru: "Дизайн-системы", en: "Design Systems" },
      text: {
        ru: "Масштабируемые библиотеки компонентов и токены — чтобы команда выпускала консистентный UI быстрее.",
        en: "Scalable component libraries and tokens so your team ships consistent UI faster."
      }
    }
  ],
  testimonials: [
    {
      _id: "fallback-testimonial-1",
      quote: {
        ru: "«Алекс выпустил редизайн, который поднял конверсию из триала в платных клиентов на 38% за квартал.»",
        en: "“Alex shipped a redesign that lifted our trial-to-paid conversion by 38% in a single quarter.”"
      },
      author: { ru: "Майя Чен · CEO, Nova Finance", en: "Maya Chen · CEO, Nova Finance" }
    },
    {
      _id: "fallback-testimonial-2",
      quote: {
        ru: "«Редкое сочетание вкуса, скорости и продуктового мышления. Будто рядом сильный сооснователь.»",
        en: "“Rare combination of taste, speed and product thinking. Felt like having a senior co-founder on the project.”"
      },
      author: { ru: "Даниэль Рот · Фаундер, Halo Labs", en: "Daniel Roth · Founder, Halo Labs" }
    }
  ]
};
