import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

import Header from "./components/Header/Header.tsx";
import Toolbar from "./components/Toolbar/Toolbar.tsx";
import Result from "./components/Result/Result.tsx";
import Create from "./components/create/create.tsx";

import { Dream } from "./types/dream.ts";

import "./App.css";

type DreamsContextValue = {
  dreams: Dream[];
  setDreams: Dispatch<SetStateAction<Dream[]>>;
};

export const DreamsContext = createContext<DreamsContextValue>({
  dreams: [],
  setDreams: () => {},
});

function App(): ReactNode {
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
      <Header />
      <main>
        <Toolbar />
        <Result dreams={dreams} />
      </main>
      <Create setDreams={setDreams} />
    </DreamsContext.Provider>
  );
}

export default App;
