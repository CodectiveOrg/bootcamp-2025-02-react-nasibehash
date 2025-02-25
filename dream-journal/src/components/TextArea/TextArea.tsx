import { ComponentProps, ForwardedRef, forwardRef, ReactElement } from "react";

import clsx from "clsx";

import styles from "./TextArea.module.css";

type Props = ComponentProps<"textarea">;

const TextArea = forwardRef(function TextArea(
  { className, ...otherProps }: Props,
  ref: ForwardedRef<HTMLTextAreaElement>,
): ReactElement {
  return (
    <textarea
      ref={ref}
      className={clsx(styles["text-area"], className)}
      rows={3}
      {...otherProps}
    ></textarea>
  );
});

export default TextArea;
