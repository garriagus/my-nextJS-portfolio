import styles from './Post.module.css';
import Image from 'next/image';
import { FaBeer, FaJava, FaArrowRight } from "react-icons/fa";
import { AiFillGithub, AiOutlineUser, AiFillLinkedin } from "react-icons/ai";
import { BiBody, BiCodeAlt, BiSend } from "react-icons/bi";
import { TbBrandNextjs } from "react-icons/tb";
import { BsFillHouseDoorFill, BsTwitter } from "react-icons/bs";
import Profile from "../../../public/profile.jpg";
import Logo from '../../../public/nextlogo.jpg'

export default function Header() {
    return (
        <>
            <section className={styles.header}>
                <Image
                    src={Profile}
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
        </>

    );
};



