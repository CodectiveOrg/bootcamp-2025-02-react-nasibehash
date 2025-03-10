import { PropsWithChildren, ReactNode, useEffect, useState } from "react";

import { toast } from "react-toastify";

import { DreamsContext } from "../context/dreams-context.ts";

import { DREAMS_LOCAL_STORAGE_KEY } from "../constants/local-storage-keys.ts";

import { Dream } from "../types/dream.ts";
import { Vibe } from "../types/Vibe.ts";

type Props = PropsWithChildren;

export default function DreamsProvider({ children }: Props): ReactNode {
  const [dreams, setDreams] = useState<Dream[]>(loadDreamsInitialState);
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<Vibe | null>(null);

  const [filteredDreams, setFilteredDreams] = useState<Dream[]>(
    loadDreamsInitialState,
  );

  useEffect(() => {
    const filtered = dreams.filter(
      (dream) => selected === "all" || dream.vibe === selected,
    );
    setFilteredDreams(filtered);
  }, [selected]);

  useEffect(() => {
    const filtered = dreams.filter((dream) =>
      dream.title.toLowerCase().includes(search.toLowerCase()),
    );
    setFilteredDreams(filtered);
    // }
  }, [search]);

  useEffect(() => {
    localStorage.setItem(DREAMS_LOCAL_STORAGE_KEY, JSON.stringify(dreams));
  }, [dreams]);

  const createDream = (dream: Dream): void => {
    setDreams((old) => [...old, dream]);
    setFilteredDreams((old) => [...old, dream]);
    toast.success("Dream created Successfully");
  };

  const editDream = (dream: Dream): void => {
    setDreams((old) => old.map((x) => (x.id === dream.id ? { ...dream } : x)));
    setFilteredDreams((old) =>
      old.map((x) => (x.id === dream.id ? { ...dream } : x)),
    );
    toast.success("Dream updated Successfully");
  };

  const removeDream = (id: string): void => {
    setDreams((old) => old.filter((x) => x.id !== id));
    setFilteredDreams((old) => old.filter((x) => x.id !== id));
    toast.success("Dream removed Successfully");
  };

  return (
    <DreamsContext.Provider
      value={{
        dreams,
        createDream,
        editDream,
        removeDream,
        filteredDreams,
        setFilteredDreams,
        selected,
        setSelected,
        search,
        setSearch,
      }}
    >
      {children}
    </DreamsContext.Provider>
  );
}

function loadDreamsInitialState(): Dream[] {
  const items = localStorage.getItem(DREAMS_LOCAL_STORAGE_KEY);

  if (!items) {
    return [];
  }

  return JSON.parse(items);
}
