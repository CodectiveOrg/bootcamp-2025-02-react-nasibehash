import { ComponentProps, ReactElement } from 'react';

import styles from "./DateInput.module.css";

import clsx from "clsx";

type Props = ComponentProps<"input">;

export default function DateInput({
  className,
  ...otherProps
}: Props): ReactElement {
  return (
    <div className={clsx(styles["date-input"], className)}>
      <input type="date" {...otherProps} />
    </div>
  );
}
