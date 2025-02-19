import TextInput from '../TextInput/TextInput.tsx';
import MingcuteSearchLine from '../../icons/MingcuteSearchLine.tsx';

import styles from './Toolbar.module.css';
export default function Toolbar(){
return(
    <div className="toolbar">
      <TextInput placeholder="Search note..." suffixIcon={<MingcuteSearchLine />} />
      <select>
        <option value="All">All</option>
        <option value="good">good</option>
        <option value="bad">bad</option>
      </select>
      <button>.</button>
    </div>
)
}