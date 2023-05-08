
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { FaBeer, FaArrowRight, FaJava } from 'react-icons/fa';
import { AiFillGithub } from "react-icons/ai";


// My components
import Head from '../../components/Head/Head'
import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import PersonalCard from '../../components/Posts/PersonalCard'
import Post from '../../components/Posts/PrimerPost'
import Button from '../../components/Pruebas/Button'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
  <Sidebar>{}</Sidebar>
    </>
  )
}
