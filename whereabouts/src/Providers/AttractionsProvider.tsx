import {
  PropsWithChildren,
  ReactElement,
  useContext,
  useEffect,
  useState,
} from "react";

import { FiltersContext } from "../context/FiltersContext.tsx";
import { AttractionsContext } from "../context/AttractionsContext.tsx";

import { Attraction } from "../types/attraction.ts";

type Props = PropsWithChildren;

function AttractionsProvider({ children }: Props): ReactElement {
  const { filters } = useContext(FiltersContext);

  const [filteredAttractions, setFilteredAttractions] = useState<Attraction[]>(
    [],
  );

  useEffect(() => {
    const fetchAttractions = async (): Promise<void> => {
      const params = new URLSearchParams();
      filters.tags.forEach((tag) => params.append("tag", tag.id.toString()));

      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/attractions?${params.toString()}`,
      );
      const data = await response.json();

      setFilteredAttractions(data);
    };

    fetchAttractions().then();
  }, [filters]);

  return (
    <AttractionsContext.Provider value={{ filteredAttractions }}>
      {children}
    </AttractionsContext.Provider>
  );
}

export default AttractionsProvider;
