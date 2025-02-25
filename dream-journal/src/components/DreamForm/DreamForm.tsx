import { FormEvent, useContext, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

import TextInput from "../TextInput/TextInput.tsx";
import TextArea from "../TextArea/TextArea.tsx";
import DateInput from "../DateInput/DateInput.tsx";
import Select from "../Select/Select.tsx";
import Button from "../Button/Button.tsx";
import { toast } from "react-toastify";

import { DreamsContext } from "../../context/dreams-context.ts";

import { MODAL_CONTAINER_ID } from "../../constants/id.ts";

import { Dream } from "../../types/dream.ts";
import { Vibe } from "../../types/Vibe.ts";

import styles from "./DreamForm.module.css";

type Props = {
  editingDream?: Dream;
  onCancel: VoidFunction;
  onSubmit: VoidFunction;
};
export default function DreamForm({ editingDream, onCancel, onSubmit }: Props) {
  const formRef = useRef<HTMLFormElement>(null);

  const [dream, setDream] = useState(generateEmptyDream);

  const { createDream, editDream } = useContext(DreamsContext);

  const { t } = useTranslation();

  useEffect(() => {
    setDream(editingDream ? { ...editingDream } : generateEmptyDream());
  }, [editingDream]);

  const formSubmitHandler = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (!dream.title) {
      toast.error("Title is required.", { containerId: MODAL_CONTAINER_ID });
      return;
    }

    if (!dream.description) {
      toast.error("Description is required.", {
        containerId: MODAL_CONTAINER_ID,
      });
      return;
    }

    if (!dream.date) {
      toast.error("Date is required.", { containerId: MODAL_CONTAINER_ID });
      return;
    }

    if (!dream.vibe) {
      toast.error("Vibe is required.", { containerId: MODAL_CONTAINER_ID });
      return;
    }

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
        {editingDream
          ? t("dreams.create.edit", { title: editingDream.title })
          : t("dreams.create.title")}
      </div>
      <TextInput
        name="title"
        placeholder={t("dreams.form.title.placeholder")}
        value={dream?.title}
        onChange={(e) => setDream((old) => ({ ...old, title: e.target.value }))}
      />
      <TextArea
        name="description"
        placeholder={t("dreams.form.description.placeholder")}
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
          {t("dreams.actions.cancel")}
        </Button>
        <Button variant="solid">
          {" "}
          {editingDream
            ? t("dreams.actions.confirm")
            : t("dreams.actions.create")}
        </Button>
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
