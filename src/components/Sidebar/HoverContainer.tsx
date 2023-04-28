import React from "react";
import { useState } from "react";
import Link from "next/link";
import { Inter } from "next/font/google";

import styles from "./Sidebar.module.css";
import Button from "../Buttons/SidebarButtons";
import { FaHeart } from "react-icons/fa";


export default function HoverContainer({ children }) {
    const [isNavExpanded, setIsNavExpanded] = useState(false);
    return (
        <>
            <div className={styles.container}>
               
            </div >
        </>
    );
}