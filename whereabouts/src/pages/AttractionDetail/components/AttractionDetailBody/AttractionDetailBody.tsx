import { ReactElement } from "react";

import { Attraction } from "../../../../types/attraction.ts";

import styles from "./AttractionDetailBody.module.css";

type Props = {
  attraction: Attraction;
};

export default function AttractionDetailBody({
  attraction,
}: Props): ReactElement {
  return (
    <div className={styles["attraction-detail-body"]}>
      <div dangerouslySetInnerHTML={{ __html: attraction.body }} />
    </div>
  );
}

