import { ReactElement } from "react";

import { useQuery } from "@tanstack/react-query";

import { useParams } from "react-router";

import { fetchMovieApi } from "../../api/fetch-movie.api.ts";

import styles from "./movie.module.css";

function MoviePage(): ReactElement {
  const { id } = useParams();

  const { data: movie, isFetching } = useQuery({
    queryKey: ["movie", id],
    queryFn: () => fetchMovieApi(id),
    staleTime: 60 * 1000,
  });

  if (isFetching || !movie) {
    return <>در حال بارگذاری...</>;
  }

  return <div className={styles.Movie}>{movie.title}</div>;
}

export default MoviePage;
