import { FormEvent, useContext, useEffect, useRef, useState } from "react";

import TextInput from "../TextInput/TextInput.tsx";
import TextArea from "../TextArea/TextArea.tsx";
import DateInput from "../DateInput/DateInput.tsx";
import Select from "../Select/Select.tsx";
import Button from "../Button/Button.tsx";

import { DreamsContext } from "../../context/dreams-context.ts";

import { Dream } from "../../types/dream.ts";
import { Vibe } from "../../types/Vibe.ts";

import styles from "./TaskForm.module.css";

type Props = {
  editingDream?: Dream;
  onCancel: VoidFunction;
  onSubmit: VoidFunction;
};
export default function TaskForm({ editingDream, onCancel, onSubmit }: Props) {
  const formRef = useRef<HTMLFormElement>(null);

  const [dream, setDream] = useState(generateEmptyDream);

  const { createDream, editDream } = useContext(DreamsContext);

  useEffect(() => {
    setDream(editingDream ? { ...editingDream } : generateEmptyDream());
  }, [editingDream]);

  const formSubmitHandler = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (editingDream) {
      editDream(dream);
    } else {
      createDream(dream);
    }

    onSubmit();
    setDream(generateEmptyDream);
  };

  const cancelButtonClickHandler = () => {
    onCancel();
  };

  return (
    <form
      ref={formRef}
      className={styles["create-form"]}
      onSubmit={formSubmitHandler}
    >
      <div className={styles.title}>
        {editingDream ? `Edit ${editingDream.title}` : "Create a new dream"}
      </div>
      <TextInput
        name="title"
        placeholder="Input your title ..."
        value={dream?.title}
        onChange={(e) => setDream((old) => ({ ...old, title: e.target.value }))}
      />
      <TextArea
        name="description"
        placeholder="Input your description..."
        value={dream?.description}
        onChange={(e) =>
          setDream((old) => ({ ...old, description: e.target.value }))
        }
      />
      <DateInput
        name="date"
        value={dream?.date}
        onChange={(e) => setDream((old) => ({ ...old, date: e.target.value }))}
      />
      <Select
        name="vibe"
        variant="outlined"
        value={dream?.vibe}
        options={[
          { value: "good", label: "Good" },
          { value: "bad", label: "Bad" },
        ]}
        onChange={(e) =>
          setDream((old) => ({ ...old, vibe: e.target.value as Vibe }))
        }
      />
      <div className={styles.actions}>
        <Button
          type="button"
          variant="outlined"
          onClick={cancelButtonClickHandler}
        >
          Cancel
        </Button>
        <Button variant="solid">{editingDream ? "Edit" : "Create"}</Button>
      </div>
    </form>
  );
}

function generateEmptyDream(): Dream {
  return {
    id: crypto.randomUUID(),
    title: "",
    description: "",
    date: "",
    vibe: "good",
  };
}
