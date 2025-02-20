import "./App.css";
import Header from "./components/Header/Header.tsx";
import Toolbar from "./components/Toolbar/Toolbar.tsx";
import Result from "./components/Result/Result.tsx";
import { ReactNode } from "react";
import Create from "./components/create/create.tsx";

function App(): ReactNode {
  return (
    <>
      <Header />
      <main>
        <Toolbar />
        <Result />
      </main>
      <Create />
    </>
  );
}

export default App;
