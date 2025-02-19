import TextInput from "../TextInput/TextInput.tsx";
import Select from "../Select/Select.tsx";
import Button from "../Button/Button.tsx";

import MingcuteSearchLine from "../../icons/MingcuteSearchLine.tsx";
import MingcuteMoonLine from "../../icons/MingcuteMoonLine.tsx";

import styles from "./Toolbar.module.css";

export default function Toolbar() {
  return (
    <div className={styles.toolbar}>
      <TextInput
        className={styles.input}
        placeholder="Search note..."
        suffixIcon={<MingcuteSearchLine />}
      />
      <Select
        options={[
          { value: "all", label: "All" },
          { value: "good", label: "Good" },
          { value: "bad", label: "Bad" },
        ]}
      />
      <Button variant="solid" size="medium" shape="square">
        <MingcuteMoonLine />
      </Button>
    </div>
  );
}
