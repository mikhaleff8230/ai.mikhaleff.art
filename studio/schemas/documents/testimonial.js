export default {
  name: "testimonial",
  type: "document",
  title: "Testimonial",
  fields: [
    { name: "quote", title: "Quote", type: "localeText" },
    { name: "author", title: "Author", type: "localeString" },
    { name: "order", title: "Sort order", type: "number" }
  ],
  orderings: [
    { title: "Order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] }
  ],
  preview: { select: { title: "author.en", subtitle: "quote.en" } }
};
