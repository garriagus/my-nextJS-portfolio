import React from "react";
import { useState } from "react";
import Link from "next/link";
import { Inter } from "next/font/google";

import styles from "./Sidebar.module.css";

import HoverContainer from "./HoverContainer";
import { FaHeart } from "react-icons/fa";


import Button from "./SidebarButtons";


const inter = Inter({ subsets: ["latin"] });
const navItems: { label: string; page?: string; link?: string }[] = [
    { label: "Home", page: "/" },
    { label: "Blog", page: "/blog" },
    { label: "Contact", page: "/contact" },
    { label: "Source Code", link: "https://github.com/ijjk/notion-blog" },
];

export default function Sidebar({ children }) {
    const [isNavExpanded, setIsNavExpanded] = useState(false);
    return (
        <>
            <nav className={styles["navigation"]}>

            </nav>
            <div className={styles.container}>
                <div className={styles["sidebar"]} >
                    <ul id={styles.btn1}>
                        <Button>{1}</Button>
                    </ul>
                </div>
            </div>

            <div className={styles["content-overlay"]}>  {/*MIS POSTEOS*/}
                <div className={styles["sidebar-content "]}>  {/*MIS POSTEOS*/}
                    <h1>estoy dentro de un div</h1>
                </div>
            </div>

      
            <div className={styles.show}>

                {/*POST 1*/}
                <div id={styles.t1}>
                    POST 1
                </div>
                {/*POST 2*/}
                <div id={styles.t2}>
                    POST 2
                </div>
                {/*POST 3*/}
                <div id={styles.t2}>
                    POST 3
                </div>
                {/*POST 4*/}
                <div id={styles.t2}>
                    POST 4
                </div>
            </div>

        </>
    );
}