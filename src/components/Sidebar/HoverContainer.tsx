import React from "react";
import { useState } from "react";
import Link from "next/link";
import { Inter } from "next/font/google";

import styles from "./Sidebar.module.css";
import Button from "../Buttons/SidebarButtons";
import { FaHeart } from "react-icons/fa";


export default function HoverContainer({ children }) {
    const [isNavExpanded, setIsNavExpanded] = useState(false);
    return (
        <>
            <div className={styles.container}>
                <nav className={styles.navigation}>

                        <div>
                        
                      <Button >{2}</Button>
                        </div>
                    
                        <Button >{3}</Button>

                    <div id={styles.show}>
                        <div className="ct" id="t1">
                            <div className="ct" id="t2">
                                <div className="ct" id="t3">
                                    <div className="ct" id="t4">
                                        <div className="ct" id="t5">
                                            <div id={styles.content} className={styles["content-overlay"]}>
                                                <div className={styles.page} id={styles.p1}>
                                                    <section id={styles.p}><span className={styles["title"]}>Bolt</span><span className={styles["hint"]}>Like this pen to see the magic!...<br /> Just kidding, it won't happen anything but I'll be really happy If you do so.</span></section>
                                                </div>
                                                <div className={styles["sidebar-content"]}>a

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </nav >
            </div >
        </>
    );
}