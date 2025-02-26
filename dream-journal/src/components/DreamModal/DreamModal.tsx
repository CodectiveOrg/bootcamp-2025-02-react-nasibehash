import {
  forwardRef,
  ReactElement,
  useEffect,
  useImperativeHandle,
  useRef,
} from "react";

import Toaster from "../Toaster/Toaster.tsx";
import DreamForm from "../DreamForm/DreamForm.tsx";

import { MODAL_CONTAINER_ID } from "../../constants/id.ts";

import { Dream } from "../../types/dream.ts";

import styles from "./DreamModal.module.css";

type modalRef = Pick<HTMLDialogElement, "showModal" | "close">;

type Props = {
  editingDream?: Dream;
};

const DreamModal = forwardRef<modalRef, Props>(function DreamModal(
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
      <DreamForm
        editingDream={editingDream}
        onCancel={closeModal}
        onSubmit={closeModal}
      />
      <Toaster containerId={MODAL_CONTAINER_ID} />
    </dialog>
  );
});
export default DreamModal;
