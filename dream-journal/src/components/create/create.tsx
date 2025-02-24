import { Dispatch, ReactElement, SetStateAction, useRef } from "react";

import CreateForm from "../CreateForm/CreateForm.tsx";
import Button from "../Button/Button.tsx";

import MingcuteAddLine from "../../icons/MingcuteAddLine.tsx";

import { Dream } from "../../types/dream.ts";

import styles from "./create.module.css";

type Props = {
  setDreams: Dispatch<SetStateAction<Dream[]>>;
};
export default function Create({ setDreams }: Props): ReactElement {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const addButtonClickHandler = (): void => {
    dialogRef.current?.showModal();
  };

  const closeModal = (): void => {
    dialogRef.current?.close();
  };
  return (
    <div className={styles.create}>
      <Button shape="circle" size="large" onClick={addButtonClickHandler}>
        <MingcuteAddLine />
      </Button>
      <dialog ref={dialogRef}>
        <CreateForm
          setDreams={setDreams}
          onCancel={closeModal}
          onSubmit={closeModal}
        />
      </dialog>
    </div>
  );
}
