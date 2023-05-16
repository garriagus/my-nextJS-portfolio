import styles from './a.module.css';

export default function NavBar() {
    return (
        <><div className={styles.container}></div>
            <ul className={styles['ul']}>
                <li className={styles['li']}>
                    <span className={styles["actual-text"]}>&nbsp;html&nbsp;</span>
                    <span className={styles["hover-text"]} aria-hidden="true">&nbsp;html&nbsp;</span>
                </li>
                <li className={styles['li']}>
                    <span className={styles["actual-text"]}>&nbsp;css&nbsp;</span>
                    <span className={styles["hover-text"]} aria-hidden="true">&nbsp;css&nbsp;</span>
                </li>
                <li className={styles['li']}>
                    <span className={styles["actual-text"]}>&nbsp;js&nbsp;</span>
                    <span className={styles["hover-text"]} aria-hidden="true">&nbsp;js&nbsp;</span>
                </li>
            </ul>
        </>

    );
};
