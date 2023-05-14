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

    const [activeId, setActiveId] = useState<string | null>(null);
    const [showContent, setShowContent] = useState<boolean>(false);
    const [content, setContent] = useState<React.ReactNode>(null);

    const handleMouseEnter = (id) => {
        //  setShowContent(prevState => !prevState);
        const elem = document.getElementsByClassName(id)
        console.log(elem)
        setContent(components[id])
    }

    const components = [<PersonalCard id="p2">hola</PersonalCard>,
    <JavaCard id="p2">hola</JavaCard>,
    <IoTCard id="p2">hola</IoTCard>,
    <GithubCard id="p2">hola</GithubCard>];


    return (
        <>
            <div className={styles.container}>
                <div className={styles.sidebar}>
                    <div onMouseEnter={() => { handleMouseEnter(0) }}>
                        <Button active={activeId} id="one" className="button-1" icon={<AiOutlineUser style={{ color: 'white', fontSize: '30px' }} ></AiOutlineUser>}>
                        </Button>
                    </div>

                    <div onMouseEnter={() => { handleMouseEnter(1) }}>
                        <Button id="two" className="button-1" icon={<FaJava style={{ color: 'white', fontSize: '25px' }} >{ }</FaJava>}>
                        </Button>
                    </div>

                    <div onMouseEnter={() => { handleMouseEnter(2) }}>
                        <Button id="tree" className="button-1" icon={<TbBrandNextjs style={{ color: 'white', fontSize: '30px' }} ></TbBrandNextjs>}>
                        </Button>
                    </div>

                    <div onMouseEnter={() => { handleMouseEnter(3) }}>
                        <Button id="four" className="button-1" icon={<AiFillGithub style={{ color: 'white', fontSize: '30px' }} ></AiFillGithub>}>
                        </Button>
                    </div>
                </div>

                {content}

            </div>



        </>
    );
}
