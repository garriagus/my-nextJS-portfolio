import React, { ReactNode } from "react";
import Navbar from "../Navbar/Navbar";
// import custom components
import SideBar from "../Sidebar/Sidebar";
import Footer from "../Footer/Footer";
import Head from "../Head/Head";
import Image from 'next/image'
import styles from './Layout.module.css';
import Background from '../../../public/violet.jpg'
import next from "next/types";
import NavBar from "../Navbar/Navbar";
import PersonalCard from "../Cards/PersonalCard";
import CardList from '../Posts/ProjectCards'
// import custom components


export default function Layout({ children, ...props }) {
  //styles the main html tag

  return (
    <>
      <Head />
      <Image
        src={Background}
        className={styles.imaged}
        alt="Picture of the author"
        quality={100}
        fill
      />
      <body className="container">
        <div className="header">
          <NavBar />
        </div>
        <div className="content">
          <div className="main">
            {children}
          </div>
        </div>
        <div className="footer">
        <Footer>{}</Footer>
        </div>
      </body>


    </>
  );
}
