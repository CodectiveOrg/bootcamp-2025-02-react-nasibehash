import { ReactElement } from "react";

import styles from "./Footer.module.css";

export default function Footer(): ReactElement {
  const year = new Date().getFullYear();

  return (
    <div className={styles.footer}>
      <footer className={styles.footer}>
        <span>تمامی حقوق مادی و معنوی این وب‌سایت متعلق به من می‌باشد.</span>
        <span>Copyright © {year}</span>
      </footer>
    </div>
  );
}
