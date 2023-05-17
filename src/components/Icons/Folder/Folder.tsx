import React from "react";
import { useEffect } from "react";
import styles from "./Folder.module.css";
import { useState } from "react";
import { FaBeer, FaJava, FaArrowRight } from 'react-icons/fa';
import { AiFillGithub, AiOutlineUser } from "react-icons/ai";
import { BiBody } from "react-icons/bi";
import { TbBrandNextjs } from "react-icons/tb";


const components = {
    "AiOutlineUser": <AiOutlineUser style={{ color: 'white', fontSize: '30px' }} />,
    "FaJava": <FaJava style={{ color: 'white', fontSize: '30px' }} />,
    "TbBrandNextjs": <TbBrandNextjs style={{ color: 'white', fontSize: '30px' }} />,
    "AiFillGithub": <AiFillGithub style={{ color: 'white', fontSize: '30px' }} />,
    "FaArrowRight": <FaArrowRight style={{ color: 'white', fontSize: '30px' }} />,
}


export default function Button({ ...props }) {

    return (
        <>
            <div  className={styles.folder}>
                <div className={`${styles.paper} ${styles.one}`}></div>
                <div className={`${styles.paper} ${styles.two}`}></div>
                <div className={`${styles.paper} ${styles.three}`}></div>
                <div className={`${styles.paper} ${styles.four}`}></div>
            </div>
        </>
    )
}


