import React, { ReactNode } from "react";
import Navbar from "../Navbar/Navbar";
import styles from "./About.module.css";
// import custom components
import SideBar from "../Sidebar/Sidebar";
import NavMenu from "../Sidebar/NavigationMenu";
import Image from "next/image";
import Background from "../../../public/PaHE2U.webp";
import Project1 from "../../../public/abstract.jpg";
import Project2 from "../../../public/fondo.jpeg";
import Project3 from "../../../public/layout.jpg";
import Project4 from "../../../public/midjourney3.jpg";
import next from "next/types";
import NavBar from "../Navbar/Navbar";
import PersonalCard from "../Cards/PersonalCard";
import CardList from "../Posts/ProjectCards";
import { FaBeer, FaJava, FaArrowRight } from "react-icons/fa";
import { AiFillGithub, AiOutlineUser, AiFillLinkedin } from "react-icons/ai";
import { BiBody, BiCodeAlt, BiSend } from "react-icons/bi";
import { TbBrandNextjs } from "react-icons/tb";
import { BsFillHouseDoorFill, BsTwitter } from "react-icons/bs";
// import custom components

export default function About({ children, ...props }) {
  //styles the main html tag

  return (
    <>
      <div className={`${styles["content-card"]}`}>
        <h1 id={styles.h1}>Sobre mi</h1>
        <div className={`${styles["about-item"]} ${styles["about-me"]}`}>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis non
            dolore facere reiciendis iusto nemo tempore laboriosam laborum fugit
            dolorum totam incidunt tempora laudantium obcaecati natus sit,
            aspernatur consectetur! Voluptates?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
            consectetur quos fugiat fugit! Officiis, temporibus.
          </p>
        </div>
        <div className={styles["col-2"]}>
          <div className={`${styles["about-item"]}`}>
            <h1 id={styles.h1}>Skills</h1>
            <span className={`${styles.skill}`}>HTML</span>
            <span className={`${styles.skill}`}>CSS</span>
            <span className={`${styles.skill}`}>JavaScript</span>
            <span className={`${styles.skill}`}>Node.js</span>
            <span className={`${styles.skill}`}>React</span>
            <span className={`${styles.skill}`}>SQL</span>
            <span className={`${styles.skill}`}>Git</span>
            <span className={`${styles.skill}`}>API</span>
            <span className={`${styles.skill}`}>Unix/Linux</span>
            <span className={`${styles.skill}`}>Jira</span>
            <span className={`${styles.skill}`}>Confluence</span>
            <span className={`${styles.skill}`}>Figma</span>
          </div>
          <div className={`${styles["about-item"]} ${styles["languages"]}`}>
            <h1 id={styles.h1}>Languages</h1>
            <div className={styles.language}>
              <p>Español</p>
              <span className={styles.bar}>
                <span className={styles.polish}></span>
              </span>
            </div>
            <div className={styles.language}>
              <p>Ingles</p>
              <span className={styles.bar}>
                <span className={styles.english}></span>
              </span>
            </div>
            <div className={styles.language}>
              <p>Italiano</p>
              <span className={styles.bar}>
                <span className={styles.french}></span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
