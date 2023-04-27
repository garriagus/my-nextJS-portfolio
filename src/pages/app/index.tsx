import React from "react";
import { useState } from "react";
import Link from "next/link";
import { Inter } from "next/font/google";

import Sidebar from '../../components/Sidebar/Sidebar'


import { FaHeart } from "react-icons/fa";

import HoverContainer from '../../components/Sidebar/HoverContainer'

import Head from 'next/head'
import styles from "../../components/Sidebar/Sidebar.module.css";

const inter = Inter({ subsets: ["latin"] });
const navItems: { label: string; page?: string; link?: string }[] = [
  { label: "Home", page: "/" },
  { label: "Blog", page: "/blog" },
  { label: "Contact", page: "/contact" },
  { label: "Source Code", link: "https://github.com/ijjk/notion-blog" },
];

export default function index() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  return (
    <>
      <Head>
        <title>My page title</title>
        <meta property="og:title" content="My page title" key="title" />
        <meta property="og:url" content="https://codepen.io/hrtzt/details/NPZKRN" />
        <meta property="og:image" content="https://pbs.twimg.com/media/CCNJN_XUMAAJSzU.jpg:large" />
      </Head>
    </>

  );
}