import { useContext } from "react";
import { useTranslation } from "react-i18next";

import TextInput from "../TextInput/TextInput.tsx";
import Select from "../Select/Select.tsx";
import Button from "../Button/Button.tsx";
import LanguageButton from "../LanguageButton/LanguageButton.tsx";

import { ThemeContext } from "../../context/theme-context.ts";
import { DreamsContext } from "../../context/dreams-context.ts";

import MingcuteSearchLine from "../../icons/MingcuteSearchLine.tsx";
import MingcuteMoonLine from "../../icons/MingcuteMoonLine.tsx";
import { MingcuteSunLine } from "../../icons/MingcuteSunLine.tsx";

import styles from "./Toolbar.module.css";

export default function Toolbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { setSelected, search, setSearch } = useContext(DreamsContext);

  const { t } = useTranslation();
  const selectChangeHandler = (e: any) => {
    setSelected(e.target.value);
  };

  const serachChangeHandler = (e: any) => {
    setSearch(e.target.value);
  };

  return (
    <div className={styles.toolbar}>
      <TextInput
        className={styles.input}
        placeholder={t("toolbar.search.placeholder")}
        suffixIcon={<MingcuteSearchLine />}
        value={search}
        onChange={(e) => serachChangeHandler(e)}
      />
      <Select
        options={[
          { value: "all", label: t("dreams.form.vibe.all") },
          { value: "good", label: t("dreams.form.vibe.good") },
          { value: "bad", label: t("dreams.form.vibe.bad") },
        ]}
        onChange={selectChangeHandler}
      />
      <Button
        variant="solid"
        size="medium"
        shape="square"
        onClick={() => toggleTheme()}
      >
        {theme === "light" ? <MingcuteSunLine /> : <MingcuteMoonLine />}
      </Button>
      <LanguageButton />
    </div>
  );
}
