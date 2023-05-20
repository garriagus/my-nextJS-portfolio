import styles from './Post.module.css';
import { MdLocationOn } from "react-icons/md";
import { AiFillHtml5 } from "react-icons/ai";

export default function Welcome() {
    return (
        <>
            <section className={`${styles["content-card"]} ${styles.home}`} id="welcome-section">
                      {/* <!--=============== animated text ===============--> 
                <div className={styles["animation"]}>
                    <h1>Convierto ideas en experiencias digitales, un código a la vez</h1>
                  <h2>algun texto</h2>
                </div>*/}
                <div className={styles["skills-container"]}>
                    <div className={styles["infos"]}>
                        <div className={styles[""]}>
                            <h2 className={styles["name"]}>SKILLS CARD</h2>
                            <h4 className={styles["location"]}>
                                <MdLocationOn color='red' className={`${styles["a"]}${styles["fa-map-marker"]} `}></MdLocationOn>
                                Buenos Aires, Argetina
                            </h4>
                        </div>                        
                    </div>
                    <div className={styles["skills"]}>
                        <h3 className={styles["title"]}>Skills</h3>
                        <div className={styles["list-skills"]}>
                            <div className={styles["html"]}>
                                <AiFillHtml5 color="#f64019" className={styles.icon}></AiFillHtml5>
                                <div className={styles["skill-infos"]}>
                                    <h3>Html 5</h3>
                                    <div className={styles["bar"]}>
                                        <div className={styles["progress"]}></div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles["css3"]}>
                                <i className="fab fa-css3-alt icon"></i>
                                <div className={styles["skill-infos"]}>
                                    <h3>Css 3</h3>
                                    <div className={styles["bar"]}>
                                        <div className={styles["progress"]}></div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles["js"]}>
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
