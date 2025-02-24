import { ReactElement, useContext, useEffect, useRef } from "react";

import CreateForm from "../CreateForm/CreateForm.tsx";
import Button from "../Button/Button.tsx";

import MingcuteAddLine from "../../icons/MingcuteAddLine.tsx";

import styles from "./create.module.css";
import { DreamsContext } from "../../context/dreams-context.ts";

export default function Create(): ReactElement {
  const { editingDream, setEditingDream } = useContext(DreamsContext);
  const dialogRef = useRef<HTMLDialogElement>(null);

  const addButtonClickHandler = (): void => {
    dialogRef.current?.showModal();
  };

  const closeModal = (): void => {
    dialogRef.current?.close();
    setEditingDream(null);
  };

  useEffect(() => {
    if (editingDream) {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
  }, [editingDream]);

  return (
    <div className={styles.create}>
      <Button shape="circle" size="large" onClick={addButtonClickHandler}>
        <MingcuteAddLine />
      </Button>
      <dialog ref={dialogRef}>
        {editingDream && (
          <CreateForm onCancel={closeModal} onSubmit={closeModal} />
        )}
        {!editingDream && (
          <CreateForm onCancel={closeModal} onSubmit={closeModal} />
        )}
      </dialog>
    </div>
  );
}
