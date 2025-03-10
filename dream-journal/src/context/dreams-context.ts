import { createContext, Dispatch, SetStateAction } from "react";

import { Dream } from "../types/dream.ts";
import { Vibe } from "../types/Vibe.ts";

type DreamsContextValue = {
  dreams: Dream[];
  createDream: (dream: Dream) => void;
  editDream: (dream: Dream) => void;
  removeDream: (id: string) => void;
  filteredDreams: Dream[] | null;
  setFilteredDreams: Dispatch<SetStateAction<Dream[]>>;
  selected: Vibe | null;
  setSelected: Dispatch<SetStateAction<Vibe | null>>;
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
};

export const DreamsContext = createContext<DreamsContextValue>({
  dreams: [],
  createDream: () => {},
  editDream: () => {},
  removeDream: () => {},
  filteredDreams: [],
  setFilteredDreams: () => {},
  selected: null,
  setSelected: () => {},
  search: "",
  setSearch: () => {},
});
