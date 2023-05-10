import React from "react";
import { useState } from "react";
import Link from "next/link";
import { Inter } from "next/font/google";

import styles from "./Sidebar.module.css";

import SidebarButton from "../Pruebas/SidebarButtons";

import PersonalCard from "../Posts/PersonalCard";
import Button from "../Pruebas/Button";
import Post from "../Posts/PrimerPost";
import { FaBeer, FaArrowRight, FaJava } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";

interface Props {
  border: string;
  color: string;
  children?: React.ReactNode;
  height: string;
  onClick: () => void;
  radius: string;
  width: string;
}

const inter = Inter({ subsets: ["latin"] });
const navItems: { label: string; page?: string; link?: string }[] = [
  { label: "Home", page: "/" },
  { label: "Blog", page: "/blog" },
  { label: "Contact", page: "/contact" },
  { label: "Source Code", link: "https://github.com/ijjk/notion-blog" },
];

export default function Sidebar({ children }) {
  const [isNavExpanded, setIsNavExpanded] = useState(false);


  const [stateVariable, setStateVariable] = useState(0);

  const handleMouseEnter = (e) => {
    const button = e.target;
    document.body.style.backgroundColor = "blue";
    document.body.style.display = "block";
    //document.body.id = 'prueba';
    // var contenido = document.getElementById(styles[props.id]);
    //console.log(contenido);
    return;
  };
  const handleMouseLeave = (e) => {
    const button = e.target;
    // const div = document.querySelector('#prueba');

    //document.body.style.display = "block";
    //console.log({ contenido });
  };
  const handleClick = () => {
    // The DOM element is also accessible here.
    console.log(children);
  };

  const button = (e) => {
    var numbers = [1, 5, 10, 15];
    var button = numbers.map(function (x) {
      return x * 2;
    });

    const pulldata = (data) => {
      console.log(data); // LOGS DATA FROM CHILD (My name is Dean Winchester... &)
      return 2;
    };
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.sidebar}>
        <Button>{"aa"}</Button>


        </div>
      </div>

    </>
  );
}
