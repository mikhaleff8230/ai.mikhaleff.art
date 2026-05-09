import { useEffect, useState } from "react";
import { isSanityConfigured, sanityClient } from "../lib/sanity";
import { landingQuery } from "../lib/queries";
import { fallbackContent } from "../data/fallback";

function isUsableContent(c) {
  return Boolean(c && c.settings && c.page);
}

export function useLandingContent() {
  const [content, setContent] = useState(fallbackContent);
  const [status, setStatus] = useState(isSanityConfigured ? "loading" : "fallback");

  useEffect(() => {
    if (!isSanityConfigured || !sanityClient) return;
    let cancelled = false;
    sanityClient
      .fetch(landingQuery)
      .then((data) => {
        if (cancelled) return;
        if (!isUsableContent(data)) {
          setStatus("fallback");
          return;
        }
        setContent({
          settings: { ...fallbackContent.settings, ...(data.settings || {}) },
          page: { ...fallbackContent.page, ...(data.page || {}) },
          projects: data.projects?.length ? data.projects : fallbackContent.projects,
          services: data.services?.length ? data.services : fallbackContent.services,
          testimonials: data.testimonials?.length ? data.testimonials : fallbackContent.testimonials
        });
        setStatus("ready");
      })
      .catch((err) => {
        console.warn("Sanity fetch failed, using fallback:", err);
        if (!cancelled) setStatus("fallback");
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return { content, status };
}
