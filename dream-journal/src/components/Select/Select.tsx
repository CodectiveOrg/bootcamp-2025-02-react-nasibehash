import { ComponentProps } from "react";

import { SelectOption } from "../../types/select-option.ts";

import styles from "./Select.module.css";

import clsx from "clsx";

type props = ComponentProps<"select"> & {
  options: SelectOption[];
};
export default function Select({ options, ...otherProps }: props) {
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
