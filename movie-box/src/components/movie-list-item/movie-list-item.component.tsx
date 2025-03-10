import { ReactElement, useMemo } from "react";
import { useQuery } from "@tanstack/react-query";

import { Link } from "react-router";

import clsx from "clsx";

import { fetchGenresApi } from "../../api/fetch-genres.api.ts";

import FluentEmojiStar from "../../icons/FluentEmojiStar.tsx";

import { MovieListItemType } from "../../types/movie-list-item.type.ts";

import styles from "./movie-list-item.module.css";

type Props = {
  movie: MovieListItemType;
};

function MovieListItemComponent({ movie }: Props): ReactElement {
  const { data: allGenres } = useQuery({
    queryKey: ["genres"],
    queryFn: fetchGenresApi,
  });

  const movieGenres = useMemo(() => {
    if (!allGenres) {
      return [];
    }
    return allGenres?.filter((x) => movie.genre_ids.includes(x.id));
  }, [allGenres, movie.genre_ids]);

  return (
    <li className={styles["movie-list-item"]}>
      <div className={styles.visuals}>
        <img className={clsx(styles.poster)} src={""} alt="" />
      </div>
      <div className={styles.writings}>
        <Link
          to={`/movie/${movie.id}`}
          className={styles.title}
          title={movie.title}
        >
          {movie.title}
        </Link>
        <div className={styles.ratings}>
          {movie.vote_average.toLocaleString("default", {
            minimumFractionDigits: 1,
            maximumFractionDigits: 1,
            roundingMode: "floor",
          })}{" "}
          <FluentEmojiStar />
        </div>
        <div className={styles.overview}>{movie.overview}</div>
        <ul className={styles.genres}>
          {movieGenres.map((genre) => (
            <li key={genre.id}>{genre.name}</li>
          ))}
        </ul>
      </div>
    </li>
  );
}

export default MovieListItemComponent;
