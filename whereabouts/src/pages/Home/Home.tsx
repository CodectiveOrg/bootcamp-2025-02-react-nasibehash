import { ReactElement } from "react";

import AttractionList from "../../components/AttractionsList/AttractionList.tsx";
import Filters from "../../components/Filters/Filters.tsx";

import FiltersProvider from "../../Providers/FiltersProvider.tsx";

import styles from "./Home.module.css";

export default function Home(): ReactElement {
  return (
    <FiltersProvider>
      <div className={styles.home}>
        <Filters />
        <AttractionList />
      </div>
    </FiltersProvider>
  );
}
