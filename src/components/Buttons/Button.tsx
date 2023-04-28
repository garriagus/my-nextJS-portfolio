import React from "react";
import { useState } from "react";
import Link from "next/link";
import { Inter } from "next/font/google";

import styles from "./Buttons.module.css";

import HoverContainer from "../Sidebar/HoverContainer";
import { FaHeart } from "react-icons/fa";
import { on } from "events";

const inter = Inter({ subsets: ["latin"] });

const navItems: { label: string; page?: string; link?: string }[] = [
  { label: "Home", page: "/" },
  { label: "Blog", page: "/blog" },
  { label: "Contact", page: "/contact" },
  { label: "Source Code", link: "https://github.com/garriagus/" },
];

export default function Button({ children, ...props }) {
  const handleMouseEnter = (e) => {
    //const button = e.target;
    //document.body.style.backgroundColor = "blue";
    //document.body.style.display = "block";
    //document.body.id = 'prueba';
    //const contenido = document.getElementById(children);
    console.log("soy el buton" + props.id);
  };

  const handleMouseLeave = (e) => {
    const button = e.target;
    // const div = document.querySelector('#prueba');
    const contenido = document.getElementById("sidebar-content");
    document.body.style.display = "block";
    //console.log({ contenido });
  };
  return (
    <>
      <div id={styles[props.id]} className={styles.ul}>
        <div className={styles.page}>
          <li
            id={styles[props.id]}
            className={styles.li}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {children}
          </li>
        </div>
      </div>
    </>
  );
}
