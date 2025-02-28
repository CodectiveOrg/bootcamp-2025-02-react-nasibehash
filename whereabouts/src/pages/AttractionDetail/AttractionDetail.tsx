import { ReactElement, useEffect, useState } from "react";
import { useParams } from "react-router";

import AttractionDetailSidebar from "./components/AttractionDetailSideBar/AttractionDetailSideBar.tsx";
import AttractionDetailBody from "./components/AttractionDetailBody/AttractionDetailBody.tsx";
import Carousel from "./components/Carousel/Carousel.tsx";

import { Attraction as AttractionType } from "../../types/attraction.ts";

import styles from "./AttractionDetail.module.css";

export default function AttractionDetail(): ReactElement {
  const { id } = useParams();

  const [attraction, setAttraction] = useState<AttractionType>();

  useEffect(() => {
    const fetchAttraction = async (): Promise<void> => {
      const response = await fetch(
        `https://api.codective.ir/whereabouts/attraction/${id}`,
      );
      const data = await response.json();

      setAttraction(data);
    };

    fetchAttraction().then();
  }, [id]);

  if (!attraction) {
    return <>در حال بارگذاری...</>;
  }

  return (
    <div className={styles["attraction-detail"]}>
      <AttractionDetailSidebar attraction={attraction} />
      <Carousel attraction={attraction} />
      <AttractionDetailBody attraction={attraction} />
    </div>
  );
}
