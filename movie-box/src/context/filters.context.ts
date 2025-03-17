import { createContext } from "react";

import { FiltersType } from "../types/filters.type.ts";
import { GenreType } from "../types/genre.type.ts";

type FiltersContextValue = {
  filters: FiltersType;
  updateQuery: (query: string) => void;
  toggleGenre: (genre: GenreType) => void;
};

export const FiltersContext = createContext<FiltersContextValue>({
  filters: {
    query: "",
    genres: [],
  },
  updateQuery: () => {},
  toggleGenre: () => {},
});
