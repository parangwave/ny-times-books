"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../styles/header.module.css";

export default function Header() {
  const path = usePathname();

  return (
    <header className={styles.container}>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
            {path === "/" ? "📖" : ""}
          </li>
          <li>
            <Link href="/about">About us</Link>
            {path === "/about" ? "📖" : ""}
          </li>
        </ul>
      </nav>
    </header>
  );
}
