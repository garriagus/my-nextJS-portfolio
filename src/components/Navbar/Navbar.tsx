import React from "react";
import { useState } from "react";
import Link from "next/link";
import { Inter } from "next/font/google";

import styles from "./Nav.module.css";

const inter = Inter({ subsets: ["latin"] });
const navItems: { label: string; page?: string; link?: string }[] = [
  { label: "Home", page: "/" },
  { label: "Blog", page: "/blog" },
  { label: "Contact", page: "/contact" },
  { label: "Source Code", link: "https://github.com/ijjk/notion-blog" },
];

export default function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  return (
    <nav className={styles["navigation"]}>
      <div className={styles["brand-name"]}>
        <Link href={"/"}>@garriagus</Link>
      </div>
      <div className={styles["brand-name"]}>
        <button
          className={styles["hamburger"]}
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        >
          {/* icon from Heroicons.com */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="white"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div
        className={styles[isNavExpanded ? "navigation-menu-expanded" : "navigation-menu"
        ]}
      >
        <div >
        <ul>
          <li>
            <Link href="/home"> Home</Link>
          </li>
          <li>
            <Link href="/perfil">Sobre mi</Link>
          </li>
          <li>
            <Link href="/contact">Contacto</Link>
          </li>
        </ul>
        </div>
      </div>
      </div>
     
    </nav>
  );
}
