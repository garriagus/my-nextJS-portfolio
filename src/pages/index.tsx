import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Image from 'next/image'

// My components
import Head from '../components/Head/Head'
import Navbar from '../components/Navbar/Navbar'
import Sidebar from '../components/Sidebar/Sidebar'

import Background from '../../public/mountains.jpg'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head></Head>
      <Image
          src={Background}
          layout='fill'   
          alt="Picture of the author"          >

        </Image>        
     
          <Sidebar>{ }</Sidebar>

    
    </>
  )
}
