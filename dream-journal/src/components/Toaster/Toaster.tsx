import { ReactElement, useContext } from "react";
import { Bounce, ToastContainer, ToastContainerProps } from "react-toastify";
import { useTranslation } from "react-i18next";

import { ThemeContext } from "../../context/theme-context.ts";

type Props = Partial<ToastContainerProps>;

export default function Toaster(props: Props): ReactElement {
  const { theme } = useContext(ThemeContext);

  const { i18n } = useTranslation();

  return (
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={false}
      rtl={i18n.dir() === "rtl"}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme={theme}
      transition={Bounce}
      {...props}
    />
  );
}
