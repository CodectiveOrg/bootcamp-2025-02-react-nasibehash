import { ReactElement } from "react";
import { Link, NavLink } from "react-router";
import clsx from "clsx";

import styles from "./Header.module.css";

type NavItem = {
  title: string;
  href: string;
};

const navItems: NavItem[] = [
  { title: "خانه", href: "/" },
  { title: "درباره ما", href: "/about" },
  { title: "تماس با ما", href: "/contact" },
];
export default function (): ReactElement {
  return (
    <div className={styles.header}>
      <Link to="/" className="logo">
        Whereabouts
      </Link>
      <nav>
        <ul>
          {navItems.map((item) => (
            <li key={item.title}>
              <NavLink
                to={item.href}
                className={({ isActive }) => clsx(isActive && styles.active)}
              >
                {item.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
