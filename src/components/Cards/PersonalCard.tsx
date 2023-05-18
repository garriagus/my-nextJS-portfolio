import styles from './Card.module.css'
import Image from 'next/image';
import Skills from './../../components/Posts/Post';

export default function PersonalCard({ ...props }) {
    {/*    */ }
    return (
        <>
            <div className={styles["container"]}>
                <div className={styles["card"]}>
                    <div className={`${styles["front"]} ${styles["side"]}`}>
                        <h1 className={styles["logo"]}>Agustín Garrido</h1>
                    </div>
                    <div className={`${styles["back"]} ${styles["side"]}`}>
                        <h3 className={styles["name"]}>Agustín Garrido</h3>
                        <div>Full-stack developer</div>

                        <div className={styles["info"]}>
                            <Skills></Skills>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}
