import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Image from 'next/image'

import { useState } from "react";
// My components
import Head from '../components/Head/Head'
import Navbar from '../components/Navbar/Navbar'
import Sidebar from '../components/Sidebar/Sidebar'
import Layout from '../components/layout/Layout'
import Main from '../components/layout/Main'

import PersonalCard from "../components/Cards/PersonalCard";
import CardList from '../components/Posts/ProjectCards'

import Footer from "../components/Footer/Footer";
import Post from "../components/Posts/Post";
import { TbH1 } from 'react-icons/tb'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <>
      <Layout>
        {
          <>
<h1>asd</h1>


            <PersonalCard></PersonalCard>
            
            <CardList  >{""}</CardList>
            
          </>
        }
      </Layout>


    </>
  )
}
