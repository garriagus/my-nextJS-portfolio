import { Inter } from 'next/font/google'

// My components'

import Layout from '../components/layout/Layout'
import Portfolio from '../components/Portfolio/Portfolio'
import Welcome from '../components/Contenido/Welcome'
import About from '../components/Contenido/About'
import Projects from '../components/Contenido/Projects'
import Experience from '../components/Contenido/Experience'
import Contact from '../components/Contenido/Contact'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <>

      <Layout>
        {
          /* <!--=============== PORTFOLIO ===============--> */
          <Portfolio>
            {
              /* <!--=============== CONTENIDO ===============--> */
              <>
                <Welcome></Welcome>
                <About>{ }</About>
                <Projects>{ }</Projects>
                <Experience>{ }</Experience>
                <Contact>{ }</Contact>
              </>
              /* <!--=============== CONTENIDO ===============--> */
            }
          </Portfolio>
           /* <!--=============== PORTFOLIO ===============--> */
        }
      </Layout >
    </>
  )
}
