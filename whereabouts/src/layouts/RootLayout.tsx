import { ReactElement } from "react";
import { Outlet } from "react-router";

import Header from "../components/Header/Header.tsx";
import Footer from "../components/Footer/Footer.tsx";

import styles from "./RootLayout.module.css";

export default function RootLayout(): ReactElement {
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
