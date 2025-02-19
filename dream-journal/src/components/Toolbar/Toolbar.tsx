import TextInput from "../TextInput/TextInput.tsx";
import Select from "../Select/Select.tsx";
import Button from '../Button/Button.tsx';

import MingcuteSearchLine from "../../icons/MingcuteSearchLine.tsx";

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
      <Button variant="outlined" size="medium" shape="rectangle" ><MingcuteSearchLine /></Button>
    </div>
  );
}
