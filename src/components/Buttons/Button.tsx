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

