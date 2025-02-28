import { ReactElement } from "react";
import { Link } from "react-router";

import FluentEmojiStar from "../../icons/FluentEmojiStar.tsx";

import { Attraction } from "../../types/attraction.ts";

import styles from "./AttractionListItem.module.css";

type Props = {
  attraction: Attraction;
};
export default function AttractionListItem({
  attraction,
}: Props): ReactElement {
  return (
    <li className={styles["attraction-list-item"]}>
      <div className={styles.visuals}>
        <img
          className={styles.thumbnail}
          src={`https://images.kojaro.com/${attraction.thumbnail}`}
          alt=""
        />
      </div>
      <div className={styles.writings}>
        <Link to={`/attraction/${attraction.id}`} className={styles.title}>
          {attraction.title}
        </Link>
        <div className={styles.ratings}>
          {attraction.averageRating} <FluentEmojiStar />
        </div>
        <div
          className={styles.description}
          dangerouslySetInnerHTML={{ __html: attraction.description }}
        />
      </div>
      <ul className={styles.tags}>
        {attraction.tags.map((tag) => (
          <li key={tag.id}>{tag.title}</li>
        ))}
      </ul>
    </li>
  );
}
