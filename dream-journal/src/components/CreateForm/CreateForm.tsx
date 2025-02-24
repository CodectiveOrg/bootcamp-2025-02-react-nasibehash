import { Dispatch, FormEvent, SetStateAction, useRef } from "react";

import TextInput from "../TextInput/TextInput.tsx";
import TextArea from "../TextArea/TextArea.tsx";
import DateInput from "../DateInput/DateInput.tsx";
import Select from "../Select/Select.tsx";
import Button from "../Button/Button.tsx";

import { Dream } from "../../types/dream.ts";
import { Vibe } from "../../types/Vibe.ts";

import styles from "./CreateForm.module.css";

type Props = {
  setDreams: Dispatch<SetStateAction<Dream[]>>;
  onCancel: VoidFunction;
  onSubmit: VoidFunction;
};
export default function CreateForm({ setDreams, onCancel, onSubmit }: Props) {
  const formRef = useRef<HTMLFormElement>(null);

  const formSubmitHandler = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const dream: Dream = {
      id: "23",
      title: formData.get("title") as string,
      description: formData.get("description") as string,
      date: new Date(formData.get("date") as string),
      vibe: formData.get("vibe") as Vibe,
    };

    setDreams((old) => [...old, dream]);

    onSubmit();
  };

  return (
    <form
      ref={formRef}
      className={styles["create-form"]}
      onSubmit={formSubmitHandler}
    >
      <div className={styles.title}>Create a new dream</div>
      <TextInput name="title" placeholder="Input your title ..." />
      <TextArea name="description" placeholder="Input your description..." />
      <DateInput name="date" />
      <Select
        name="vibe"
        variant="outlined"
        options={[
          { value: "good", label: "Good" },
          { value: "bad", label: "Bad" },
        ]}
      />
      <div className={styles.actions}>
        <Button type="button" variant="outlined" onClick={onCancel}>
          Cancel
        </Button>
        <Button variant="solid">Apply</Button>
      </div>
    </form>
  );
}
