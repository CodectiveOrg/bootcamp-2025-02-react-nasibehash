import { ReactElement } from "react";
import { Link } from "react-router";

import FormTextInputComponent from "../../../components/form-text-input/form-text-input.component.tsx";
import PasswordInputComponent from "../../../components/password-input/password-input.component.tsx";
import ButtonComponent from "../../../components/button/button.component.tsx";

import styles from "./sign-up-form.module.css";

export default function SignUpFormComponent(): ReactElement {
  return (
    <div className={styles["sign-up-form"]}>
      <h1>Sign Up!</h1>
      <form>
        <FormTextInputComponent label="Username" />
        <PasswordInputComponent label="Password" autoComplete="new-password" />
        <ButtonComponent>Sign Up</ButtonComponent>
      </form>
      <div className={styles["change-form"]}>
        Already have an account? <Link to="/auth/sign-in">Sign In</Link>
      </div>
    </div>
  );
}
