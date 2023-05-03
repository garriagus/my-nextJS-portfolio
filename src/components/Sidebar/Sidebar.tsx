import React from "react";
import { useState } from "react";
import Link from "next/link";
import { Inter } from "next/font/google";

import styles from "./Sidebar.module.css";

import SidebarButton from "../Buttons/SidebarButtons";

import PersonalCard from "../Posts/PersonalCard";
import Button from "../Buttons/Button";
import Post from "../Posts/PrimerPost";
import { FaBeer, FaArrowRight, FaJava } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";

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
   // var contenido = document.getElementById(styles[props.id]);
    //console.log(contenido);
    return;
  };
  const handleMouseLeave = (e) => {
    const button = e.target;
    // const div = document.querySelector('#prueba');

    //document.body.style.display = "block";
    //console.log({ contenido });
  };
  const handleClick = () => {
    // The DOM element is also accessible here.
    console.log(children);
  };

  const button = (e) => {
    var numbers = [1, 5, 10, 15];
    var button = numbers.map(function (x) {
      return x * 2;
    });

    const pulldata = (data) => {
      console.log(data); // LOGS DATA FROM CHILD (My name is Dean Winchester... &)
      return 2;
    };
  };

  return (
    <>
      <div id="parent" className={styles.parent}>
        <div className={styles.div1}> div1 Sidebar</div>
        <div className={styles.div2}
          >
          <Button id="p1" 
          >
            <AiFillGithub href="a" size={60}></AiFillGithub>
          </Button>

          <Button id="p2">
            <FaArrowRight href="a" size={60}></FaArrowRight>
          </Button>

          <Button id="p3">
            <FaJava href="a" size={60}></FaJava>
          </Button>

          <Button id="p4">
            <FaBeer href="a" size={60}></FaBeer>
          </Button>

          <Button id="p5">
            <AiFillGithub href="a" size={60}></AiFillGithub>
          </Button>
        </div>
        <div className={styles.div4} onMouseEnter={button}>
          <PersonalCard id="x1" nombre="a">{}</PersonalCard>
        </div>
      </div>
    </>
  );
}
