import { ComponentProps, ReactElement } from "react";

import clsx from "clsx";

import styles from "./TextInput.module.css";

type Props = ComponentProps<"input"> & {
  suffixIcon?: ReactElement;
};
export default function TextInput({
  suffixIcon,
  className,
  ...otherProps
}: Props): ReactElement {
  return (
    <div className={clsx(styles["text-input"], className)}>
      <input type="text" {...otherProps} />
      {suffixIcon && <div className={styles.suffix}>{suffixIcon}</div>}
    </div>
  );
}
