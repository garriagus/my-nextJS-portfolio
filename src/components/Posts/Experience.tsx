import styles from "./Post.module.css";

export default function Main({ children, ...props }) {
  //styles the main html tag

  return (
    <>
      <section className={styles["content-card"]} id="experience">
        <h1>Experience</h1>
        <div className={styles.timeline}>
          <div className={styles["timeline-items"]}>
            <div className={styles["timeline-item"]}>
              <div className={styles["timeline-date"]}>2022 - now</div>
              <div className={styles["timeline-content"]}>
                <h3>timeline item 1</h3>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing
                  elit. Ab iusto accusantium nostrum eligendi debitis
                  quisquam. Corporis at voluptatem culpa officia.
                </p>
              </div>
            </div>
            <div className={styles["timeline-item"]}>
              <div className={styles["timeline-date"]}>2015 - 2022</div>
              <div className={styles["timeline-content"]}>
                <h3>timeline item 2</h3>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing
                  elit. Ab iusto accusantium nostrum eligendi debitis
                  quisquam. Corporis at voluptatem culpa officia.
                </p>
              </div>
            </div>
            <div className={styles["timeline-item"]}>
              <div className={styles["timeline-date"]}>2014 - 2015</div>
              <div className={styles["timeline-content"]}>
                <h3>timeline item 3</h3>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing
                  elit. Ab iusto accusantium nostrum eligendi debitis
                  quisquam. Corporis at voluptatem culpa officia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}