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

  const [showCard, setShowCard] = useState(false);
  const [activeId, setActiveId] = useState("zero");

  const handleMouseOver = (id) => {
    setShowCard(false);
   setActiveId(props.id);
   
   console.log(props.id)
    if (["one", "two", "three", "four"].includes(activeId)) {
     
      console.log(props.id)
    }
  };

  const handleMouseOut = () => {
    setShowCard(false);
    //setActiveId(null);
  };



  return (
    <>

      <div >
        <div  
        onMouseEnter={() => handleMouseOver(props.id)}
      //  onMouseLeave={handleMouseOut}
          className={`${styles["custom-btn"]} ${styles[props.className]} ${styles["button"]} `}
        >{children}
        </div>
      </div>

    
        <div className="container">
      
        {activeId == "one" && <PersonalCard id="p2">hola</PersonalCard>}
        
      </div>

    </>
  );
}


