import React, { ReactNode } from "react";
import Navbar from "../Navbar/Navbar";
// import custom components
import SideBar from "../Sidebar/Sidebar";
import Footer from "../Footer/Footer";
import Head from "../Head/Head";
import Image from 'next/image'

import Background from '../../../public/abstract.jpg'
import next from "next/types";
import NavBar from "../Navbar/Navbar";
import PersonalCard from "../Cards/PersonalCard";
// import custom components


export default function Layout({ children }) {
  //styles the main html tag

  return (
    <>

      <Head />
      <Image
        src={Background}
        alt="Picture of the author"
      
        layout="fill"
        objectFit="cover"
        quality={100}
        
      />
      <NavBar />
    
      
      <div className="center">
      <PersonalCard />

      </div>
      <section className="about" id="about">
    
        <a >Download CV</a>

      </section>
      <section className="skills" id="skills"></section>

    </>
  );
}
