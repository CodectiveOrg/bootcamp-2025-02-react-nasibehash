import {
  forwardRef,
  ReactElement,
  useEffect,
  useImperativeHandle,
  useRef,
} from "react";

import TaskForm from "../TaskForm/TaskForm.tsx";

import { Dream } from "../../types/dream.ts";

import styles from "./TaskModal.module.css";

type TaskModalRef = Pick<HTMLDialogElement, "showModal" | "close">;

type Props = {
  editingDream?: Dream;
};

const TaskModal = forwardRef<TaskModalRef, Props>(function TaskModal(
  { editingDream },
  outerRef,
): ReactElement {
  const innerRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (editingDream) {
      innerRef.current?.showModal();
    } else {
      innerRef.current?.close();
    }
  }, [editingDream]);

  useImperativeHandle(outerRef, () => ({
    showModal: (): void => {
      innerRef.current?.showModal();
    },
    close: (): void => {
      innerRef.current?.close();
    },
  }));
  const closeModal = (): void => {
    innerRef.current?.close();
  };
  return (
    <dialog className={styles["task-modal"]} ref={innerRef}>
      <TaskForm
        editingDream={editingDream}
        onCancel={closeModal}
        onSubmit={closeModal}
      />
    </dialog>
  );
});
export default TaskModal;
