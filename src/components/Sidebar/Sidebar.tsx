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

    const [content, setContent] = useState<React.ReactNode>(null);

    const handleMouseEnter = (id) => {
        const components = {
            0: <PersonalCard children={undefined} />,
            1: <JavaCard children={undefined} />,
            2: <IoTCard children={undefined} />,
            3: < GithubCard children = { undefined } />,
        }

        setContent(components[id])
    }

    return (
        <>
            <div className={styles.container}>
                <div className={styles.sidebar}>
                    <div onMouseEnter={() => { handleMouseEnter(0) }}>
                        <Button id="one" className="button-1" icon={<AiOutlineUser style={{ color: 'white', fontSize: '30px' }} ></AiOutlineUser>}>
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
