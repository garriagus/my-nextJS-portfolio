import React, { ReactNode } from "react";
import styles from "./NavigationMenu.module.css";

import { FaBeer, FaJava, FaArrowRight } from "react-icons/fa";
import { AiFillGithub, AiOutlineUser, AiFillLinkedin } from "react-icons/ai";
import { BiBody, BiCodeAlt, BiSend } from "react-icons/bi";
import { TbBrandNextjs } from "react-icons/tb";
import { BsFillHouseDoorFill, BsTwitter } from "react-icons/bs";

export default function NavMenu() {
  return (
    <>
      <div className={styles.menu}>
        <a
          href="#welcome-section"
          className={`${styles["menu-icon"]} ${styles["fa-solid"]}`}
        >
          <BsFillHouseDoorFill fontSize="2em"></BsFillHouseDoorFill>
        </a>
        <a
          href="#about"
          className={`${styles["menu-icon"]} ${styles["fa-solid"]} ${styles["fa-user"]}`}
        >
          <AiOutlineUser fontSize="2em"></AiOutlineUser>
        </a>
        <a
          href="#projects"
          className={`${styles["menu-icon"]} ${styles["fa-solid"]} ${styles["fa-code"]}`}
        >
          <BiCodeAlt fontSize="2em"></BiCodeAlt>
        </a>
        <a
          href="#experience"
          className={`${styles["menu-icon"]} ${styles["fa-solid"]} ${styles["fa-briefcase"]}`}
        >
          <AiFillGithub fontSize="2em"></AiFillGithub>
        </a>
        <a
          href="#contact"
          className={`${styles["menu-icon"]} ${styles["fa-solid"]} ${styles["fa-envelope"]}`}
        >
          <BiSend fontSize="2em"></BiSend>
        </a>
      </div>
    </>
  );
}
