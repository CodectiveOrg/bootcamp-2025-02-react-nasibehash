import { PropsWithChildren, ReactNode, useEffect, useState } from "react";

import { DreamsContext } from "../context/dreams-context.ts";

import { Dream } from "../types/dream.ts";

import { DREAMS_LOCAL_STORAGE_KEY } from "../constants/local-storage-keys.ts";

type Props = PropsWithChildren;

type localStorageDream = Omit<Dream, "date"> & { date: string };
export default function DreamsProvider({ children }: Props): ReactNode {
  const [dreams, setDreams] = useState<Dream[]>(loadDreamsInitialState);
  const [editingDream, setEditingDream] = useState<Dream | null>(null);

  useEffect(() => {
    localStorage.setItem(DREAMS_LOCAL_STORAGE_KEY, JSON.stringify(dreams));
  }, [dreams]);

  const createDream = (dream: Dream): void => {
    setDreams((old) => [...old, dream]);
  };

  const editDream = (dream: Dream): void => {
    setDreams((old) => old.map((x) => (x.id === dream.id ? { ...dream } : x)));
  };

  const removeDream = (id: string): void => {
    setDreams((old) => old.filter((x) => x.id !== id));
  };

  return (
    <DreamsContext.Provider
      value={{
        dreams,
        createDream,
        editDream,
        removeDream,
        editingDream,
        setEditingDream,
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

  const parsedDreams = JSON.parse(items) as localStorageDream[];
  return parsedDreams.map((dream) => ({
    ...dream,
    date: new Date(dream.date),
  }));
}
