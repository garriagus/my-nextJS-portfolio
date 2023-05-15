import React, { ReactNode } from "react";
import Navbar from "../Navbar/Navbar";
// import custom components
import SideBar from "../Sidebar/Sidebar";
import Footer from "../Footer/Footer";
import Head from "next/head";
import Image from 'next/image'

import Background from '../../../public/coding.avif'
import next from "next/types";
import NavBar from "../Navbar/Navbar";
// import custom components


export default function Layout({ children }) {
  //styles the main html tag

  return (
    <>
      <div >
        
      <NavBar></NavBar>
        <div className="main">
         
        <Image
          src={Background}
          alt="Picture of the author"
          title=""
          width="100"
          height="100"
          layout="responsive"
          objectFit="contain" />

        </div>
      </div>
    </>
  );
}
