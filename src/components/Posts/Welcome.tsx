import styles from './Welcome.module.css';
import Image from 'next/image';
import { MdLocationOn } from "react-icons/md";
import { AiFillHtml5 } from "react-icons/ai";
import Logo from '../../../public/nextlogo.jpg'

export default function Welcome() {
    return (
        <>
            <section className={`${styles["content-card"]} ${styles.home}`} id="welcome-section">
                <div className={styles["animation"]}>
                    <h1 className={styles["h1"]}>HELLO</h1>
                    <h1 className={styles["h1"]}>HELLO</h1>
                </div>
                <div className={styles["container"]}>
                    <div className={styles["infos"]}>
                        <div className={styles[""]}>
                            <h2 className={styles["name"]}>Agustín Garrido</h2>
                            <h4 className={styles["location"]}>
                                <MdLocationOn color='red' className={`${styles["a"]}${styles["fa-map-marker"]} `}></MdLocationOn>
                                Buenos Aires, Argetina
                            </h4>
                        </div>
                        <i className={styles["fas fa-chevron-down top-icon"]}></i>
                    </div>
                    <div className={styles["skills"]}>
                        <h3 className={styles["title"]}>Skills</h3>
                        <div className={styles["list-skills"]}>
                            <div className={styles["skill html5"]}>
                                <AiFillHtml5 color="#f64019" className={styles.icon}></AiFillHtml5>
                                <div className={styles["skill-infos"]}>
                                    <h3>Html 5</h3>
                                    <div className={styles["bar"]}>
                                        <div className={styles["progress"]}></div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles["skill css3"]}>
                                <i className="fab fa-css3-alt icon"></i>
                                <div className={styles["skill-infos"]}>
                                    <h3>Css 3</h3>
                                    <div className={styles["bar"]}>
                                        <div className={styles["progress"]}></div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles["skill js"]}>
                                <i className="fab fa-js icon"></i>
                                <div className={styles["skill-infos"]}>
                                    <h3>JavaScript</h3>
                                    <div className={styles["bar"]}>
                                        <div className={styles["progress"]}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr className={styles["line"]}></hr>
                        <ul id={styles.ul} className={styles["list-tags"]}>
                            <li>Web Design</li>
                            <li>Web Development</li>
                            <li>Front-End Devoloper</li>
                            <li>Drawing</li>
                            <li>+2</li>
                        </ul>
                        <i className={styles["fas fa-plus top-icon"]}></i>
                    </div>
                </div>

            </section>
        </>

    );
};
