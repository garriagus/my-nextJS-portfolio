import styles from './ProjectCards.module.css';
import Image from 'next/image';

import Logo from '../../../public/nextlogo.jpg'

export default function NavBar() {
    return (
        <>
            <div className={styles["container"]}>
                <div className={styles["skill-card"]}>
                    <header className={styles["skill-card_header"]}>
                        <Image
                            src={Logo}
                            className={styles["skill-card_icon"]}
                            alt="Picture of the author"
                            quality={100}
                            width={70}
                            height={70} />
                    </header>
                    <section className={styles["skill-card_body"]}>
                        <h2 className={styles["skill-card_title"]}>html</h2>
                        <span className={styles["skill-card_duration"]}>6 ans d'expérience</span>
                        <ul className={styles["skill-card_knowledge"]}>
                            <li className={styles['li']}>HTML5</li>
                            <li className={styles['li']}>Sémantique</li>
                            <li className={styles['li']}>SVG</li>
                            <li className={styles['li']}>Canvas</li>
                        </ul>
                    </section>
                </div>

            </div>
        </>

    );
};
