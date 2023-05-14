import React from "react";
import { useEffect } from "react";
import styles from "./Buttons.module.css";
import { useState } from "react";
import { FaBeer, FaJava } from 'react-icons/fa';
import { AiFillGithub, AiOutlineUser } from "react-icons/ai";
import { BiBody } from "react-icons/bi";
import { TbBrandNextjs } from "react-icons/tb";
import JavaCard from "../Cards/JavaCard";
import IoTCard from "../Cards/IoTCard";
import GithubCard from "../Cards/GithubCard";
import PersonalCard from "../Cards/PersonalCard";

export default function Button({ children, ...props }) {

  const [actualId, setActualId] = useState<string | null>(null);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [showContent, setShowContent] = useState(false);
  const [content, setContent] = useState<React.ReactNode>(null);

  const components = [<PersonalCard id="p1">hola</PersonalCard>,
  <JavaCard id="p2">hola</JavaCard>,
  <IoTCard id="p2">hola</IoTCard>,
  <GithubCard id="p2">hola</GithubCard>];

  const handleMouseEnter = (id: string) => {
    //  setShowContent(prevState => !prevState);
    switch (props.id) {
      case "one":
        props.activeId="one";
        console.log("a")
        break;
      case "two":
        break
        break;
      case "three":
        break
        break;
      case "four":
        break
        break;
      case "five":
        break
        break;
      default:
        break
    }
   
    //  console.log(activeId)
    setShowContent(prevState => !prevState);
  };
  const handleMouseLeave = () => {
    setShowContent(false);
  };
  return (
    <>
      <div 
      //onMouseEnter={() => { handleMouseEnter("a") }}
        className={`${styles["custom-btn"]} ${styles[props.className]} ${styles["button"]} `}
      >{props.icon}
      </div>

 
    </>
  )
}

