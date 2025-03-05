import { Route, Routes } from "react-router";

import AttractionDetail from "./pages/AttractionDetail/AttractionDetail.tsx";
import NotFound from "./pages/NotFound/NotFound.tsx";
import RootLayout from "./layouts/RootLayout.tsx";
import About from "./pages/About/About.tsx";
import Home from "./pages/Home/Home.tsx";

import "./App.css";
import { QueryProvider } from './Providers/QueryProvider.tsx';

function App() {
  return (
    <QueryProvider>
    <Routes>
      <Route element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="attraction/:id" element={<AttractionDetail />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
    </QueryProvider>
  );
}

export default App;
