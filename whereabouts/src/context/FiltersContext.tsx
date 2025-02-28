import { createContext } from "react";

import { AttractionTag } from "../types/attraction-tag.ts";
import { Filters } from "../types/filters.ts";

type FiltersContextValue = {
  filters: Filters;
  toggleTag: (tag: AttractionTag) => void;
};

export const FiltersContext = createContext<FiltersContextValue>({
  filters: {
    tags: [],
  },
  toggleTag: () => {},
});
