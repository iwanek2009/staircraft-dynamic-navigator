export const cities = [
  "London",
  "Birmingham",
  "Manchester",
  "Leeds",
  "Glasgow",
  "Sheffield",
  "Liverpool",
  "Bristol",
  "Edinburgh",
  "Cardiff",
  "Coventry",
  "Leicester",
  "Nottingham",
  "Newcastle upon Tyne",
  "Southampton",
  "Reading",
  "Brighton",
  "Hull",
  "Derby",
  "Wolverhampton",
] as const;

export type City = (typeof cities)[number];