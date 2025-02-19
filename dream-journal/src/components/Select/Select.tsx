import { ComponentProps } from "react";

import { SelectOption } from "../../types/select-option.ts";

import styles from "./Select.module.css";

import clsx from "clsx";

type Props = ComponentProps<"select"> & {
  options: SelectOption[];
};
export default function Select({ options, ...otherProps }: Props) {
  return (
    <div className={clsx(styles["select"])}>
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
