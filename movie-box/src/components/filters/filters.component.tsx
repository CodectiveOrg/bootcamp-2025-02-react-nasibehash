import { ReactElement } from "react";

import QueryFilterComponent from "./components/query-filter/query-filter.component.tsx";
import GenreFilterComponent from "./components/genre-filter/genre-filter.component.tsx";

import styles from "./filters.module.css";

function FiltersComponent(): ReactElement {
  return (
    <div className={styles.filters}>
      <QueryFilterComponent />
      <GenreFilterComponent />
    </div>
  );
}

export default FiltersComponent;
