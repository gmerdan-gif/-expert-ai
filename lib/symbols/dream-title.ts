function lowerTr(value: string) {
  return value.toLocaleLowerCase("tr-TR");
}

export function dreamPhrase(title: string) {
  const clean = title.trim();

  if (/^rüyada\s+/i.test(clean)) {
    return clean;
  }

  const lower = lowerTr(clean);

  if (
    lower.endsWith("mak") ||
    lower.endsWith("mek") ||
    lower.includes("olduğunu görmek")
  ) {
    return `Rüyada ${lower}`;
  }

  return `Rüyada ${lower} görmek`;
}

export function dreamQuestionTitle(title: string) {
  return `${dreamPhrase(title)} ne anlama gelir?`;
}
