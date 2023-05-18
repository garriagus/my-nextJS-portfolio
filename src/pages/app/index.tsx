
import Image from 'next/image'
import { Inter } from 'next/font/google'
import React from "react";
import { useState } from "react";
import { FaBeer, FaJava } from 'react-icons/fa';
import { AiFillGithub, AiOutlineUser } from "react-icons/ai";
import { BiBody } from "react-icons/bi";
import { TbBrandNextjs } from "react-icons/tb";


// My components
import Head from '../../components/Head/Head'
import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import Button from '../../components/Buttons/Button'
import Card from "../../components/Cards/PersonalCard";
import Post from "../../components/Posts/Post";

import Footer from "../../components/Footer/Footer";

import PostContainer from "../../components/Posts/PostContainer";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>

<Post></Post>

    </>
  )
}
