import React from "react";
import { useState } from "react";
import styles from './Sidebar.module.css';

import Button from "../Buttons/Button";
import JavaCard from "../Cards/JavaCard";
import IoTCard from "../Cards/IoTCard";
import GithubCard from "../Cards/GithubCard";
import PersonalCard from "../Cards/PersonalCard";

const components = {
    0: <PersonalCard children={undefined} />,
    1: <JavaCard children={undefined} />,
    2: <IoTCard children={undefined} />,
    3: < GithubCard children = { undefined } />,
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
                        <Button id="one" >
                        </Button>
                    </div>
                    <div onMouseEnter={() => { handleMouseEnter(1) }}>
                        <Button id="two" >
                        </Button>
                    </div>
                    <div onMouseEnter={() => { handleMouseEnter(2) }}>
                        <Button id="tree" >
                        </Button>
                    </div>
                    <div onMouseEnter={() => { handleMouseEnter(3) }}>
                        <Button id="four" >
                        </Button>
                    </div>
                </div>

                {content}

            </div>



        </>
    );
}
