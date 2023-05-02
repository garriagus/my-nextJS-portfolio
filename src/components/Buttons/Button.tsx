import React from "react";
import { useState } from "react";
import Link from "next/link";
import { Inter } from "next/font/google";

import styles from "./Buttons.module.css";

import { FaBeer, FaArrowRight, FaJava } from 'react-icons/fa';
import { AiFillGithub } from "react-icons/ai";
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
    document.getElementById("post1")!.style.display = "block";
    //document.body.style.display = "block";
    //document.body.id = 'prueba';
    const contenido = document.getElementById(props.id);
    console.log(contenido);
  };

  const handleMouseLeave = (e) => {
    const button = e.target;
    // const div = document.querySelector('#prueba');
    const contenido = document.getElementById("sidebar-content");
    document.body.style.display = "block";
    //console.log("soy un boton " + { button });
  };
  return (
    <>
        <div  id={styles[props.id]} className={styles.div1}></div>
        <div id={styles[props.id]} className={styles.div2}></div>
        <div id={styles[props.id]} className={styles.div3}></div>
        <div id={styles[props.id]} className={styles.div4}>
        <li
            id={styles[props.id]}
            className={styles.div1}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {children}
          </li>
        </div>
    </>
  );
}


