import { ReactElement, useState } from "react";
import { Link, useNavigate } from "react-router";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

import { Controller, SubmitHandler, useForm } from "react-hook-form";

import FormTextInputComponent from "../../../../components/form-text-input/form-text-input.component.tsx";
import PasswordInputComponent from "../../../../components/password-input/password-input.component.tsx";
import ButtonComponent from "../../../../components/button/button.component.tsx";

import { SignInDto } from "../../../../dto/sign-in.dto.ts";
import { ValidationErrors } from "../../../../dto/response.dto.ts";
import { SignUpDto } from "../../../../dto/sign-up.dto.ts";

import { fetchSignUpApi } from "../../../../api/fetch-sign-up.api.ts";

import styles from "../../styles/auth-form.module.css";

export default function SignUpFormComponent(): ReactElement {
  const navigate = useNavigate();

  const [serverErrors, setServerErrors] =
    useState<ValidationErrors<SignUpDto>>();

  const mutation = useMutation({
    mutationFn: fetchSignUpApi,
  });

  const {
    control,
    handleSubmit,
    formState: { errors: clientErrors },
  } = useForm<SignInDto>({
    defaultValues: {
      username: "",
      password: "",
    },
  });
  const formSubmitHandler: SubmitHandler<SignInDto> = (data): void => {
    mutation.mutate(data, {
      onSuccess: (result) => {
        if ("error" in result) {
          setServerErrors(result.validationErrors);
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
      <h1>Sign Up!</h1>
      <form onSubmit={handleSubmit(formSubmitHandler)}>
        <Controller
          control={control}
          name="username"
          rules={{
            required: { value: true, message: "Username is required." },
            minLength: {
              value: 3,
              message: "Username must be longer than or equal to 3 characters",
            },
            maxLength: {
              value: 16,
              message:
                "Username must be shorter than or equal to 16 characters",
            },
          }}
          render={({ field }) => (
            <FormTextInputComponent
              label="Username"
              clientErrors={clientErrors?.username}
              serverErrors={serverErrors?.username}
              {...field}
            />
          )}
        />
        <Controller
          control={control}
          name="password"
          rules={{
            required: { value: true, message: "Password is required." },
            minLength: {
              value: 5,
              message: "Password must be longer than or equal to 3 characters",
            },
            maxLength: {
              value: 32,
              message:
                "Password must be shorter than or equal to 16 characters",
            },
          }}
          render={({ field }) => (
            <PasswordInputComponent
              label="Password"
              clientErrors={clientErrors?.password}
              autoComplete="new-password"
              serverErrors={serverErrors?.password}
              {...field}
            />
          )}
        />

        <ButtonComponent>Sign Up</ButtonComponent>
      </form>
      <div className={styles["change-form"]}>
        Already have an account? <Link to="/auth/sign-in">Sign in</Link>.
      </div>
    </div>
  );
}
