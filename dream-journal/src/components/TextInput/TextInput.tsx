import { ComponentProps, ForwardedRef, forwardRef, ReactElement } from "react";

import clsx from "clsx";

import styles from "./TextInput.module.css";

type Props = ComponentProps<"input"> & {
  suffixIcon?: ReactElement;
};

function TextInput(
  { suffixIcon, className, ...otherProps }: Props,
  ref: ForwardedRef<HTMLInputElement>,
): ReactElement {
  return (
    <div className={clsx(styles["text-input"], className)}>
      <input ref={ref} type="text" {...otherProps} />
      {suffixIcon && <div className={styles.suffix}>{suffixIcon}</div>}
    </div>
  );
}

export default forwardRef(TextInput);
