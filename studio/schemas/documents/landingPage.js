export default {
  name: "landingPage",
  type: "document",
  title: "Landing page",
  fields: [
    {
      name: "hero",
      title: "Hero",
      type: "object",
      fields: [
        { name: "badge", title: "Top badge", type: "localeString" },
        { name: "title1", title: "Title line 1", type: "localeString" },
        { name: "title2", title: "Title line 2", type: "localeString" },
        { name: "subtitle", title: "Subtitle", type: "localeText" },
        { name: "cta1", title: "Primary CTA", type: "localeString" },
        { name: "cta2", title: "Secondary CTA", type: "localeString" },
        { name: "badge1", title: "Badge 1", type: "localeString" },
        { name: "badge2", title: "Badge 2", type: "localeString" },
        { name: "portrait", title: "Portrait label", type: "localeString" },
        { name: "portraitImage", title: "Portrait image", type: "image", options: { hotspot: true } }
      ]
    },
    {
      name: "workSection",
      title: "Work section",
      type: "object",
      fields: [
        { name: "eyebrow", title: "Eyebrow", type: "localeString" },
        { name: "title1", title: "Title line 1", type: "localeString" },
        { name: "title2", title: "Title line 2", type: "localeString" },
        { name: "empty", title: "Empty state", type: "localeString" }
      ]
    },
    {
      name: "servicesSection",
      title: "Services section",
      type: "object",
      fields: [
        { name: "eyebrow", title: "Eyebrow", type: "localeString" },
        { name: "title1", title: "Title line 1", type: "localeString" },
        { name: "title2", title: "Title line 2", type: "localeString" },
        { name: "desc", title: "Description", type: "localeText" }
      ]
    },
    {
      name: "contactSection",
      title: "Contact section",
      type: "object",
      fields: [
        { name: "eyebrow", title: "Eyebrow", type: "localeString" },
        { name: "title1", title: "Title line 1", type: "localeString" },
        { name: "title2", title: "Title line 2", type: "localeString" },
        { name: "desc", title: "Description", type: "localeText" },
        { name: "formName", title: "Form: name label", type: "localeString" },
        { name: "formEmail", title: "Form: email label", type: "localeString" },
        { name: "formDetails", title: "Form: details label", type: "localeString" },
        { name: "formDetailsPh", title: "Form: details placeholder", type: "localeString" },
        { name: "formSubmit", title: "Form: submit button", type: "localeString" }
      ]
    },
    {
      name: "filters",
      title: "Project filters",
      type: "array",
      of: [
        {
          type: "object",
          name: "filter",
          fields: [
            { name: "id", title: "ID (matches tag prefix)", type: "string" },
            { name: "label", title: "Label", type: "localeString" }
          ],
          preview: { select: { title: "id", subtitle: "label.en" } }
        }
      ]
    }
  ],
  preview: { prepare: () => ({ title: "Landing page" }) }
};
