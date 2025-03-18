import { ReactElement } from "react";

import { useNavigate } from "react-router";

import { useMutation } from "@tanstack/react-query";

import { toast } from "react-toastify";

import { fetchSignOutApi } from "../../api/fetch-sign-out.api.ts";

import ButtonComponent from "../../components/button/button.component.tsx";

import styles from "./dashboard.module.css";

function DashboardPage(): ReactElement {
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: fetchSignOutApi,
  });

  const signOutButtonClickHandler = (): void => {
    mutation.mutate(undefined, {
      onSuccess: (result) => {
        if (result.statusCode !== 200) {
          toast.error(result.message);
        } else {
          toast.success(result.message);
          navigate("/");
        }
      },
    });
  };

  return (
    <div className={styles.dashboard}>
      <h1>Dashboard</h1>
      <ButtonComponent color="danger" onClick={signOutButtonClickHandler}>
        Sign Out
      </ButtonComponent>
    </div>
  );
}

export default DashboardPage;
