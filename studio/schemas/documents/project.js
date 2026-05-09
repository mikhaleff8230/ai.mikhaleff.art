export default {
  name: "project",
  type: "document",
  title: "Project",
  fields: [
    {
      name: "title",
      title: "Название",
      type: "string",
      validation: (Rule) => Rule.required()
    },
    { name: "year", title: "Год", type: "string" },
    {
      name: "image",
      title: "Обложка проекта",
      description: "Загрузите файл (JPG, PNG, WebP). Можно заменить или удалить — кнопка корзины в превью.",
      type: "image",
      options: {
        hotspot: true,
        accept: "image/*",
        metadata: ["blurhash", "lqip", "palette"]
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alt-текст (доступность)",
          description: "Кратко опишите изображение для скринридеров."
        }
      ],
      validation: (Rule) =>
        Rule.custom((image, context) => {
          const legacyUrl = context.document?.imageUrl;
          if (!image?.asset && !legacyUrl) {
            return "Загрузите обложку проекта (файл)";
          }
          return true;
        })
    },
    {
      name: "imageUrl",
      title: "URL обложки (устарело)",
      type: "url",
      hidden: true,
      description: "Скрыто: осталось от первого импорта. Загрузите файл в «Обложка проекта» — URL больше не нужен."
    },
    {
      name: "description",
      title: "Описание",
      type: "localeText"
    },
    {
      name: "category",
      title: "Категория фильтра",
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
      title: "Доп. теги",
      description: "Подписи под карточкой: WEB APP, FINTECH и т.д.",
      type: "array",
      of: [{ type: "string" }]
    },
    {
      name: "link",
      title: "Ссылка на проект",
      description: "Внешняя ссылка на кейс. Если задана — карточка кликабельна.",
      type: "url",
      validation: (Rule) =>
        Rule.uri({ allowRelative: false, scheme: ["http", "https"] }).allow("")
    },
    {
      name: "order",
      title: "Порядок сортировки",
      description: "Чем меньше число, тем выше карточка. Пусто — в конец по дате.",
      type: "number"
    }
  ],
  orderings: [
    {
      title: "По порядку (новые внизу)",
      name: "default",
      by: [
        { field: "order", direction: "asc" },
        { field: "_createdAt", direction: "asc" }
      ]
    },
    {
      title: "Сначала новые",
      name: "newest",
      by: [{ field: "_createdAt", direction: "desc" }]
    }
  ],
  preview: {
    select: { title: "title", subtitle: "category", media: "image" }
  }
};
