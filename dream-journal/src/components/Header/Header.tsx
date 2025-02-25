import { useTranslation } from "react-i18next";

import styles from "./Header.module.css";

export default function Header() {
  const { t } = useTranslation();
  return (
    <header className={styles.header}>
      <h1>{t("title")}</h1>
    </header>
  );
}
