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

const components = {
  "AiOutlineUser": <AiOutlineUser style={{ color: 'white', fontSize: '30px' }} />,
  "FaJava": <FaJava style={{ color: 'white', fontSize: '30px' }} />,
  "TbBrandNextjs": <TbBrandNextjs style={{ color: 'white', fontSize: '30px' }} />,
  "AiFillGithub": <AiFillGithub style={{ color: 'white', fontSize: '30px' }} />,
}


export default function Button({...props }) {

  return (
    <>
      <div className={`${styles["custom-btn"]} ${styles[props.className]} ${styles["button"]} `}
      >{components[props.icon]}
      </div>


    </>
  )
}

