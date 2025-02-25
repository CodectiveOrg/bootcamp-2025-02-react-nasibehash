import { useContext, useRef, useState } from "react";

import TaskModal from "../TaskModal/TaskModal.tsx";
import Button from "../Button/Button.tsx";

import MingcuteEdit2Line from "../../icons/MingcuteEdit2Line.tsx";
import MingcuteDelete2Line from "../../icons/MingcuteDelete2Line.tsx";

import { DreamsContext } from "../../context/dreams-context.ts";

import { Dream } from "../../types/dream.ts";

import styles from "./Result.module.css";

export default function Result() {
  const { dreams, removeDream, filteredDreams } = useContext(DreamsContext);
  const [editingDream, setEditingDream] = useState<Dream | null>(null);

  const modalRef = useRef<HTMLDialogElement>(null);

  const editButtonClickHandler = (dream: Dream): void => {
    setEditingDream(dream);
    modalRef.current?.showModal();
  };
  return (
    <>
      <ul className={styles.result}>
        {filteredDreams
          ? filteredDreams.map((dream) => (
              <li key={dream.id}>
                <div className={styles.title}> {dream.title}</div>
                <div className={styles.actions}>
                  <Button
                    variant="ghost"
                    size="small"
                    shape="square"
                    onClick={() => editButtonClickHandler(dream)}
                  >
                    <MingcuteEdit2Line />
                  </Button>
                  <Button
                    color="danger"
                    variant="ghost"
                    size="small"
                    shape="square"
                    onClick={() => removeDream(dream.id)}
                  >
                    <MingcuteDelete2Line />
                  </Button>
                </div>
              </li>
            ))
          : dreams.map((dream) => (
              <li key={dream.id}>
                <div className={styles.title}> {dream.title}</div>
                <div className={styles.actions}>
                  <Button
                    variant="ghost"
                    size="small"
                    shape="square"
                    onClick={() => editButtonClickHandler(dream)}
                  >
                    <MingcuteEdit2Line />
                  </Button>
                  <Button
                    color="danger"
                    variant="ghost"
                    size="small"
                    shape="square"
                    onClick={() => removeDream(dream.id)}
                  >
                    <MingcuteDelete2Line />
                  </Button>
                </div>
              </li>
            ))}
      </ul>
      <TaskModal ref={modalRef} editingDream={editingDream ?? undefined} />
    </>
  );
}
