import React from "react";
import Head from "next/head";
import { useRouter } from 'next/router'

const name = "[garriagus]";
const ogImageUrl = 'https://notion-blog.now.sh/og-image.png'

const Header = ({ titlePre = '' }) => {
  const { pathname } = useRouter()

  return (   
      <Head>
        <title>{titlePre ? `${titlePre} |` : ''} My Portfolio | {name}</title>
        <meta
          name="description"
          content="An example Next.js site using Notion for the blog"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        <meta name="og:title" content="My Notion Blog" />
        <meta property="og:image" content={ogImageUrl} />
        <meta name="twitter:site" content="@_ijjk" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={ogImageUrl} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
  )
}

export default Header