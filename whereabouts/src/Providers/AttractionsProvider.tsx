import { PropsWithChildren, ReactElement, useContext } from "react";
import { useQuery } from "@tanstack/react-query";

import { FiltersContext } from "../context/FiltersContext.tsx";
import { AttractionsContext } from "../context/AttractionsContext.tsx";

import { fetchAttractions } from "../api/fetch-attractions.ts";

type Props = PropsWithChildren;

function AttractionsProvider({ children }: Props): ReactElement {
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
    <AttractionsContext.Provider value={{ filteredAttractions: attractions }}>
      {children}
    </AttractionsContext.Provider>
  );
}

export default AttractionsProvider;
