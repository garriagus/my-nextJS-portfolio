import React from "react";
import { useState } from "react";
import styles from './Sidebar.module.css';

import Button from "../Buttons/Button";
import JavaCard from "../Cards/JavaCard";
import IoTCard from "../Cards/IoTCard";
import GithubCard from "../Cards/GithubCard";
import PersonalCard from "../Cards/PersonalCard";

const components = {
    0: <PersonalCard />,
    1: <JavaCard />,
    2: <IoTCard />,
    3: < GithubCard />,
}

export default function Sidebar({ children }) {

    const [content, setContent] = useState<React.ReactNode>(null);

    const handleMouseEnter = (id) => {
        setContent(components[id])
    }

    return (
        <>
            <div className={styles.container}>
                <div className={styles.sidebar}>
                    <div onMouseEnter={() => { handleMouseEnter(0) }}>
                        <Button id="one" className="button-1" icon="AiOutlineUser">
                        </Button>
                    </div>
                    <div onMouseEnter={() => { handleMouseEnter(1) }}>
                        <Button id="two" className="button-1" icon="FaJava">
                        </Button>
                    </div>
                    <div onMouseEnter={() => { handleMouseEnter(2) }}>
                        <Button id="tree" className="button-1" icon="TbBrandNextjs">
                        </Button>
                    </div>
                    <div onMouseEnter={() => { handleMouseEnter(3) }}>
                        <Button id="four" className="button-1" icon="AiFillGithub">
                        </Button>
                    </div>

                </div>

                {content}

            </div>



        </>
    );
}
