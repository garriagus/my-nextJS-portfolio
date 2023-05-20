import React, { ReactNode } from "react";
import styles from "./Post.module.css";
export default function Contact({ children, ...props }) {

    return (
        <>
            <section className={styles["content-card"]} id="contact">
                <h1>Contact</h1>
                <form
                    className={styles.form}
                    id="form"
                    action="https://www.freecodecamp.com/email-submit"
                >
                    <div className={styles["input-box"]}>
                        <input
                            type="text"
                            className={styles["text-input"]}
                            name="name"
                            placeholder="Name"
                        />
                    </div>
                    <div className={styles["input-box"]}>
                        <input
                            type="email"
                            className={styles["text-input"]}
                            name="email"
                            id="email"
                            placeholder="Email"
                        />
                    </div>
                    <div className={styles["input-box"]}>
                        <input
                            type="subject"
                            className={styles["text-input"]}
                            name="subject"
                            id="subject"
                            placeholder="Subject"
                        />
                    </div>
                    <div className={styles["input-box"]}>
                        <textarea name="text" className={styles["message"]}>
                            placeholder="Message..."
                        </textarea>
                    </div>
                    <div className={styles["input-box"]}>
                        <input
                            type="submit"
                            className={styles["submit-btn"]}
                            id="submit"
                            value="submit"
                        ></input>
                    </div>
                </form>
            </section>

        </>
    );
}