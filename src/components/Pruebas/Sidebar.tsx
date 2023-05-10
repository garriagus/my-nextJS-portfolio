import React from "react";
import { useState } from "react";
import Link from "next/link";
import { Inter } from "next/font/google";

import styles from "./Sidebar.module.css";

import Button from "../Pruebas/Button";
import PersonalCard from './Posts/PersonalCard'

import Post from "./Posts/PrimerPost";
import { FaBeer, FaArrowRight, FaJava } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";

export default function Sidebar({ children }) {
  const [showCard, setShowCard] = useState(false);

  const handleMouseOver = () => {
    const contenido = document.getElementById("b1");
    console.log(contenido)
    setShowCard(false);
  };

  const handleMouseOut = () => {
    setShowCard(false);
  };
  {/*    */ }
  return (
    <>
      <div className={styles.parent}>
        <div id={styles.b1} className={styles.button}>
          <div id="b1">
            <Button id="b1">
              <PersonalCard id={styles["id"]}>{ }</PersonalCard>
            </Button>
          </div>
          <Button id="b2">
            <PersonalCard id={styles["id"]}>{ }</PersonalCard>
          </Button>
          <Button id="b3">
            <PersonalCard id={styles["id"]}>{ }</PersonalCard>
          </Button>
          <Button id="b4">
            <PersonalCard id={styles["id"]}>{ }</PersonalCard>
          </Button>
        </div>

      </div>
    </>
  );
}
