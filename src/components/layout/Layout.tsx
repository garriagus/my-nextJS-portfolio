import styles from "./Main.module.css";
import Navbar from "../Navbar/Navbar";
// import custom components
import SideBar from "../Sidebar/Sidebar";
import Footer from "../Footer/Footer";
import Head from "../Head/Head";
import next from "next/types";
import NavBar from "../Navbar/Navbar";
import React, { ReactNode } from "react";


import CardList from "../Posts/ProjectCards";
import { FaBeer, FaJava, FaArrowRight } from "react-icons/fa";
import { AiFillGithub, AiOutlineUser, AiFillLinkedin } from "react-icons/ai";
import { BiBody, BiCodeAlt, BiSend } from "react-icons/bi";
import { TbBrandNextjs } from "react-icons/tb";
import { BsFillHouseDoorFill, BsTwitter } from "react-icons/bs";
// import custom components
// import custom components


export default function Layout({ children, ...props }) {
  //styles the main html tag

  return (

    <>
      <Head></Head>
      {children}
    </>
  );
}
