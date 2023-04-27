import React from "react";
import { useState } from "react";
import Link from "next/link";
import { Inter } from "next/font/google";

import styles from "./Sidebar.module.css";


import SidebarButton from "./SidebarButtons";


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
                <div className="slidebar"></div>
            <SidebarButton>{1}</SidebarButton>
            
            <SidebarButton>{2}</SidebarButton>
            </nav>
        

        </>
    );
}