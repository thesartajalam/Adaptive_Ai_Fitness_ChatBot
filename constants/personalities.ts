export type PersonalityType = "A" | "B" | "C";

export const PERSONALITIES: {
  id: PersonalityType;
  title: string;
  description: string;
}[] = [
  {
    id: "A",
    title: "Encouragement Seeker",
    description: "Needs reassurance and gentle motivation",
  },
  {
    id: "B",
    title: "Creative Explorer",
    description: "Likes creative ideas, dislikes spoon-feeding",
  },
  {
    id: "C",
    title: "Goal Finisher",
    description: "Prefers structure, plans, and checklists",
  },
];
