import { useRouter } from "next/router";
import Link from "next/link";
import { useState } from "react";
import { Inter } from "next/font/google";
import Image from 'next/image';
import Profile from './../../../public/profile.jpg';
import styles from "./Navbar.module.css";
import SideBar from "../Sidebar/Sidebar";
import Button from "../Buttons/Button";

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


  const [showContent, setShowContent] = useState<boolean>(false);


  const handleMouseEnter = (id) => {
    setShowContent(!showContent)
  }
  return (
    <>


      <div className={styles["nav"]}>


        <div className={styles["nav-header"]}>
          <div className={styles["nav-title"]}>
            <div className={styles.button}
              onMouseEnter={() => { setShowContent(!showContent) }}
            >
              <Button id="one" className="button-1" icon="FaArrowRight">
              </Button>
            </div>
          </div>
        </div>
        <div className={styles["nav-btn"]} >
          <label htmlFor="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>
        <div className={styles["nav-links"]}>
          <Link
            href='/contact'
            className={currentRoute === '/contact' ? styles.active : styles.nonActive}
          >
            Home
          </Link>
          <Link
            href='/contact'
            className={currentRoute === '/contact' ? styles.active : styles.nonActive}
          >
            Contact
          </Link>
          <Link
            href='/contact'
            className={currentRoute === '/contact' ? styles.active : styles.nonActive}
          >
            Contact
          </Link>
        </div>
      </div>
      {showContent && (<SideBar>{ }</SideBar>)}

    </>
  );
};

export default NavBar;



