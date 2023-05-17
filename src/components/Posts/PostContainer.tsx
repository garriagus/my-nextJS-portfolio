import styles from './PostContainer.module.css'
import { useState } from "react";
import Image from 'next/image'

import Background from '../../../public/abstract.jpg'


const Image1 = "/../public/java.jpg";
const Image2 = "/../public/next.jpg";
const Image3 = "/../public/iot.jpg";
const Image4 = "/../public/fondo.jpeg";




export default function Post({ children, ...props }) {
    {/*    */ }

    const [showImg, setShowImg] = useState<boolean>(false);
    const [background, setBackground] = useState("/");

    const handleMouseEnter = (id) => {
        console.log(props.card1)
    }

    const sources: { source: string; page?: string; link?: string }[] = [

        { source: "Home", page: "/" },
        { source: "Blog", page: "/blog" },
        { source: "Contact", page: "/contact" },
        { source: "Source Code", link: "https://github.com/garriagus/" },
    ];


    return (
        <>
            <div className={styles["container"]}>
                {showImg &&
                    <Image
                        src={background}
                        className={styles.imaged}
                        alt="Picture of the author"
                        quality={100}
                        fill
                    />}
                <section
                    className={styles["hero-section"]}>
                    <div className={styles["card-grid"]}      
                    onMouseEnter={() => {setShowImg(true)}}        
                    onMouseLeave={() => {setShowImg(false)}}>
                        <a onMouseEnter={() => {setBackground(Image1)}}
                            className={styles.card} href="#">
                            <div className={styles["card__background"]}>
                                <Image
                                    src={Image1}
                                    alt="Picture of the author"
                                    width={282}
                                    height={423}
                                    objectFit="cover"
                                    quality={100} />
                            </div>
                            <div className={styles["card__content"]}>
                                <p className={styles["card__category"]}>Category</p>
                                <h3 className={styles["card__heading"]}>Example Card Heading</h3>
                            </div>
                        </a>
                        <a onMouseEnter={() => {setBackground(Image2)}}
                            className={styles.card} href="#">
                            <div className={styles["card__background"]}>
                                <Image
                                    src={Image2}
                                    alt="Picture of the author"
                                    width={282}
                                    height={423}
                                    quality={100} />
                            </div>
                            <div className={styles["card__content"]}>
                                <p className={styles["card__category"]}>Category</p>
                                <h3 className={styles["card__heading"]}>Example Card Heading</h3>
                            </div>
                        </a>
                        <a onMouseEnter={() => {setBackground(Image3)}}
                            className={styles.card} href="#">
                            <div className={styles["card__background"]}>
                                <Image
                                    src={Image3}
                                    alt="Picture of the author"
                                    width={282}
                                    height={423}
                                    quality={100} />
                            </div>
                            <div className={styles["card__content"]}>
                                <p className={styles["card__category"]}>Category</p>
                                <h3 className={styles["card__heading"]}>Example Card Heading</h3>
                            </div>
                        </a>
                        <a onMouseEnter={() => {setBackground(Image4)}}
                            className={styles.card} href="#">
                            <div className={styles["card__background"]}>
                                <Image
                                    src={Image4}
                                    alt="Picture of the author"
                                    layout="fill"
                                    objectFit="cover"
                                    quality={100} />
                            </div>
                            <div className={styles["card__content"]}>
                                <p className={styles["card__category"]}>Category</p>
                                <h3 className={styles["card__heading"]}>Example Card Heading</h3>
                            </div>
                        </a>
                    </div>
                </section>
            </div>
        </>
    );
}
