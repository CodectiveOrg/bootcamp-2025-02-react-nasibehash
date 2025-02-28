import { ReactElement } from "react";

import MingcutePhoneFill from "../../../../icons/MingcutePhoneFill.tsx";
import MingcuteLocationFill from "../../../../icons/MingcuteLocationFill.tsx";

import { Attraction } from "../../../../types/attraction.ts";

import styles from "./AttractionDetailSidebar.module.css";

type Props = {
  attraction: Attraction;
};

export default function AttractionDetailSidebar({
  attraction,
}: Props): ReactElement {
  return (
    <aside className={styles["attraction-detail-sidebar"]}>
      <div className={styles.title}>اطلاعات جاذبه گردشگری</div>
      {attraction.phone && (
        <div className={styles.phone}>
          <MingcutePhoneFill />
          {attraction.phone}
        </div>
      )}
      <div className={styles.address}>
        <MingcuteLocationFill />
        {attraction.address}
      </div>
    </aside>
  );
}
