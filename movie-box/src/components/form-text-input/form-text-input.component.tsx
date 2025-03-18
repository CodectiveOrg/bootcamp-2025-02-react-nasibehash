import { ComponentProps, ReactElement } from "react";

import clsx from "clsx";

import IconButtonComponent from "./components/icon-button/icon-button.component.tsx";
import ErrorsComponent from "./components/errors/errors.component.tsx";

import styles from "./form-text-input.module.css";

type Props = ComponentProps<"input"> & {
  label: string;
  suffixIcon?: ReactElement;
  onSuffixClick?: () => void;
  errors?: string[];
};

export default function FormTextInputComponent({
  label,
  suffixIcon,
  onSuffixClick,
  errors,
  className,
  ...otherProps
}: Props): ReactElement {
  return (
    <div className={clsx(styles["form-text-input"], className)}>
      <label className={clsx(errors && errors.length > 0 && styles.invalid)}>
        <div className={styles.title}>{label}</div>
        <div className={styles.box}>
          <input type="text" placeholder="" {...otherProps} />
          {suffixIcon && (
            <IconButtonComponent onClick={onSuffixClick}>
              {suffixIcon}
            </IconButtonComponent>
          )}
        </div>
      </label>
      <ErrorsComponent className={styles.errors} errors={errors} />
    </div>
  );
}
