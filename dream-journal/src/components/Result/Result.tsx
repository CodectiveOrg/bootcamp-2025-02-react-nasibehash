import { useContext } from "react";

import Button from "../Button/Button.tsx";

import MingcuteEdit2Line from "../../icons/MingcuteEdit2Line.tsx";
import MingcuteDelete2Line from "../../icons/MingcuteDelete2Line.tsx";

import { DreamsContext } from "../../context/dreams-context.ts";

import styles from "./Result.module.css";

export default function Result() {
  const { dreams } = useContext(DreamsContext);
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
