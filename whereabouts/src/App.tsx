import { Route, Routes } from "react-router";

import RootLayout from "./layouts/RootLayout.tsx";
import About from "./pages/About/About.tsx";
import Home from "./pages/Home/Home.tsx";

import "./App.css";
function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  );
}

export default App;
