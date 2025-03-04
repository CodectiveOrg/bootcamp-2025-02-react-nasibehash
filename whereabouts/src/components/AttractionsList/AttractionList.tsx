import { ReactElement, useContext } from "react";
import { useQuery } from "@tanstack/react-query";

import AttractionListItem from "../AttractionListItem/AttractionListItem.tsx";
import Loading from "../Loading/Loading.tsx";

import { fetchAttractions } from "../../api/fetch-attractions.ts";

import { FiltersContext } from "../../context/FiltersContext.tsx";

import styles from "./AttractionList.module.css";

export default function AttractionList(): ReactElement {
  const { filters } = useContext(FiltersContext);

  const { data, isError, isLoading, isFetching, error } = useQuery({
    queryKey: ["attractions", filters],
    queryFn: () => fetchAttractions(filters),
    initialData: [],
  });

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <>Error: {error ? error.message : "Unexpected Error!"}</>;
  }

  if (!data) {
    return <>There is no data</>;
  }

  return (
    <ul
      className={styles["attraction-list"]}
      style={{ opacity: isFetching ? "0.5" : "1" }}
    >
      {data.map((attraction) => (
        <AttractionListItem key={attraction.id} attraction={attraction} />
      ))}
    </ul>
  );
}
