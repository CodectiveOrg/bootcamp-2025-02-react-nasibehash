import { Route, Routes } from "react-router";

import RootLayout from "./layouts/root/root.layout.tsx";

import HomePage from "./pages/home/home.page.tsx";
import MoviePage from "./pages/movie/movie.page.tsx";
import NotFoundPage from "./pages/not-found/not-found.page.tsx";
import SignUpPage from "./pages/auth/sign-up/sign-up-page.tsx";
import Toaster from "./components/toaster/toaster.tsx";

import QueryProvider from "./providers/query.provider.tsx";

import "./App.css";

function App() {
  return (
    <QueryProvider>
      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<HomePage />} />
          <Route path="movie/:id" element={<MoviePage />} />
          <Route path="auth/sign-up" element={<SignUpPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
      <Toaster />
    </QueryProvider>
  );
}

export default App;
