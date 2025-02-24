import { PropsWithChildren, ReactNode, useState } from 'react';

import { DreamsContext } from '../context/dreams-context.ts';

import { Dream } from '../types/dream.ts';

type Props =PropsWithChildren;
export default function DreamsProvider ({children}:Props) : ReactNode {
  const [dreams, setDreams] = useState<Dream[]>([
    {
      id: "1",
      title: "School 1",
      description: "Lorem",
      date: new Date(2025, 0, 14),
      vibe: "good",
    },
    {
      id: "2",
      title: "School 2",
      description: "Lorem",
      date: new Date(2025, 0, 17),
      vibe: "bad",
    },
    {
      id: "3",
      title: "School 3",
      description: "Lorem",
      date: new Date(2025, 0, 21),
      vibe: "good",
    },
  ]);

  return (
    <DreamsContext.Provider value={{ dreams, setDreams }}>
      {children}
    </DreamsContext.Provider>
  );
}