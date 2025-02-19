import "./App.css";
import Header from "./components/Header/Header.tsx";
import Toolbar from "./components/Toolbar/Toolbar.tsx";
import Result from "./components/Result/Result.tsx";
import { ReactNode } from "react";

function App(): ReactNode {
  return (
    <>
      <Header />
      <main>
      <Toolbar />
      <Result />
      </main>
    </>
  );
}

export default App;
