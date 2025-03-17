import { FormEvent, ReactElement, useState } from "react";
import { Link, useNavigate } from "react-router";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

import FormTextInputComponent from "../../../components/form-text-input/form-text-input.component.tsx";
import PasswordInputComponent from "../../../components/password-input/password-input.component.tsx";
import ButtonComponent from "../../../components/button/button.component.tsx";

import { ValidationErrors } from "../../../dto/response.dto.ts";
import { SignUpDto } from "../../../dto/sign-up.dto.ts";

import { fetchSignUpApi } from "../../../api/fetch-sign-up.api.ts";

import styles from "./sign-up-form.module.css";

export default function SignUpFormComponent(): ReactElement {
  const navigate = useNavigate();

  const [validationErrors, setValidationErrors] =
    useState<ValidationErrors<SignUpDto>>();

  const mutation = useMutation({
    mutationFn: fetchSignUpApi,
  });

  const formSubmitHandler = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const dto: SignUpDto = {
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
    <div className={styles["sign-up-form"]}>
      <h1>Sign Up!</h1>
      <form onSubmit={formSubmitHandler}>
        <FormTextInputComponent
          label="Username"
          name="username"
          errors={validationErrors?.username}
        />
        <PasswordInputComponent
          label="Password"
          name="password"
          autoComplete="new-password"
          errors={validationErrors?.password}
        />
        <ButtonComponent>Sign Up</ButtonComponent>
      </form>
      <div className={styles["change-form"]}>
        Already have an account? <Link to="/auth/sign-in">Sign in</Link>.
      </div>
    </div>
  );
}
