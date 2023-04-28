import React from "react";
import { useState } from "react";
import Link from "next/link";
import { Inter } from "next/font/google";

import Sidebar from '../../components/Sidebar/Sidebar'
import Post from '../../components/Posts/PrimerPost'

import SidebarButton from '../../components/Buttons/SidebarButtons'
import { FaHeart } from "react-icons/fa";

import HoverContainer from '../../components/Sidebar/HoverContainer'

import Head from 'next/head'
import styles from "../../components/Sidebar/Sidebar.module.css";


export default function index() {
  const styles = {
    display: "flex"
}

return (

  <>
    <Head>
      <title>My page title</title>
      <meta property="og:title" content="My page title" key="title" />
      <meta property="og:url" content="https://codepen.io/hrtzt/details/NPZKRN" />
      <meta property="og:image" content="https://pbs.twimg.com/media/CCNJN_XUMAAJSzU.jpg:large" />
    </Head>

    <main style={styles}>
        <section style={{ width: "1024px" }}>{}</section>
        {/*<Sidebar>{styles}</Sidebar>*/}
        <Post>{}</Post>
      </main>  
  
  </>

);
  }