import { createContext, Dispatch, SetStateAction } from "react";

import { Dream } from "../types/dream.ts";

type DreamsContextValue = {
  dreams: Dream[];
  setDreams: Dispatch<SetStateAction<Dream[]>>;
};

export const DreamsContext = createContext<DreamsContextValue>({
  dreams: [],
  setDreams: () => {},
});
