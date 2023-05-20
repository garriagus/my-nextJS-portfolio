import React, { ReactNode } from "react";
import styles from "./NavMenu.module.css";

import { AiFillGithub, AiOutlineUser, AiFillLinkedin } from "react-icons/ai";
import { BiBody, BiCodeAlt, BiSend } from "react-icons/bi";
import { BsFillHouseDoorFill, BsTwitter } from "react-icons/bs";


export default function NavMenu() {
  return (
    <>
      <div className={styles.menu}>
        <a href="#welcome-section" className={styles["menu-icon"]}>
          <BsFillHouseDoorFill fontSize="2em" />
        </a>
        <a href="#about" className={styles["menu-icon"]}>
          <AiOutlineUser fontSize="2em" ></AiOutlineUser>
        </a>
        <a href="#projects" className={styles["menu-icon"]}>
          <BiCodeAlt fontSize="2em"></BiCodeAlt>
        </a>
        <a href="#experience" className={styles["menu-icon"]}>
          <AiFillGithub fontSize="2em"></AiFillGithub>
        </a>
        <a href="#contact" className={styles["menu-icon"]}>
          <BiSend fontSize="2em"></BiSend>
        </a>
      </div>
    </>
  );
}
