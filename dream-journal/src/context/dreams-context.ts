import { createContext, Dispatch, SetStateAction } from "react";

import { Dream } from "../types/dream.ts";

type DreamsContextValue = {
  dreams: Dream[];
  createDream: (dream: Dream) => void;
  editDream: (dream: Dream) => void;
  removeDream: (id: string) => void;
  editingDream: Dream | null;
  setEditingDream: Dispatch<SetStateAction<Dream | null>>;
};

export const DreamsContext = createContext<DreamsContextValue>({
  dreams: [],
  createDream: () => {},
  editDream: () => {},
  removeDream: () => {},
  editingDream: null,
  setEditingDream: () => {},
});
