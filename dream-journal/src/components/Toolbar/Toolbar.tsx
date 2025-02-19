import TextInput from "../TextInput/TextInput.tsx";
import Select from "../Select/Select.tsx";

import MingcuteSearchLine from "../../icons/MingcuteSearchLine.tsx";

import styles from "./Toolbar.module.css";

export default function Toolbar() {
  return (
    <div className="toolbar">
      <TextInput
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
      <button>.</button>
    </div>
  );
}
