import { ReactElement } from "react";

import TagFilter from "./components/TagFilter.tsx";

import styles from "./Filters.module.css";

export default function Filters(): ReactElement {
  return (
    <div className={styles.Filters}>
      <TagFilter />
    </div>
  );
}
