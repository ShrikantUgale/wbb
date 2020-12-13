/**
 * Counts the given `name` in a `line`
 * @param name Word to be counted in a given line.
 * @param line Text Line from the oliver-twist file.
 * @returns Number of occurences `name` present in a `line`
 */
export default function getwordcount(name: string, line: string): number {
  const wordCount = line
    .split(/\W+/)
    .filter((l) => l.toLowerCase() === name.toLowerCase());
  return wordCount.length;
}
