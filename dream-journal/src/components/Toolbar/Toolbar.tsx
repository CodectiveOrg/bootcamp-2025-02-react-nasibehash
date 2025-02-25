import { useContext } from "react";

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
  const { setSelected, setFilteredDreams } = useContext(DreamsContext);

  const selectChangeHandler = (e: any) => {
    if (e.target.value == "all") {
      setFilteredDreams(null);
    } else {
      setSelected(e.target.value);
    }
  };

  return (
    <div className={styles.toolbar}>
      <TextInput
        className={styles.input}
        placeholder="Search dream..."
        suffixIcon={<MingcuteSearchLine />}
      />
      <Select
        options={[
          { value: "all", label: "All" },
          { value: "good", label: "Good" },
          { value: "bad", label: "Bad" },
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
