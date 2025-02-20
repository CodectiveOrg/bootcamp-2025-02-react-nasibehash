import { ReactElement, useRef } from "react";

import TextInput from "../TextInput/TextInput.tsx";
import TextArea from "../TextArea/TextArea.tsx";
import Button from "../Button/Button.tsx";
import DateInput from "../DateInput/DateInput.tsx";
import Select from "../Select/Select.tsx";

import MingcuteAddLine from "../../icons/MingcuteAddLine.tsx";

import styles from "./create.module.css";

export default function Create(): ReactElement {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const addButtonClickHandler = (): void => {
    dialogRef.current.showModal();
  };

  const cancelButtonClickHandler = (): void => {
    dialogRef.current.close();
  };

  return (
    <div className={styles.create}>
      <Button shape="circle" size="large" onClick={addButtonClickHandler}>
        <MingcuteAddLine />
      </Button>
      <dialog ref={dialogRef}>
        <div className={styles.content}>
          <div className={styles.title}>Create a new dream</div>
          <TextInput placeholder="Input your title ..." />
          <TextArea placeholder="Input your description..." />
          <DateInput />
          <Select
            variant="outlined"
            options={[
              { value: "good", label: "Good" },
              { value: "bad", label: "Bad" },
            ]}
          />
          <div className={styles.actions}>
            <Button
              type="button"
              variant="outlined"
              onClick={cancelButtonClickHandler}
            >
              Cancel
            </Button>
            <Button variant="solid">Apply</Button>
          </div>
        </div>
      </dialog>
    </div>
  );
}
