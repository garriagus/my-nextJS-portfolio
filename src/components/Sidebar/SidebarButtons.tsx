import React from "react";
import { useState } from "react";
import Link from "next/link";
import { Inter } from "next/font/google";

import styles from "./Sidebar.module.css";

import HoverContainer from "./HoverContainer";
import { FaHeart } from "react-icons/fa";


const inter = Inter({ subsets: ["latin"] });

const navItems: { label: string; page?: string; link?: string }[] = [
    { label: "Home", page: "/" },
    { label: "Blog", page: "/blog" },
    { label: "Contact", page: "/contact" },
    { label: "Source Code", link: "https://github.com/ijjk/notion-blog" },
];


export default function Button({ children, ...props }) {
    const [isNavExpanded, setIsNavExpanded] = useState(false);

    const media_urls = [
        {
            id: 1,
            title: 'Video One',
            video_url:
                '',
        },
    ]


    const handleMouseEnter1 = (e) => {
        const button = e.target;
        const h1 = document.querySelector('h1');
        //h1.style.display = 'block';h
        document.body.style.backgroundColor = 'red';
        console.log("entra"+ children)
    }
    const handleMouseLeave1 = (e) => {
        const button = e.target;
        console.log("sale")
        const div = document.querySelector('show');
        document.body.style.display = 'block';
        document.body.style.backgroundColor = 'white';
    }

   

    return (
        <>

            <nav className={styles["sidebar"]}>
                <ul  className={styles["menu"]}>
                    <div id={styles["btn" + children]} className={styles["sidebar"]}  >
                        <button className={styles["sidebar-button"]} id={styles["p" + children]}
                            onMouseEnter={handleMouseEnter1}
                            onMouseLeave={handleMouseLeave1}
                        >{children}</button>
                    </div>

                </ul>

            </nav>

            <div id={styles.show}>
                <h1 className='text-center'>Cloudinary Video Show</h1>
                <div className='container'>
                    <div className='row'>
                        {media_urls.map((media) => (
                            <div key={media.id} className='col-lg-4 col-sm-6 mb-4'>
                                <div className='card h-100'>
                                    <div className='card-body'>
                                        <h4 className='card-title'>{media.title}</h4>
                                        <video
                                            width='320'
                                            height='240'
                                            controls

                                        >                                            <source src={media.video_url} type='video/mp4' />
                                        </video>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>


        </>


    );
}