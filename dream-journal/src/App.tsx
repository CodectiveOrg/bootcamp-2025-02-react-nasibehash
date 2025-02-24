import { ReactNode } from "react";

import Header from "./components/Header/Header.tsx";
import Toolbar from "./components/Toolbar/Toolbar.tsx";
import Result from "./components/Result/Result.tsx";
import Create from "./components/create/create.tsx";

import DreamsProvider from "./providers/DreamsProvider.tsx";

import "./App.css";
import ThemeProvider from "./providers/ThemeProvider.tsx";

function App(): ReactNode {
  return (
    <ThemeProvider>
      <DreamsProvider>
        <Header />
        <main>
          <Toolbar />
          <Result />
        </main>
        <Create />
      </DreamsProvider>
    </ThemeProvider>
  );
}

export default App;
