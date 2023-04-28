import React from "react";
import { useState } from "react";
import Link from "next/link";
import { Inter } from "next/font/google";

import styles from "./Sidebar.module.css";


import SidebarButton from "../Buttons/SidebarButtons";


const inter = Inter({ subsets: ["latin"] });
const navItems: { label: string; page?: string; link?: string }[] = [
    { label: "Home", page: "/" },
    { label: "Blog", page: "/blog" },
    { label: "Contact", page: "/contact" },
    { label: "Source Code", link: "https://github.com/ijjk/notion-blog" },
];

export default function Sidebar({ children }) {
    const [isNavExpanded, setIsNavExpanded] = useState(false);

    const handleMouseEnter = (e) => {
        const button = e.target;
   ;
        document.body.style.backgroundColor = 'blue';
        //document.body.id = 'prueba';
        const contenido = document.getElementById("prueba"+{children});
        const intro = window.document;
       // intro.getElementById('prueba') = 'red';
       // console.log(contenido)

    }
    const handleMouseLeave = (e) => {
        const button = e.target;

        // const div = document.querySelector('#prueba');
        const contenido = document.getElementById("prueba");

        document.body.style.backgroundColor = 'green';
      //  console.log({ children })
    }

    return (
        <>
            <div className={styles.wrapper}>
                <div  onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave} className={styles.sidebar}>
                    <SidebarButton  >{1}</SidebarButton>
                    <SidebarButton>{2}</SidebarButton>
                    <SidebarButton>{3}</SidebarButton>
                    <SidebarButton>{4}</SidebarButton>
                    <SidebarButton>{5}</SidebarButton>
                </div>
                <div className={styles["sidebar-content"]}>
                    <h1 id={styles.c1}>Contenido de la página</h1>
                    <p>Aquí va el contenido de la página que se muestra al lado derecho de los botones.</p>
                </div>
            </div>




        </>
    );
}