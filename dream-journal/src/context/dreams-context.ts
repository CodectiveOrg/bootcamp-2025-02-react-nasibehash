import { createContext, Dispatch, SetStateAction } from "react";

import { Dream } from "../types/dream.ts";
import { Vibe } from '../types/Vibe.ts';

type DreamsContextValue = {
  dreams: Dream[];
  createDream: (dream: Dream) => void;
  editDream: (dream: Dream) => void;
  removeDream: (id: string) => void;
  editingDream: Dream | null;
  setEditingDream: Dispatch<SetStateAction<Dream | null>>;

  filteredDreams: Dream[] | null;
  setFilteredDreams: Dispatch<SetStateAction<Dream[] | null>>;
  selected: Vibe | null;
  setSelected: Dispatch<SetStateAction<Vibe | null>>;
};

export const DreamsContext = createContext<DreamsContextValue>({
  dreams: [],
  createDream: () => {},
  editDream: () => {},
  removeDream: () => {},
  editingDream: null,
  setEditingDream: () => {},

  filteredDreams: [],
  setFilteredDreams: () => {},
  selected: null,
  setSelected: () => {},
});
