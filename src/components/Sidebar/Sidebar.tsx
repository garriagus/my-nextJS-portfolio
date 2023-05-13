import React from "react";
import { useState } from "react";
import { FaBeer, FaJava } from 'react-icons/fa';
import { AiFillGithub, AiOutlineUser } from "react-icons/ai";
import { BiBody } from "react-icons/bi";
import { TbBrandNextjs } from "react-icons/tb";
import Button from "../Buttons/Button";

import PostContainer from "../Posts/PostContainer";
import styles from './Sidebar.module.css';
import JavaCard from "../Cards/JavaCard";
import IoTCard from "../Cards/IoTCard";
import GithubCard from "../Cards/GithubCard";
import PersonalCard from "../Cards/PersonalCard";

export default function Sidebar({ children }) {
    //const [showCard, setShowCard] = useState(false);
    const [activeId, setActiveId] = useState(null);

    const handleMouseOver = (button) => {
        //  const contenido = document.getElementById("one");
      //  console.log(button)
        //  setShowCard(true);
          setActiveId(null);
    };
    const handleMouseOut = () => {
        setActiveId(null);
        //setShowCard(false);
    };
    {/*    */ }

    return (
        <>
            <div className={styles.container}>
                <div className={styles.sidebar}>
                    <Button id="one" className="button-1">
                        {<AiOutlineUser style={{ color: 'white', fontSize: '30px' }} ></AiOutlineUser>}
                    </Button>

                    <Button id="two" className="button-1">
                        {<AiOutlineUser style={{ color: 'white', fontSize: '30px' }} ></AiOutlineUser>}
                    </Button>
                    <Button id="tree" className="button-1">
                        {<AiOutlineUser style={{ color: 'white', fontSize: '30px' }} ></AiOutlineUser>}
                    </Button>
                    <Button id="four" className="button-1">
                        {<AiOutlineUser style={{ color: 'white', fontSize: '30px' }} ></AiOutlineUser>}
                    </Button>
                    
                </div>
                
            </div>
        

        </>
    );
}
