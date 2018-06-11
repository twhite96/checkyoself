export type Suggestion = { index: number, offset: number, reason: string };

export type SuggestionSpanProps = {
  offsetKey: string,
  suggestion: Suggestion,
  children: React.Element<*>;
};
