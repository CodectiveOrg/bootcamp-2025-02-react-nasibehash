import { ReactElement, useContext } from "react";

import { AttractionsContext } from "../../context/AttractionsContext.tsx";
import AttractionListItem from "../AttractionListItem/AttractionListItem.tsx";

import styles from "./AttractionList.module.css";

export default function AttractionList(): ReactElement {
  const { filteredAttractions } = useContext(AttractionsContext);

  return (
    <ul className={styles["attraction-list"]}>
      {filteredAttractions.map((attraction) => (
        <AttractionListItem key={attraction.id} attraction={attraction} />
      ))}
    </ul>
  );
}
