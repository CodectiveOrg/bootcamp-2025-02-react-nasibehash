import { Route, Routes } from "react-router";

import RootLayout from "./layouts/root/root.layout.tsx";

import HomePage from "./pages/home/home.page.tsx";
import MoviePage from "./pages/movie/movie.page.tsx";
import NotFoundPage from "./pages/not-found/not-found.page.tsx";

import QueryProvider from "./providers/query.provider.tsx";

import "./App.css";

function App() {
  return (
    <QueryProvider>
      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<HomePage />} />
          <Route path="movie/:id" element={<MoviePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </QueryProvider>
  );
}

export default App;
