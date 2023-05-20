import React from "react";
import styles from "./Buttons.module.css";
import { FaBeer, FaJava, FaArrowRight } from 'react-icons/fa';
import { AiFillGithub, AiOutlineUser } from "react-icons/ai";
import { TbBrandNextjs } from "react-icons/tb";

const components = {
  "AiOutlineUser": <AiOutlineUser style={{ color: 'white', fontSize: '30px' }} />,
  "FaJava": <FaJava style={{ color: 'white', fontSize: '30px' }} />,
  "TbBrandNextjs": <TbBrandNextjs style={{ color: 'white', fontSize: '30px' }} />,
  "AiFillGithub": <AiFillGithub style={{ color: 'white', fontSize: '30px' }} />,
  "FaArrowRight": <FaArrowRight style={{ color: 'white', fontSize: '30px' }} />,
}


export default function Button({...props }) {

  return (
    <>
      <div className={`${styles["custom-btn"]}
       ${styles[props.className]} ${styles["button"]} `}
      >{components[props.icon]}
      </div>
    </>
  )
}

