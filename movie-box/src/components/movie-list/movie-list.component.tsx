import { ReactElement, useContext } from "react";

import { useQuery } from "@tanstack/react-query";

import { fetchMoviesApi } from "../../api/fetch-movies.api.ts";

import { FiltersContext } from "../../context/filters.context.ts";

import LoadingComponent from "../loading/loading.component.tsx";
import MovieListItemComponent from "../movie-list-item/movie-list-item.component.tsx";

import styles from "./movie-list.module.css";

function MovieListComponent(): ReactElement {
  const { filters } = useContext(FiltersContext);

  const { data, isPending, isFetching, isError, error } = useQuery({
    queryKey: ["movies", filters],
    queryFn: () => fetchMoviesApi(filters),
    staleTime: 60 * 1000,
  });

  if (isPending) {
    return <LoadingComponent />;
  }

  if (isError) {
    return <>Error: {error ? error.message : "Unexpected error."}</>;
  }

  return (
    <ul
      className={styles["movie-list"]}
      style={{ opacity: isFetching ? "0.5" : "1" }}
    >
      {data.map((movie) => (
        <MovieListItemComponent key={movie.id} movie={movie} />
      ))}
    </ul>
  );
}

export default MovieListComponent;
