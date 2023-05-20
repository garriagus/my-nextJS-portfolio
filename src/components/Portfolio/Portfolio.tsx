import Image from 'next/image';
import styles from './Portfolio.module.css';
import ImgProfile from "../../../public/profile.jpg";

import { MdLocationOn } from "react-icons/md";
import { AiFillGithub, AiOutlineUser, AiFillLinkedin } from "react-icons/ai";
import { BsFillHouseDoorFill, BsTwitter } from "react-icons/bs";

import NavMenu from '../Sidebar/NavMenu'

export default function Portfolio({ children, ...props }) {
    return (
        <>
            <div className={styles.container}>
                {/* <!--=============== NAV MENU ===============--> */}
                <NavMenu></NavMenu>
                {/* <!--=============== Portfolio ===============--> */}
                <div className={styles.portfolio}>                   
                    {/* <!--=============== HEADER ===============--> */}
                    <div className={styles.header}>
                        <Image src={ImgProfile}
                            className={styles.image}
                            alt="Picture of the author"
                            quality={100}
                            width={200}
                            height={200} />
                        <h1>Agustín Garrido</h1>
                        <h2>Fullstack Developer</h2>
                        <h4 className={styles["location"]}>
                                <MdLocationOn color='red' className={`${styles["a"]}${styles["fa-map-marker"]} `}></MdLocationOn>
                                Buenos Aires, Argetina
                            </h4>
                        <div className={styles.socials}>
                            <a href="https://github.com/garriagus" target="_blank" >
                                <AiFillGithub color="var(--background-color-a)" fontSize="2em" />
                            </a>
                            <a href="https://www.linkedin.com/in/agustin-garrido/" target="_blank">
                                <AiFillLinkedin color="white" fontSize="2em"></AiFillLinkedin>
                            </a>
                            <a href="#" target="_blank">
                                <BsTwitter color="lightblue" fontSize="2em"></BsTwitter>
                            </a>
                        </div>
                        <a href="" className={styles.cta}>
                            Download CV
                        </a>
                    </div>
                    {/* =============== CONTENIDO =============== */}
                    <div className={styles.content}>
                        {children}
                    </div>
                </div>
            </div>
        </>

    );
};



