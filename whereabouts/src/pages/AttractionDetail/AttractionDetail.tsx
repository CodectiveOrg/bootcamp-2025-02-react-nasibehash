import { ReactElement } from "react";
import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";

import AttractionDetailSidebar from "./components/AttractionDetailSideBar/AttractionDetailSideBar.tsx";
import AttractionDetailBody from "./components/AttractionDetailBody/AttractionDetailBody.tsx";
import Carousel from "./components/Carousel/Carousel.tsx";

import { fetchAttraction } from "../../api/fetch-attraction.ts";

import styles from "./AttractionDetail.module.css";

export default function AttractionDetail(): ReactElement {
  const { id } = useParams();

  const { data: attraction, isFetching } = useQuery({
    queryKey: [["attractions"], id],
    queryFn: () => fetchAttraction(id),
  });

  if (isFetching || !attraction) {
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
