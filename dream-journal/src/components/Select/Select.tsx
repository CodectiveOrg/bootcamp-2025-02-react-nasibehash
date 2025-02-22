import { ComponentProps, ReactElement } from "react";

import { SelectOption } from "../../types/select-option.ts";

import styles from "./Select.module.css";

import clsx from "clsx";

type Variant = "solid" | "outlined";

type Props = ComponentProps<"select"> & {
  variant?: Variant;
  options: SelectOption[];
};

export default function Select({
  variant = "solid",
  options,
  ...otherProps
}: Props): ReactElement {
  return (
    <div className={clsx(styles["select"], styles[variant])}>
      <select {...otherProps}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
