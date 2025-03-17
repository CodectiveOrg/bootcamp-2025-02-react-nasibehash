import { ComponentProps, ReactElement, forwardRef, ForwardedRef } from "react";

import clsx from "clsx";

import IconButtonComponent from "./components/icon-button/icon-button.component.tsx";

import styles from "./form-text-input.module.css";

type Props = ComponentProps<"input"> & {
  label: string;
  suffixIcon?: ReactElement;
  onSuffixClick?: () => void;
  errors?: string[];
};

function FormTextInputComponent(
  { label, suffixIcon, onSuffixClick, errors, className, ...otherProps }: Props,
  ref: ForwardedRef<HTMLInputElement>,
): ReactElement {
  return (
    <div className={clsx(styles["form-text-input"], className)}>
      <label className={clsx(errors && errors.length > 0 && styles.invalid)}>
        <div className={styles.title}>{label}</div>
        <div className={styles.box}>
          <input ref={ref} type="text" placeholder="" {...otherProps} />
          {suffixIcon && (
            <IconButtonComponent onClick={onSuffixClick}>
              {suffixIcon}
            </IconButtonComponent>
          )}
        </div>
      </label>
    </div>
  );
}

export default forwardRef(FormTextInputComponent);
