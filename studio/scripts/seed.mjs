import { createClient } from "@sanity/client";
import { config as loadEnv } from "dotenv";
import { dirname, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import process from "node:process";

const __dirname = dirname(fileURLToPath(import.meta.url));
loadEnv({ path: resolve(__dirname, "../.env") });
loadEnv({ path: resolve(__dirname, "../.env.local") });

const projectId = process.env.SANITY_STUDIO_PROJECT_ID;
const dataset = process.env.SANITY_STUDIO_DATASET || "production";
const token = process.env.SANITY_AUTH_TOKEN;

if (!projectId) {
  console.error("✗ SANITY_STUDIO_PROJECT_ID is not set. Add it to studio/.env");
  process.exit(1);
}
if (!token) {
  console.error(
    "✗ SANITY_AUTH_TOKEN is not set. Generate a token with Editor permissions at https://sanity.io/manage and add it to studio/.env"
  );
  process.exit(1);
}

const fallbackPath = resolve(__dirname, "../../src/data/fallback.js");
const { fallbackContent } = await import(pathToFileURL(fallbackPath).href);

const client = createClient({
  projectId,
  dataset,
  token,
  apiVersion: "2024-09-01",
  useCdn: false
});

function slugify(s) {
  return String(s)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

async function seed() {
  const { settings, page, projects, services, testimonials } = fallbackContent;

  console.log("→ Seeding siteSettings…");
  await client.createOrReplace({
    _id: "siteSettings",
    _type: "siteSettings",
    ...settings
  });

  console.log("→ Seeding landingPage…");
  await client.createOrReplace({
    _id: "landingPage",
    _type: "landingPage",
    hero: page.hero,
    workSection: page.workSection,
    servicesSection: page.servicesSection,
    contactSection: page.contactSection,
    filters: page.filters
  });

  console.log(`→ Seeding ${projects.length} projects…`);
  for (let i = 0; i < projects.length; i++) {
    const p = projects[i];
    await client.createOrReplace({
      _id: `project-${slugify(p.title)}`,
      _type: "project",
      title: p.title,
      year: p.year,
      description: p.description,
      category: p.category,
      tags: p.tags,
      imageUrl: p.image,
      link: p.link || undefined,
      order: i + 1
    });
  }

  console.log(`→ Seeding ${services.length} services…`);
  for (let i = 0; i < services.length; i++) {
    const s = services[i];
    await client.createOrReplace({
      _id: `service-${s.idx}`,
      _type: "service",
      idx: s.idx,
      title: s.title,
      text: s.text,
      order: i + 1
    });
  }

  console.log(`→ Seeding ${testimonials.length} testimonials…`);
  for (let i = 0; i < testimonials.length; i++) {
    const t = testimonials[i];
    await client.createOrReplace({
      _id: `testimonial-${i + 1}`,
      _type: "testimonial",
      quote: t.quote,
      author: t.author,
      order: i + 1
    });
  }

  console.log("✓ Seed complete");
}

seed().catch((err) => {
  console.error("✗ Seed failed:", err.message || err);
  process.exit(1);
});
