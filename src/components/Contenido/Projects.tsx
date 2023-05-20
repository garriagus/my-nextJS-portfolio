import React, { ReactNode } from "react";
import Image from 'next/image'
import styles from "./Post.module.css";
import Project1 from "../../../public/abstract.jpg";
import Project2 from "../../../public/fondo.jpeg";
import Project3 from "../../../public/layout.jpg";
import Project4 from "../../../public/midjourney3.jpg";
export default function About({ children, ...props }) {
    //styles the main html tag

    return (
        <>
            <section className={styles["content-card"]} id="projects">
                <h1 id={styles.h1}>Projects</h1>
                <div className={`${styles["col-2"]}`}>{/*${styles["project-list"]}*/}
                    <div className={styles["project-tile"]}>

                        <Image
                            src={Project1}
                            alt="asd"
                            width={600}
                            height={600}
                        />

                        <div className={styles.overlay}>
                            <div className={styles["project-description"]}>
                               
                                    <h3>Shoping Cart on Next.js</h3>
                                
                                <a href="https://pediloyacart.netlify.app/">
                                <p>
                                    Carrito de compras utilizando Next.js para el curso Codo a Codo de React 2023
                                </p></a>
                            </div>
                        </div>


                    </div>
                    <div className={styles["project-tile"]}>
                        <Image
                            src={Project2}
                            alt="asd"
                            width={600}
                            height={600}
                        />
                        <div className={styles.overlay}>
                            <div className={styles["project-description"]}>
                                <h3>Project 2</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing
                                    elit. Nisi aperiam voluptate accusamus velit omnis.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={styles["project-tile"]}>
                        <Image
                            src={Project3}
                            alt="asd"
                            width={600}
                            height={600}
                        />
                        <div className={styles.overlay}>
                            <div className={styles["project-description"]}>
                                <h3>Project 3</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing
                                    elit. Nisi aperiam voluptate accusamus velit omnis.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={styles["project-tile"]}>
                        <Image
                            src={Project4}
                            alt="asd"
                            width={600}
                            height={600}
                        />
                        <div className={styles.overlay}>
                            <div className={styles["project-description"]}>
                                <h3>Project 4</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing
                                    elit. Nisi aperiam voluptate accusamus velit omnis.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <a href="https://github.com/garriagus">see more...</a>
            </section>
        </>
    );
}
