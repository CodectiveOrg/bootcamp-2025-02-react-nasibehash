import { ComponentProps, forwardRef, ReactElement } from "react";

import { SelectOption } from "../../types/select-option.ts";

import styles from "./Select.module.css";

import clsx from "clsx";

type Variant = "solid" | "outlined";

type Props = ComponentProps<"select"> & {
  variant?: Variant;
  options: SelectOption[];
};
const Select = forwardRef<HTMLSelectElement, Props>(function Select(
  { variant = "solid", options, ...otherProps },
  ref,
): ReactElement {
  return (
    <div className={clsx(styles["select"], styles[variant])}>
      <select ref={ref} {...otherProps}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
});
export default Select;
