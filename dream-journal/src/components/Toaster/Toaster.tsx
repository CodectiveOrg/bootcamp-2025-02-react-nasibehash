import { ReactElement, useContext } from "react";
import { Bounce, ToastContainer, ToastContainerProps } from "react-toastify";

import { ThemeContext } from "../../context/theme-context.ts";

type Props = Partial<ToastContainerProps>;

export default function Toaster(props: Props): ReactElement {
  const { theme } = useContext(ThemeContext);
  return (
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme={theme}
      transition={Bounce}
      {...props}
    />
  );
}
