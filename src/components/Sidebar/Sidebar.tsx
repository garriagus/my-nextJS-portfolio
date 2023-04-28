import React from "react";
import { useState } from "react";
import Link from "next/link";
import { Inter } from "next/font/google";

import styles from "./Sidebar.module.css";

import SidebarButton from "../Buttons/SidebarButtons";
import Button from "../Buttons/Button";
import Post from "../Posts/PrimerPost";

interface Props {
  border: string;
  color: string;
  children?: React.ReactNode;
  height: string;
  onClick: () => void;
  radius: string;
  width: string;
}

const inter = Inter({ subsets: ["latin"] });
const navItems: { label: string; page?: string; link?: string }[] = [
  { label: "Home", page: "/" },
  { label: "Blog", page: "/blog" },
  { label: "Contact", page: "/contact" },
  { label: "Source Code", link: "https://github.com/ijjk/notion-blog" },
];

export default function Sidebar({ children }) {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  /* ejemplos de estados hoocks
        type estilos = {
            display: 'none'
        }
        const [user, setUser]=useState<estilos>({display: 'block'})*/

  /*always update state variable value by calling setStateVariable() method. 
    updating state variable value is asynchronous. You do need to depend on useEffect()
    or useCallback() to get the most updated value of a state variable. */

  /*// with no dependency

        let count = 0;

        const [stateCount, setStateCount] = useState(0);
        

        useEffect(() => {

        console.log('Execute all time, as there are no dependency');

        count = 0;

        console.log('class Variable (no dependency): ', count);

        console.log('state Variable (no dependency): ', stateCount);

}, []);*/

  // with dependency

  /* useEffect(() => {
    
       
        
        // This code will execute everytime - when we made any change on state variable
        
        
        
        console.log('state variable has updated');
        
        console.log('state Variable (with state variable dependency): ', stateCount);
        
        }, [stateCount]); */

  const [stateVariable, setStateVariable] = useState(0);

  const handleMouseEnter = (e) => {
    const button = e.target;
    document.body.style.backgroundColor = "blue";
    document.body.style.display = "block";
    //document.body.id = 'prueba';
    const contenido = document.getElementById("prueba" + { children });

    //console.log("j");
  };
  const handleMouseLeave = (e) => {
    const button = e.target;
    // const div = document.querySelector('#prueba');
    const contenido = document.getElementById("sidebar-content");
    document.body.style.display = "block";
    //console.log({ contenido });
  };

  return (
    <>
      <div className={styles.navigation}>
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={styles.page}
      >
        <Button id="p1">{"a"}</Button>
        <Button id="p2">{"b"}</Button>
       
      </div>

      <div className={styles["sidebar-content"]}>
        <h1 id={styles.c1}>Contenido de la página</h1>
        <Post i="p4">{"aaa"}</Post>
      </div>      
      </div>
    </>
  );
}
