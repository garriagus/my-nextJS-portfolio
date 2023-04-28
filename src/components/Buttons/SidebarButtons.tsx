import React from "react";
import { useState } from "react";
import Link from "next/link";
import { Inter } from "next/font/google";

import styles from "./Buttons.module.css";

import HoverContainer from "../Sidebar/HoverContainer";
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

    const media_urls = [
        {
            id: 1,
            title: 'Video One',
            video_url:
                '',
        },
    ]


    const handleMouseEnter1 = (e: { target: any; }) => {
        const button = e.target;
        document.body.style.backgroundColor = 'blue';
        //document.body.id = 'prueba';
        const contenido = document.getElementById('pruebaa');
        contenido?.setAttribute('id','styles.pruebaa')
        const intro = window.document;
        console.log(contenido)
       // intro.getElementById('prueba') = 'red';
     

    }
    const handleMouseLeave1 = (e: { target: any; }) => {
        const button = e.target;

        const div = document.querySelector('#prueba');
 
        //document.body.style.backgroundColor = 'white';
        //console.log({div})
    }


    return (
        <>

            <div id="pruebaa" className={styles["sidsebar"]}>
                <nav id={styles["btn" + children]} onMouseEnter={handleMouseEnter1}
                    onMouseLeave={handleMouseLeave1} className={styles["siadebar"]}>
                    <div id={styles["btn" + children]} className={styles["sidsebar"]}  >
                        <button className={styles["sidebar-button"]} id={styles["p" + children]}
                        >{children}</button>
                    </div>
                </nav>
            </div>

        </>


    );
}