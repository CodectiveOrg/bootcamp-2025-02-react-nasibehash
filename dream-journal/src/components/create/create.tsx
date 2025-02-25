import { ReactElement, useRef } from "react";

import TaskModal from "../TaskModal/TaskModal.tsx";
import Button from "../Button/Button.tsx";

import MingcuteAddLine from "../../icons/MingcuteAddLine.tsx";

import styles from "./create.module.css";

export default function Create(): ReactElement {
  const modalRef = useRef<HTMLDialogElement>(null);

  const addButtonClickHandler = (): void => {
    modalRef.current?.showModal();
  };

  return (
    <div className={styles.create}>
      <Button shape="circle" size="large" onClick={addButtonClickHandler}>
        <MingcuteAddLine />
      </Button>
      <TaskModal ref={modalRef} />
    </div>
  );
}
