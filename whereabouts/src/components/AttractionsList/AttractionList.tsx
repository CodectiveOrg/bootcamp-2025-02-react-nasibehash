import { ReactElement, useContext } from "react";
import { useQuery } from "@tanstack/react-query";

import AttractionListItem from "../AttractionListItem/AttractionListItem.tsx";

import { fetchAttractions } from "../../api/fetch-attractions.ts";

import { FiltersContext } from "../../context/FiltersContext.tsx";

import styles from "./AttractionList.module.css";

export default function AttractionList(): ReactElement {
  const { filters } = useContext(FiltersContext);

  const { data: attractions, isFetching } = useQuery({
    queryKey: ["attractions", filters],
    queryFn: () => fetchAttractions(filters),
    initialData: [],
  });

  if (isFetching) {
    return <>"در حال بارگذاری ..."</>;
  }

  return (
    <ul className={styles["attraction-list"]}>
      {attractions.map((attraction) => (
        <AttractionListItem key={attraction.id} attraction={attraction} />
      ))}
    </ul>
  );
}
