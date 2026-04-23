// TODO: Confirm actual store hours with Jesper / butiken. Placeholders below.
export const openingHours = {
  mondayToFriday: '09:00–18:00',
  saturday: '09:00–14:00',
  sunday: 'Stängt',
} as const;

export type OpeningHours = typeof openingHours;
