import { Dream } from "../../types/dream.ts";
import styles from "./Result.module.css";

const dreams: Dream[] = [
  {
    id: "1",
    title: "School 1",
    description: "Lorem",
    date: new Date(2025, 0, 14),
    vibe: "good",
  },
  {
    id: "2",
    title: "School 2",
    description: "Lorem",
    date: new Date(2025, 0, 17),
    vibe: "bad",
  },
  {
    id: "3",
    title: "School 3",
    description: "Lorem",
    date: new Date(2025, 0, 21),
    vibe: "good",
  },
];

export default function Result() {
  return (
    <ul className="result">
      {dreams.map((dream) => (
        <li key={dream.id}>{dream.title}</li>
      ))}
    </ul>
  );
}
