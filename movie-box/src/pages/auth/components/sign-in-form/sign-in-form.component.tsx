import { FormEvent, ReactElement, useState } from "react";
import { Link, useNavigate } from "react-router";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

import { fetchSignInApi } from "../../../../api/fetch-sign-in.api.ts";

import ButtonComponent from "../../../../components/button/button.component.tsx";
import PasswordInputComponent from "../../../../components/password-input/password-input.component.tsx";
import FormTextInputComponent from "../../../../components/form-text-input/form-text-input.component.tsx";

import { ValidationErrors } from "../../../../dto/response.dto.ts";
import { SignInDto } from "../../../../dto/sign-in.dto.ts";

import styles from "../../styles/auth-form.module.css";

export default function SignInFormComponent(): ReactElement {
  const navigate = useNavigate();

  const [validationErrors, setValidationErrors] =
    useState<ValidationErrors<SignInDto>>();

  const mutation = useMutation({
    mutationFn: fetchSignInApi,
  });

  const formSubmitHandler = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const dto: SignInDto = {
      username: formData.get("username") as string,
      password: formData.get("password") as string,
    };

    mutation.mutate(dto, {
      onSuccess: (result) => {
        if ("error" in result) {
          setValidationErrors(result.validationErrors);
          toast.error(result.message);
        } else {
          toast.success(result.message);
          navigate("/dashboard");
        }
      },
    });
  };

  return (
    <div className={styles["auth-form"]}>
      <h1>Sign In!</h1>
      <form onSubmit={formSubmitHandler}>
        <FormTextInputComponent
          label="Username"
          name="username"
          errors={validationErrors?.username}
        />
        <PasswordInputComponent
          label="Password"
          name="password"
          autoComplete="current-password"
          errors={validationErrors?.password}
        />
        <ButtonComponent>Sign In</ButtonComponent>
      </form>
      <div className={styles["change-form"]}>
        Haven't signed up yet? <Link to="/auth/sign-up">Sign up</Link>.
      </div>
    </div>
  );
}
