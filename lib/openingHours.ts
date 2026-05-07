// Öppettider för Fjärås Lantmanna.
export const openingHours = {
  mondayToFriday: '06:30–18:00',
  saturday: '09:00–16:00',
  sunday: '10:00–15:00',
} as const;

export type OpeningHours = typeof openingHours;

// Stängt alla röda dagar samt dessa aftnar och svenska standarddagar.
export const closedSpecialDays = [
  'Nyårsdagen',
  'Trettondedag jul',
  'Långfredagen',
  'Påskafton',
  'Påskdagen',
  'Annandag påsk',
  'Första maj',
  'Kristi himmelsfärdsdag',
  'Pingstdagen',
  'Sveriges nationaldag (6 juni)',
  'Midsommarafton',
  'Midsommardagen',
  'Alla helgons dag',
  'Julafton',
  'Juldagen',
  'Annandag jul',
  'Nyårsafton',
] as const;
