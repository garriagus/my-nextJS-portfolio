import React, { ReactNode } from "react";
import styles from './Layout.module.css';
import Navbar from "../Navbar/Navbar";
// import custom components
import SideBar from "../Sidebar/Sidebar";
import Footer from "../Footer/Footer";
import Head from "next/head";

import next from "next/types";
import NavBar from "../Navbar/Navbar";
// import custom components


export default function Layout({ children }) {
  //styles the main html tag

  return (
    <>
    <div className={styles.container}>
    <NavBar></NavBar>
      <nav className={styles.header}>
      
        </nav>
      <div className={styles.content}>
          <SideBar>{}</SideBar>
      </div>
      <footer className={styles.footer}>Footer</footer>
    </div>
    </>
  );
}
