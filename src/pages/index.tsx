
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

// My components
import Head from '../components/Head/Head'
import Navbar from '../components/Navbar/Navbar'
import PostContainer from '../components/Posts/PostContainer'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head></Head>
      <div className={styles.background} style={{
        backgroundImage: `url("https://upload.wikimedia.org/wikipedia/commons/e/e0/Grass_at_a_lawn_with_morning_dew_02.jpg")`,
        height: '100vh',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}>
        <main >
          <Navbar></Navbar>
          <PostContainer></PostContainer>
        </main></div>
    </>
  )
}
