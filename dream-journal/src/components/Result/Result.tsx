import { Dream } from "../../types/dream.ts";

import Button from "../Button/Button.tsx";

import MingcuteEdit2Line from "../../icons/MingcuteEdit2Line.tsx";
import MingcuteDelete2Line from "../../icons/MingcuteDelete2Line.tsx";

import styles from "./Result.module.css";

const dreams: Dream[] = [
  {
    id: "1",
    title: "School 1",
    description: "Lorem",
    date: new Date(2025, 0, 14),
    vibe: "good",
  },
  {
    id: "2",
    title: "School 2",
    description: "Lorem",
    date: new Date(2025, 0, 17),
    vibe: "bad",
  },
  {
    id: "3",
    title: "School 3",
    description: "Lorem",
    date: new Date(2025, 0, 21),
    vibe: "good",
  },
];

export default function Result() {
  return (
    <ul className={styles.result}>
      {dreams.map((dream) => (
        <li key={dream.id}>
          <div className={styles.title}> {dream.title}</div>
          <div className={styles.actions}>
            <Button variant="ghost" size="small" shape="square">
              <MingcuteEdit2Line />
            </Button>
            <Button color="danger" variant="ghost" size="small" shape="square">
              <MingcuteDelete2Line />
            </Button>
          </div>
        </li>
      ))}
    </ul>
  );
}
