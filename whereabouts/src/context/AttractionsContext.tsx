import { createContext } from "react";

import { Attraction } from "../types/attraction.ts";

type AttractionsContextValue = {
  filteredAttractions: Attraction[];
};

export const AttractionsContext = createContext<AttractionsContextValue>({
  filteredAttractions: [],
});
