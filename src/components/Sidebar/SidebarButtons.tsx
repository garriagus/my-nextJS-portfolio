import React from "react";
import { useState } from "react";
import Link from "next/link";
import { Inter } from "next/font/google";

import styles from "./Sidebar.module.css";

import HoverContainer from "./HoverContainer";
import { FaHeart } from "react-icons/fa";


const inter = Inter({ subsets: ["latin"] });
const navItems: { label: string; page?: string; link?: string }[] = [
    { label: "Home", page: "/" },
    { label: "Blog", page: "/blog" },
    { label: "Contact", page: "/contact" },
    { label: "Source Code", link: "https://github.com/ijjk/notion-blog" },
];

export default function Button({ children, ...props }) {
    const [isNavExpanded, setIsNavExpanded] = useState(false);
    return (
        <>
            <div id={styles.hide}>
                <div >
                    <h1>aaa</h1>
                </div>
                <div id={styles.btn1} className={styles["sidebar"]}  >
                    <button className={styles["sidebar-button"]} id={styles["p" + children]}>{children}</button>

                </div>

            </div>

        </>


    );
}