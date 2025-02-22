import { ComponentProps, ReactElement } from "react";

import clsx from "clsx";

import styles from "./TextArea.module.css";

type Props = ComponentProps<"textarea">;
export default function TextArea({
  className,
  ...otherProps
}: Props): ReactElement {
  return (
    <textarea
      className={clsx(styles["text-area"], className)}
      rows={3}
      {...otherProps}
    ></textarea>
  );
}
