import { Inter } from 'next/font/google'

// My components'
import Layout from '../components/layout/Layout'
import Main from '../components/layout/Main'

import CardList from '../components/Posts/ProjectCards'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <>
      <Layout>
        {
          <>
            <Main>{ }</Main>
            <CardList  >{""}</CardList>
          </>
        }
      </Layout>


    </>
  )
}
