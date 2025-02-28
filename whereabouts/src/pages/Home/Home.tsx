import { ReactElement } from "react";

import AttractionList from "../../components/AttractionsList/AttractionList.tsx";
import Filters from "../../components/Filters/Filters.tsx";

import FiltersProvider from "../../Providers/FiltersProvider.tsx";
import AttractionsProvider from "../../Providers/AttractionsProvider.tsx";

import styles from "./Home.module.css";

export default function Home(): ReactElement {
  return (
    <FiltersProvider>
      <AttractionsProvider>
        <div className={styles.home}>
          <Filters />
          <AttractionList />
        </div>
      </AttractionsProvider>
    </FiltersProvider>
  );
}
