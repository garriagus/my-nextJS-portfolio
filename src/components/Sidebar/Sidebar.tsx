import React from "react";
import { useState } from "react";
import styles from './Sidebar.module.css';
import Image1 from "../../../public/layout.jpg";
import Button from "../Buttons/Button";

const components = {
    0: Image1,
    1: Image1,
    2: Image1,
    3: Image1,
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
                    <div className={styles.button} onMouseEnter={() => { handleMouseEnter(0) }}>
                        <Button id="one" className="button-1" icon="AiOutlineUser">
                        </Button>
                    </div>
                    <div className={styles.button} onMouseEnter={() => { handleMouseEnter(1) }}>
                        <Button id="two" className="button-1" icon="FaJava">
                        </Button>
                    </div>
                    <div className={styles.button} onMouseEnter={() => { handleMouseEnter(2) }}>
                        <Button id="tree" className="button-1" icon="TbBrandNextjs">
                        </Button>
                    </div>
                    <div className={styles.button} onMouseEnter={() => { handleMouseEnter(3) }}>
                        <Button id="four" className="button-1" icon="AiFillGithub">
                        </Button>
                    </div>
                </div>

                {content}

            </div>



        </>
    );
}
