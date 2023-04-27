import React, { ReactNode } from "react";

import Navbar from "../components/Navbar/Navbar";
// import custom components
import SideBar from "../components/Sidebar/Sidebar";

import Head from "next/head";

import next from "next/types";
import NavBar from "../components/Navbar/Navbar";
// import custom components


export default function Layout({ children }) {
//styles the main html tag
  const styles = {
    display: "flex"
}
//const { data, error } = useSWR('/api/navigation', fetcher)
//if (error) return <div>Failed to load</div>
//if (!data) return <div>Loading...</div>

  return (
    <>
      <main style={styles}>
        <section style={{ width: "1024px" }}>{children}</section>
        <SideBar />
      </main>  
    </>
  );
}
