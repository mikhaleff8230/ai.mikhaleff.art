export default {
  name: "project",
  type: "document",
  title: "Project",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required()
    },
    { name: "year", title: "Year", type: "string" },
    {
      name: "description",
      title: "Description",
      type: "localeText"
    },
    {
      name: "category",
      title: "Filter category",
      description: "Должна совпадать с одним из id фильтров на лендинге (UI/UX, Web, Branding, Mobile).",
      type: "string",
      options: {
        list: [
          { title: "UI/UX", value: "UI/UX" },
          { title: "Web", value: "Web" },
          { title: "Branding", value: "Branding" },
          { title: "Mobile", value: "Mobile" }
        ],
        layout: "radio"
      },
      validation: (Rule) => Rule.required()
    },
    {
      name: "tags",
      title: "Extra tags (badges)",
      description: "Дополнительные подписи под карточкой, например WEB APP, FINTECH.",
      type: "array",
      of: [{ type: "string" }]
    },
    {
      name: "image",
      title: "Cover image",
      type: "image",
      options: { hotspot: true }
    },
    {
      name: "imageUrl",
      title: "Cover image URL (fallback)",
      description: "Используется только если не загружено изображение выше.",
      type: "url"
    },
    {
      name: "link",
      title: "Project link",
      description: "Ссылка на сайт/кейс. Если задана, карточка станет кликабельной.",
      type: "url",
      validation: (Rule) =>
        Rule.uri({ allowRelative: false, scheme: ["http", "https"] })
    },
    {
      name: "order",
      title: "Sort order",
      description: "Чем меньше число, тем выше карточка. Если оставить пустым — встанет в конец.",
      type: "number"
    }
  ],
  orderings: [
    {
      title: "Default (custom order, newest last)",
      name: "default",
      by: [
        { field: "order", direction: "asc" },
        { field: "_createdAt", direction: "asc" }
      ]
    },
    {
      title: "Newest first",
      name: "newest",
      by: [{ field: "_createdAt", direction: "desc" }]
    }
  ],
  preview: {
    select: { title: "title", subtitle: "category", media: "image" }
  }
};
