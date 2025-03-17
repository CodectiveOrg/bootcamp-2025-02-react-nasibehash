import { ReactElement, useContext } from "react";

import { FiltersContext } from "../../../../context/filters.context.ts";
import useGenresQuery from "../../../../queries/use-genres.query.ts";

import FilterCardComponent from "../filter-card/filter-card.component.tsx";

import styles from "./genre-filter.module.css";

function GenreFilterComponent(): ReactElement {
  const { filters, toggleGenre } = useContext(FiltersContext);

  const { data: genres } = useGenresQuery();

  return (
    <FilterCardComponent title="Genres">
      <div className={styles["genre-filter"]}>
        <div className={styles.options}>
          {genres?.map((genre) => (
            <label key={genre.id}>
              <input
                key={genre.id}
                name="genre-filter"
                type="checkbox"
                checked={!!filters.genres.find((x) => x.id === genre.id)}
                onChange={() => toggleGenre(genre)}
              />
              {genre.name}
            </label>
          ))}
        </div>
      </div>
    </FilterCardComponent>
  );
}

export default GenreFilterComponent;
