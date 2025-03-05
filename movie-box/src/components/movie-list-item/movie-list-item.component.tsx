import { ReactElement } from "react";

import { Link } from "react-router";

import clsx from "clsx";

import FluentEmojiStar from "../../icons/FluentEmojiStar.tsx";

import { MovieListItemType } from "../../types/movie-list-item.type.ts";

import styles from "./movie-list-item.module.css";

type Props = {
  movie: MovieListItemType;
};

function MovieListItemComponent({ movie }: Props): ReactElement {
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
          {movie.genre_ids.map((genre) => (
            <li key={genre}>{genre}</li>
          ))}
        </ul>
      </div>
    </li>
  );
}

export default MovieListItemComponent;
