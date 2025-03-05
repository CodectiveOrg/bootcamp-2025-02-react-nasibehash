import { FormEvent, ReactElement, useContext } from "react";

import { FiltersContext } from "../../../../context/filters.context.ts";

import FilterCardComponent from "../filter-card/filter-card.component.tsx";

import styles from "./query-filter.module.css";

export default function QueryFilterComponent(): ReactElement {
  const { filters, updateQuery } = useContext(FiltersContext);

  const formSubmitHandler = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    updateQuery(formData.get("query") as string);
  };

  return (
    <FilterCardComponent title="Query">
      <form className={styles["query-filter"]} onSubmit={formSubmitHandler}>
        <input
          type="text"
          name="query"
          placeholder="Movie title, actor, ..."
          defaultValue={filters.query}
        />
        <button>Search</button>
      </form>
    </FilterCardComponent>
  );
}
