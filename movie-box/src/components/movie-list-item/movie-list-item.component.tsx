import { ReactElement, useMemo, useState } from "react";

import { Link } from "react-router";

import clsx from "clsx";

import FluentEmojiStar from "../../icons/FluentEmojiStar.tsx";

import useConfigurationQuery from "../../queries/use-configuration.query.ts";
import useGenresQuery from "../../queries/use-genres.query.ts";

import { MovieListItemType } from "../../types/movie-list-item.type.ts";

import styles from "./movie-list-item.module.css";

type Props = {
  movie: MovieListItemType;
};

function MovieListItemComponent({ movie }: Props): ReactElement {
  const { data: configuration } = useConfigurationQuery();
  const { data: allGenres } = useGenresQuery();

  const [isImageBroken, setIsImageBroken] = useState<boolean>(false);

  const movieGenres = useMemo(() => {
    if (!allGenres) {
      return [];
    }

    return allGenres.filter((x) => movie.genre_ids.includes(x.id));
  }, [allGenres, movie.genre_ids]);

  return (
    <li className={styles["movie-list-item"]}>
      <div className={styles.visuals}>
        {configuration && movie.poster_path && (
          <img
            className={clsx(styles.poster, isImageBroken && styles.broken)}
            src={`${configuration?.images.base_url}${configuration?.images.poster_sizes[0]}${movie.poster_path}`}
            alt=""
            onError={() => setIsImageBroken(true)}
          />
        )}
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
