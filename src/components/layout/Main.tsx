import React, { ReactNode } from "react";
import Navbar from "../Navbar/Navbar";
import styles from "./Main.module.css";
// import custom components
import SideBar from "../Sidebar/Sidebar";
import Footer from "../Footer/Footer";
import Head from "../Head/Head";
import Image from "next/image";
import Background from "../../../public/violet.jpg";
import next from "next/types";
import NavBar from "../Navbar/Navbar";
import PersonalCard from "../Cards/PersonalCard";
import CardList from "../Posts/ProjectCards";
import { FaBeer, FaJava, FaArrowRight } from "react-icons/fa";
import { AiFillGithub, AiOutlineUser, AiFillLinkedin } from "react-icons/ai";
import { BiBody, BiCodeAlt, BiSend } from "react-icons/bi";
import { TbBrandNextjs } from "react-icons/tb";
import { BsFillHouseDoorFill, BsTwitter } from "react-icons/bs";
// import custom components

export default function Main({ children, ...props }) {
  //styles the main html tag

  return (
    <>
      {/* <!--=============== FONT AWESOME ===============--> */}

      <nav id="navbar" className={styles.navbar}>
        <a href="#"></a>
      </nav>

      <div className={styles.container}>
        {/* <!--=============== NAVIGATION MENU ===============--> */}

        <div className={styles.menu}>
          <a
            href="#welcome-section"
            className={`${styles["menu-icon"]} ${styles["fa-solid"]} ${styles["fa-house"]}`}
          >
            <BsFillHouseDoorFill color="red" fontSize="2em"></BsFillHouseDoorFill>
          </a>
          <a
            href="#about"
            className={`${styles["menu-icon"]} ${styles["fa-solid"]} ${styles["fa-user"]}`}
          >
            <AiOutlineUser color="red" fontSize="2em"></AiOutlineUser>
          </a>
          <a
            href="#projects"
            className={`${styles["menu-icon"]} ${styles["fa-solid"]} ${styles["fa-code"]}`}
          >
            <BiCodeAlt color="red" fontSize="2em"></BiCodeAlt>
          </a>
          <a
            href="#experience"
            className={`${styles["menu-icon"]} ${styles["fa-solid"]} ${styles["fa-briefcase"]}`}
          >
            <AiFillGithub color="red" fontSize="2em"></AiFillGithub>
          </a>
          <a
            href="#contact"
            className={`${styles["menu-icon"]} ${styles["fa-solid"]} ${styles["fa-envelope"]}`}
          >
            <BiSend color="red" fontSize="2em"></BiSend>
          </a>
        </div>

        {/* <!--=============== MAIN "WINDOW" ===============--> */}

        <div className={styles.portfolio}>
          {/* <!--=============== HEADER SECTION ===============--> */}

          <section className={styles.header}>
            <Image
              src={Background}
              className={styles.image}
              alt="Picture of the author"
              quality={100}
              width={200}
              height={200}
            />
            <h1>Agustín Garrido</h1>
            <h2>Fullstack Developer</h2>
            <div className={styles.socials}>
              <a
                href="#"
                target="_blank"
                className={`${styles["fa-brands"]} ${styles["fa-linkedin-in"]}`}
                id="profile-link"
              >
                <AiFillGithub color="grey" fontSize="2em"></AiFillGithub>
              </a>
              <a
                href="#"
                target="_blank"
                className={`${styles["fa-brands"]} ${styles["fa-github"]}`}
              >
                 <AiFillLinkedin color="white" fontSize="2em"></AiFillLinkedin>
              </a>
              <a
                href="#"
                target="_blank"
                className={`${styles["fa-brands"]} ${styles["fa-codepen"]}`}
              >
                 <BsTwitter color="lightblue" fontSize="2em"></BsTwitter>
              </a>
            </div>
            <a href="" className={styles.cta}>
              Download CV
            </a>
          </section>

          {/* <!--=============== CONTENT SECTION ===============--> */}

          <div className={styles.content}>
            {/* <!--=============== HOME ===============--> */}

            <section
              className={`${styles["content-card"]} ${styles.home}`}
              id={styles["welcome-section"]}
            >
              <h1 id={styles.h1}>Hola, soy Agustín</h1>
            </section>

            {/* <!--=============== ABOUT ME ===============--> */}

            <section
              className={`${styles["content-card"]} ${styles.about}`}
              id="about"
            >
              <h1>Sobre mi</h1>
              <div className={`${styles["about-item"]} ${styles["about-me"]}`}>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis
                  non dolore facere reiciendis iusto nemo tempore laboriosam
                  laborum fugit dolorum totam incidunt tempora laudantium
                  obcaecati natus sit, aspernatur consectetur! Voluptates?
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                  consectetur quos fugiat fugit! Officiis, temporibus.
                </p>
              </div>
              <div className={styles["col-2"]}>
                <div className={`${styles["about-item"]} ${styles["skills"]}`}>
                  <h1>Skills</h1>
                  <span className={`${styles.skill}  ${styles.bar}`}>HTML</span>
                  <span className={`${styles.skill}  ${styles.bar}`}>CSS</span>
                  <span className={`${styles.skill}  ${styles.bar}`}>JavaScript</span>
                  <span className={`${styles.skill}  ${styles.bar}`}>Node.js</span>
                  <span className={`${styles.skill}  ${styles.bar}`}>React</span>
                  <span className={`${styles.skill}  ${styles.bar}`}>SQL</span>
                  <span className={`${styles.skill}  ${styles.bar}`}>Git</span>
                  <span className={`${styles.skill}  ${styles.bar}`}>API</span>
                  <span className={`${styles.skill}  ${styles.bar}`}>Unix/Linux</span>
                  <span className={`${styles.skill}  ${styles.bar}`}>Jira</span>
                  <span className={`${styles.skill}  ${styles.bar}`}>Confluence</span>
                  <span className={`${styles.skill}  ${styles.bar}`}>Figma</span>
                </div>

                <div className={styles["about-item languages"]}>
                  <h1>Languages</h1>
                  <div className={styles.language}>
                    <p>polish</p>
                    <span className={styles.bar}>
                      <span className={styles.polish}></span>
                    </span>
                  </div>
                  <div className={styles.language}>
                    <p>english</p>
                    <span className={styles.bar}>
                      <span className={styles.english}></span>
                    </span>
                  </div>
                  <div className={styles.language}>
                    <p>french</p>
                    <span className={styles.bar}>
                      <span className={styles.french}></span>
                    </span>
                  </div>
                </div>
              </div>
            </section>

            {/*!--=============== PROJECTS ===============-->*/}

            <section className={styles["content-card"]} id={styles.projects}>
              <h1>Projects</h1>
              <div className={styles["col-2 project-list"]}>
                <div className={styles["project-tile"]}>
                  <img
                    src="https://shots.codepen.io/nietoperq/pen/BaPJqGW-512.webp?version=1674304822"
                    alt=""
                  />
                  <div className={styles.overlay}>
                    <div className={styles["project-description"]}>
                      <h3>Project 1</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Nisi aperiam voluptate accusamus velit omnis.
                      </p>
                    </div>
                  </div>
                </div>
                <div className={styles["project-tile"]}>
                  <img
                    src="https://shots.codepen.io/nietoperq/pen/GRBOjyV-512.webp?version=1674084446"
                    alt=""
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
                  <img
                    src="https://shots.codepen.io/nietoperq/pen/dyjWxgX-512.webp?version=1673554073"
                    alt=""
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
                  <img
                    src="https://shots.codepen.io/nietoperq/pen/vYagdwo-512.webp?version=1673549480"
                    alt=""
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
              <a href="https://github.com/nietoperq">see more...</a>
            </section>

            {/*!--=============== EXPERIENCE ===============--*/}

            <section
              className={styles["content-card experience"]}
              id="experience"
            >
              <h1>Experience</h1>
              <div className={styles.timeline}>
                <div className={styles["timeline-items"]}>
                  <div className={styles["timeline-item"]}>
                    <div className={styles["timeline-date"]}>2022 - now</div>
                    <div className={styles["timeline-content"]}>
                      <h3>timeline item 1</h3>
                      <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Ab iusto accusantium nostrum eligendi debitis
                        quisquam. Corporis at voluptatem culpa officia.
                      </p>
                    </div>
                  </div>
                  <div className={styles["timeline-item"]}>
                    <div className={styles["timeline-date"]}>2015 - 2022</div>
                    <div className={styles["timeline-content"]}>
                      <h3>timeline item 2</h3>
                      <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Ab iusto accusantium nostrum eligendi debitis
                        quisquam. Corporis at voluptatem culpa officia.
                      </p>
                    </div>
                  </div>
                  <div className={styles["timeline-item"]}>
                    <div className={styles["timeline-date"]}>2014 - 2015</div>
                    <div className={styles["timeline-content"]}>
                      <h3>timeline item 3</h3>
                      <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Ab iusto accusantium nostrum eligendi debitis
                        quisquam. Corporis at voluptatem culpa officia.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* --=============== CONTACT ===============-- */}

            <section className={styles["content-card contact"]} id="contact">
              <h1>Contact</h1>
              <form
                className={styles.form}
                id="form"
                action="https://www.freecodecamp.com/email-submit"
              >
                <div className={styles["input-box"]}>
                  <input
                    type="text"
                    className={styles["text-input"]}
                    name="name"
                    placeholder="Name"
                  />
                </div>
                <div className={styles["input-box"]}>
                  <input
                    type="email"
                    className={styles["text-input"]}
                    name="email"
                    id="email"
                    placeholder="Email"
                  />
                </div>
                <div className={styles["input-box"]}>
                  <input
                    type="subject"
                    className={styles["text-input"]}
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                  />
                </div>
                <div className={styles["input-box"]}>
                  <textarea name="text" className={styles["message"]}>
                    placeholder="Message..."
                  </textarea>
                </div>
                <div className={styles["input-box"]}>
                  <input
                    type="submit"
                    className={styles["submit-btn"]}
                    id="submit"
                    value="submit"
                  ></input>
                </div>
              </form>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
