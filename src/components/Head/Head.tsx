import React from "react";
import Head from "next/head";
import { useRouter } from 'next/router'

const name = "[garriagus]";

const Header = ({ titlePre = '' }) => {
  const { pathname } = useRouter()

  return (
    <Head>
      <title>{titlePre ? `${titlePre} |` : ''} My Portfolio | {name}</title>
      <meta
        name="description"
        content="An example Next.js site"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}

export default Header