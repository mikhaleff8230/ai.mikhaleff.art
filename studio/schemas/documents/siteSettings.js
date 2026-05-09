export default {
  name: "siteSettings",
  type: "document",
  title: "Site settings",
  fields: [
    { name: "logo", title: "Logo monogram", type: "string" },
    { name: "logoText", title: "Logo text", type: "string" },
    { name: "whatsappNumber", title: "WhatsApp number (digits only)", type: "string" },
    { name: "email", title: "Contact email", type: "string" },
    { name: "city", title: "City line", type: "localeString" },
    { name: "hireMe", title: "Hire me button label", type: "localeString" },
    {
      name: "nav",
      title: "Navigation",
      type: "object",
      fields: [
        { name: "home", title: "Home", type: "localeString" },
        { name: "work", title: "Work", type: "localeString" },
        { name: "services", title: "Services", type: "localeString" },
        { name: "contact", title: "Contact", type: "localeString" }
      ]
    },
    {
      name: "techMarquee",
      title: "Tech marquee",
      type: "array",
      of: [{ type: "string" }]
    },
    {
      name: "social",
      title: "Social links",
      type: "array",
      of: [
        {
          type: "object",
          name: "socialLink",
          fields: [
            { name: "name", title: "Name", type: "string" },
            { name: "url", title: "URL", type: "url" }
          ]
        }
      ]
    },
    {
      name: "footer",
      title: "Footer",
      type: "object",
      fields: [
        { name: "ctaLine1", title: "CTA line 1", type: "localeString" },
        { name: "ctaLine2", title: "CTA line 2 (highlighted)", type: "localeString" },
        { name: "ctaButton", title: "CTA button", type: "localeString" },
        { name: "sitemap", title: "Sitemap label", type: "localeString" },
        { name: "elsewhere", title: "Elsewhere label", type: "localeString" },
        { name: "copyright", title: "Copyright", type: "localeString" },
        { name: "version", title: "Version line", type: "localeString" }
      ]
    }
  ],
  preview: { select: { title: "logoText" } }
};
