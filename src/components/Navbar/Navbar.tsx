import { useRouter } from "next/router";
import Link from "next/link";
import { useState } from "react";
import { Inter } from "next/font/google";
import Image from 'next/image';
import Profile from './../../../public/profile.jpg';
import styles from "./Navbar.module.css";
import SideBar from "../Sidebar/Sidebar";
import Button from "../Buttons/Button";
import { FaBeer, FaJava, FaArrowRight } from 'react-icons/fa';
import { AiFillGithub, AiOutlineUser } from "react-icons/ai";


var NavItem = ({ text, href, active }) => {
  return (
    <Link href={href}>
      <p
        className={`nav__item ${active ? "active" : ""
          }`}
      >
        {text}
      </p>
    </Link>
  );
};

const navigationRoutes = ["home", "about", "pricing", "contact"];



const inter = Inter({ subsets: ["latin"] });


const navItems: { label: string; page?: string; link?: string }[] = [
  { label: "Home", page: "/" },
  { label: "Blog", page: "/blog" },
  { label: "Contact", page: "/contact" },
  { label: "Source Code", link: "https://github.com/garriagus/" },
];



const NavBar = () => {
  const router = useRouter();
  const currentRoute = router.pathname;

  const [showNav, setShowNav] = useState<boolean>(false);
  const [showContent, setShowContent] = useState<boolean>(false);

  const [classNav, setClassNav] = useState<string>(styles.navShow);


  const handleMouseEnter = (id) => {
    setShowNav(!showNav)
  }


  return (
    <> <div className={styles.nav}> 
      <div className={styles["nav-header"]}>
        <div className={styles["nav-header"]}
          onMouseEnter={() => { setClassNav(styles.nav) }}
        >
          <div className={styles["nav-title"]}>
            {/*  <div className={styles.button}
              onClick={() => { setShowContent(!showContent) }}
            >
              <Button id="one" className="button-12" icon="FaArrowRight">
              </Button>
            </div>*/}
          </div>

          <div className={styles["nav-btn"]} >
            <Button id="one" className="button-1" icon="FaArrowRight">
            </Button>
            <Button id="one" className="button-12" icon="FaArrowRight">
            </Button>
            <Button id="one" className="button-12" icon="AiFillGithub">
            </Button>
          </div>

          <div className={styles["nav-links"]}>
            <Link
              href='/contact'
              className={currentRoute === '/contact' ? styles.active : styles.nonActive}
            >
              <Button id="one" className="button-1" icon="AiOutlineUser">
              </Button>
            </Link>
            <Link
              href='/contact'
              className={currentRoute === '/contact' ? styles.active : styles.nonActive}
            >
              <Button id="one" className="button-3" icon="FaJava">
              </Button>
            </Link>
            <Link
              href='/contact'
              className={currentRoute === '/contact' ? styles.active : styles.nonActive}
            >
              <Button id="one" className="button-3" icon="AiFillGithub">
              </Button>
            </Link>

          </div>
        </div>
      </div>   
      </div>
    </>
  );
};

export default NavBar;



