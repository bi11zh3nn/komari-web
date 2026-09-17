export type RankingKind = "traffic" | "cpu" | "memory" | "ping";

const tagsOf = (tags: string) =>
  new Set(
    tags
      .split(";")
      .map((tag) => tag.trim().toLowerCase())
      .filter(Boolean),
  );

export const excludesRanking = (tags: string, kind: RankingKind) => {
  const values = tagsOf(tags);
  return (
    values.has("exclude-ranking:all") ||
    values.has(`exclude-ranking:${kind}`)
  );
};

export const excludesTrafficSummary = (tags: string) => {
  const values = tagsOf(tags);
  return (
    values.has("exclude-summary:all") ||
    values.has("exclude-summary:traffic")
  );
};

export const isDashboardExclusionTag = (tag: string) => {
  const value = tag.trim().toLowerCase();
  return (
    value.startsWith("exclude-ranking:") ||
    value.startsWith("exclude-summary:")
  );
};
