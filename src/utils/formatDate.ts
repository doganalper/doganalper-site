type DateConfig = {
  weekday?: boolean;
  day?: boolean;
  locale?: "en" | "tr";
};

export default function (
  date: string | number | Date,
  config?: DateConfig,
): string {
  const { weekday = true, day = true, locale = "en" } = config || {};
  let parsedDate = new Date(date);

  if (typeof date === "string") {
    const parts = date.split("-");
    parsedDate = new Date(
      parseInt(parts[0]),
      parseInt(parts[1]) - 1,
      parts[2] ? parseInt(parts[2]) : 1,
    );
  }

  const locales = {
    en: "en-US",
    tr: "tr-TR",
  };

  const localeValue = locales[locale] || locales.en;
  return parsedDate.toLocaleString(localeValue, {
    year: "numeric",
    month: "short",
    day: day ? "numeric" : undefined,
    weekday: weekday ? "short" : undefined,
  });
}
