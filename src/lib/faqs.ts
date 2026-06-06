/**
 * FAQ loader. Reads /src/data/faqs.json.
 *
 * Usage:
 *   import { getFAQ } from "~/lib/faqs";
 *   const faq = getFAQ("/conditions/plantar-fasciitis");
 *   // faq.questions is an array of strings
 */
import rawFaqs from "../data/faqs.json";

export interface FAQTopic {
  topic: string;
  questions: string[];
  _note?: string;
  example_questions_do_not_publish?: string[];
}

export type FAQData = Record<string, FAQTopic | unknown>;

const faqs = rawFaqs as unknown as FAQData;

/** Get the FAQ topic for a given sitemap slug or bucket name. */
export const getFAQ = (slug: string): FAQTopic | null => {
  const entry = faqs[slug];
  if (!entry || typeof entry !== "object") return null;
  if ("questions" in entry && Array.isArray((entry as FAQTopic).questions)) {
    return entry as FAQTopic;
  }
  return null;
};

/** Returns clinic-specific FAQs if any tenant questions were configured. */
export const getClinicSpecificFAQ = (): FAQTopic | null => {
  const faq = getFAQ("clinic_specific");
  if (!faq || faq.questions.length === 0) return null;
  return faq;
};
