import React from "react";
import { useState } from "react";
import Link from "next/link";
import { Inter } from "next/font/google";

import Head from 'next/head'
import styles from "./Sidebar.module.css";

const inter = Inter({ subsets: ["latin"] });
const navItems: { label: string; page?: string; link?: string }[] = [
    { label: "Home", page: "/" },
    { label: "Blog", page: "/blog" },
    { label: "Contact", page: "/contact" },
    { label: "Source Code", link: "https://github.com/ijjk/notion-blog" },
];

export default function Sidebar() {
    const [isNavExpanded, setIsNavExpanded] = useState(false);
    return (
        <>
         <Head>
        <title>My page title</title>
        <meta property="og:title" content="My page title" key="title" />
        <meta property="og:url" content="https://codepen.io/hrtzt/details/NPZKRN" />
        <meta property="og:image" content="https://pbs.twimg.com/media/CCNJN_XUMAAJSzU.jpg:large" />
      </Head>
      <div className={`${styles.page} ${styles.html}`}></div>
            <div className={styles["ct"]} id={styles["t1"]}>
                <div className={styles["ct"]} id={styles["t2"]}>
                    <div className={styles["ct"]} id={styles["t3"]}>
                        <div className={styles["ct"]} id={styles["t4"]}>
                            <div className={styles["ct"]} id={styles["t5"]}>
                                <ul id={styles["menu"]} className={styles.ul}>
                                    <a href="#t1"><li className={styles["icon fa fa-bolt"]} id={styles["uno"]}></li></a>
                                    <a href="#t2"><li className={styles["icon fa fa-keyboard-o"]} id={styles["dos"]}></li></a>
                                    <a href="#t3"><li className={styles["icon fa fa-rocket"]} id={styles["tres"]}></li></a>
                                    <a href="#t4"><li className={styles["icon fa fa-dribbble"]} id={styles["cuatro"]}></li></a>
                                    <a href="#t5"><li className={styles["icon fa fa-plus-circle"]} id={styles["cinco"]}></li></a>
                                </ul>
                                <div className={styles["page"]} id={styles["p1"]}>
                                    <section className={styles["icon"]}><span className={styles["title"]}>Bolt</span><span className={styles["hint"]}>Like this pen to see the magic!...<br/> Just kidding, it won't happen anything but I'll be really happy If you do so.</span></section>
                                </div>
                                <div className={styles["page"]} id={styles["p2"]}>
                                    <section className={styles["icon fa fa-keyboard-o"]}><span className={styles["title"]}>Type</span></section>
                                </div>
                                <div className={styles["page"]} id={styles["p3"]}>
                                    <section className={styles["icon fa fa-rocket"]}><span className={styles["title"]}>Rocket</span></section>
                                </div>
                                <div className={styles["page"]} id={styles["p4"]}>
                                    <section className={styles["icon fa fa-dribbble"]}>
                                        <span className={styles["title"]}>Dribbble</span>
                                        <p className={styles["hint"]}>
                                            <a href="https://dribbble.com/hrtzt" target="_blank">Im ready to play, <span className={styles["hint line-trough"]}>invite me </span> find me</a>
                                        </p>
                                        <p className={styles["hint"]}>Already invited by <a href="http://www.dribbble.com/mrpeters" target="_blank">Stan Peters</a></p>
                                    </section>
                                </div>
                                <div className={styles["page"]} id={styles["p5"]}>
                                    <section className={styles["icon fa fa-plus-circle"]}>
                                        <span className={styles["title"]}>More</span>
                                        <p className={styles["hint"]}>
                                            <span>You love one page & CSS only stuff? </span><br />
                                            <a href="https://codepen.io/hrtzt/details/pgXMYb/" target="_blank">check this pen "Pure CSS One page vertical navigation"</a>
                                        </p>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}