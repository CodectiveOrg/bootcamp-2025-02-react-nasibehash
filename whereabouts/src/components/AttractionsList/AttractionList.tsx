import { ReactElement } from "react";

import AttractionListItem from "../AttractionListItem/AttractionListItem.tsx";

import { Attraction } from "../../types/attraction.ts";

import styles from "./AttractionList.module.css";

type Props = {
  attractions: Attraction[];
};
export default function AttractionList({ attractions }: Props): ReactElement {
  return (
    <ul className={styles["attraction-list"]}>
      {attractions.map((attraction) => (
        <AttractionListItem key={attraction.id} attraction={attraction} />
      ))}
    </ul>
  );
}
