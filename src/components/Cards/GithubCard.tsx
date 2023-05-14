import styles from './Card.module.css'
import Image from 'next/image';
import Profile from './../../../public/profile.jpg';

export default function GithubCardCard({ ...props }) {
    {/*    */ }
    return (
        <>
            <div   id={`${styles[""]} ${styles[props.id]} ${styles["body"]} `} >
                <div className={styles["container"]}>
                    <div className={styles["card"]}>
                        <div className={`${styles["font"]} ${styles["side"]}`}>
                            <h1 className={styles["logo"]}>GitHub</h1>
                        </div>
                        <div className={`${styles["back"]} ${styles["side"]}`}>
                            <h3 className={styles["name"]}>Agustín Garrido</h3>
                            <div>Full-stack developer</div>
                            <div className={styles["info"]}>
                                <p id={styles.p}><span className={styles["property"]}>Email: </span>agustin_g08@hotmail.com</p>
                                <p id={styles.p}><span className={styles["property"]}>Twitter: </span>@Garriagus</p>
                                <p id={styles.p}><span className={styles["property"]}>Phone: </span>(011) 123-4567</p>
                                <p id={styles.p}><span className={styles["property"]}>Website: </span>agustin</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


        </>
    );
}
