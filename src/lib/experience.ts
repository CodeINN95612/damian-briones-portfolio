import { getCollection, type CollectionEntry } from "astro:content";
import type { ValidLanguage } from "../i18n/lang";

export interface Job {
  entry: CollectionEntry<"experience">;
  data: CollectionEntry<"experience">["data"];
  /** "mikmak" — the id without the locale; also the anchor on /experience. */
  slug: string;
  current: boolean;
  months: number;
}

const monthIndex = (date: Date) =>
  date.getUTCFullYear() * 12 + date.getUTCMonth();

/** Months worked, counting both the first and the last month (as LinkedIn
    does). Without an end date, it runs to the build date. */
export function monthsBetween(start: Date, end = new Date()) {
  return monthIndex(end) - monthIndex(start) + 1;
}

/** Every job in `lang`, current one first. */
export async function getJobs(lang: ValidLanguage): Promise<Job[]> {
  const entries = await getCollection("experience", ({ id }) =>
    id.startsWith(`${lang}/`),
  );
  return entries
    .map((entry) => ({
      entry,
      data: entry.data,
      slug: entry.id.slice(lang.length + 1),
      current: !entry.data.end,
      months: monthsBetween(entry.data.start, entry.data.end),
    }))
    .sort((a, b) => b.data.start.valueOf() - a.data.start.valueOf());
}

/** Whole years since the first job started. */
export function totalYears(jobs: Job[]) {
  const first = jobs.at(-1);
  return first ? Math.floor(monthsBetween(first.data.start) / 12) : 0;
}

/** "sept 2019" / "Sep 2019". Dates are UTC midnight, so format in UTC. */
export function formatMonth(date: Date, lang: ValidLanguage) {
  return date.toLocaleDateString(lang, {
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });
}

/** "2 años y 3 meses" / "2 years and 3 months", from Intl, so no strings. */
export function formatDuration(months: number, lang: ValidLanguage) {
  const unit = (value: number, unit: "year" | "month") =>
    new Intl.NumberFormat(lang, { style: "unit", unit, unitDisplay: "long" })
      .format(value);
  const years = Math.floor(months / 12);
  const rest = months % 12;
  const parts = [
    ...(years ? [unit(years, "year")] : []),
    ...(rest ? [unit(rest, "month")] : []),
  ];
  return new Intl.ListFormat(lang, { type: "conjunction" }).format(parts);
}
