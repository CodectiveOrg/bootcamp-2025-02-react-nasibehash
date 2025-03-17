import { PropsWithChildren, ReactElement, useState } from "react";

import { FiltersContext } from "../context/filters.context.ts";

import { GenreType } from "../types/genre.type.ts";
import { FiltersType as FiltersType } from "../types/filters.type.ts";

type Props = PropsWithChildren;

function FiltersProvider({ children }: Props): ReactElement {
  const [filters, setFilters] = useState<FiltersType>({
    query: "Saw",
    genres: [],
  });

  const updateQuery = (query: string): void => {
    setFilters((old) => ({ ...old, query }));
  };

  const toggleGenre = (genre: GenreType): void => {
    setFilters((old) => {
      const index = old.genres.findIndex((x) => x.id === genre.id);

      if (index === -1) {
        return { ...old, genres: [...old.genres, genre] };
      }

      const clone = [...old.genres];
      clone.splice(index, 1);
      return { ...old, genres: clone };
    });
  };

  return (
    <FiltersContext.Provider value={{ filters, updateQuery, toggleGenre }}>
      {children}
    </FiltersContext.Provider>
  );
}

export default FiltersProvider;
