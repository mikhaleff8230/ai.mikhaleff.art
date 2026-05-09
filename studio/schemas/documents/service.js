export default {
  name: "service",
  type: "document",
  title: "Service",
  fields: [
    { name: "idx", title: "Index (e.g. 01)", type: "string" },
    { name: "title", title: "Title", type: "localeString" },
    { name: "text", title: "Text", type: "localeText" },
    { name: "order", title: "Sort order", type: "number" }
  ],
  orderings: [
    { title: "Order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] }
  ],
  preview: { select: { title: "title.en", subtitle: "idx" } }
};
