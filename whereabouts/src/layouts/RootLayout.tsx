import { ReactElement } from "react";

import styles from "./RootLayout.module.css";
import Header from "../components/Header/Header.tsx";
import Footer from "../components/Footer/Footer.tsx";
import { Outlet } from "react-router";

export default function (): ReactElement {
  return (
    <div className={styles["root-layout"]}>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
