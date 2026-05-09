export const landingQuery = `{
  "settings": *[_type == "siteSettings"][0]{
    logo, logoText, whatsappNumber, email, city, hireMe,
    nav, techMarquee, social, footer
  },
  "page": *[_type == "landingPage"][0]{
    hero{
      badge, title1, title2, subtitle, cta1, cta2,
      badge1, badge2, portrait,
      "portraitImage": portraitImage.asset->url
    },
    workSection, servicesSection, contactSection, filters
  },
  "projects": *[_type == "project"] | order(order asc, _createdAt asc){
    _id, year, title, category, link, tags,
    "description": coalesce(description, text),
    "image": coalesce(image.asset->url, imageUrl)
  },
  "services": *[_type == "service"] | order(order asc, _createdAt asc){
    _id, idx, title, text
  },
  "testimonials": *[_type == "testimonial"] | order(order asc, _createdAt asc){
    _id, quote, author
  }
}`;
