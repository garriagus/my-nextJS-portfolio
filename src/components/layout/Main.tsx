import React, { ReactNode } from "react";
import Navbar from "../Navbar/Navbar";
import styles from "./Main.module.css";
// import custom components
import AboutMe from "../Posts/About";
import NavMenu from "../Sidebar/NavigationMenu";
import Image from "next/image";
import Background from "../../../public/PaHE2U.webp";
import Project1 from "../../../public/abstract.jpg";
import Project2 from "../../../public/fondo.jpeg";
import Project3 from "../../../public/layout.jpg";
import Project4 from "../../../public/midjourney3.jpg";
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

    <NavMenu>{}</NavMenu>

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
            <h1 id={styles.h1}>Agustín Garrido</h1>
            <h2 id={styles.h2}>Fullstack Developer</h2>
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

            <section className={`${styles["content-card"]} ${styles.home}`} id="welcome-section">
              <h1 id={styles.h1}>Hola, soy Agustín</h1>
            </section>

            {/* <!--=============== ABOUT ME ===============--> */}

            <section id="about">
              <AboutMe>{}</AboutMe>
            </section>

            {/*!--=============== PROJECTS ===============-->*/}

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
                      <h3>Project 1</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Nisi aperiam voluptate accusamus velit omnis.
                      </p>
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

            {/*!--=============== EXPERIENCE ===============--*/}

            <section className={styles["content-card experience"]} id="experience">
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