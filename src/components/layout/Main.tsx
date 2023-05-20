import React, { ReactNode } from "react";
import styles from "./Main.module.css";
// import custom components
import AboutMe from "../Posts/About";
import NavMenu from "../Sidebar/NavigationMenu";
import Header from "../Posts/Header";
import Welcome from "../Posts/Welcome";
import Image from "next/image";
import Background from "../../../public/PaHE2U.webp";
import Projects from "../Posts/Projects";
import Experience from "../Posts/Experience";
import Contact from "../Posts/Contact";

import CardList from "../Posts/ProjectCards";
import { FaBeer, FaJava, FaArrowRight } from "react-icons/fa";
import { AiFillGithub, AiOutlineUser, AiFillLinkedin } from "react-icons/ai";
import { BiBody, BiCodeAlt, BiSend } from "react-icons/bi";
import { TbBrandNextjs } from "react-icons/tb";
import { BsFillHouseDoorFill, BsTwitter } from "react-icons/bs";
// import custom components

export default function Main({ children, ...props }) {
  //styles the main html tag

  return (
    <>
      <div className={styles.container}>
        {/* <!--=============== NAVIGATION MENU ===============--> */}
        <NavMenu></NavMenu>
        {/* <!--=============== MAIN "WINDOW" ===============--> */}
        <div className={styles.portfolio}>
          {/* <!--=============== HEADER SECTION ===============--> */}
          <Header></Header>
          {/* <!--=============== CONTENT SECTION ===============--> */}
          <div className={styles.content}>
            {/* <!--=============== HOME ===============--> */}
            <Welcome></Welcome>
            {/* <!--=============== ABOUT ME ===============--> */}
            <AboutMe>{ }</AboutMe>
            {/*!--=============== PROJECTS ===============-->*/}
            <Projects>{ }</Projects>
            {/*!--=============== EXPERIENCE ===============--*/}
            <Experience>{ }</Experience>
            {/* --=============== CONTACT ===============-- */}
            <Contact>{ }</Contact>
          </div>
        </div>
      </div>
    </>
  );
}