import { Vibe } from "./Vibe.ts";

export type Dream = {
  id: string;
  title: string;
  date: Date;
  description: string;
  vibe: Vibe;
};
