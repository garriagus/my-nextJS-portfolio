import React, { ReactNode } from "react";
import styles from "./Post.module.css";

export default function About({ children, ...props }) {
  //styles the main html tag

  return (
    <>
      <section id="about">
        <div className={`${styles["content-card"]}`}>
          <h1 id={styles.h1}>Sobre mi</h1>
          <div className={`${styles["about-item"]} ${styles["about-me"]}`}>
            <p>
              Soy un apasionado desarrollador Full Stack con experiencia en la creación de aplicaciones web modernas y escalables. 
              Mi enfoque principal es convertir ideas en soluciones completas utilizando una combinación de tecnologías de vanguardia. 
              Tengo sólidos conocimientos en Java y el framework Spring Boot para el desarrollo del backend, mientras que en el frontend, 
              utilizo React.js y Next.js para construir interfaces de usuario atractivas y dinámicas.
              Con habilidades tanto en el lado del servidor como en el lado del cliente, puedo diseñar y desarrollar aplicaciones web completas 
              que brindan una experiencia fluida a los usuarios. Mi objetivo es ofrecer soluciones eficientes y de alta calidad, 
              optimizando el rendimiento y la usabilidad. Siempre estoy buscando aprender nuevas tecnologías y mantenerme actualizado 
              con las últimas tendencias en desarrollo web. Trabajo bien en equipos multidisciplinarios y me apasiona colaborar en proyectos desafiantes.
              Estoy entusiasmado por enfrentar nuevos retos y utilizar mi experiencia en Java, Spring Boot, React.js y Next.js para crear aplicaciones 
              web innovadoras y exitosas.Recuerda personalizar este modelo según tus propias habilidades, experiencia y preferencias.
            </p>
            <p>
             _______________________
            </p>
          </div>
          <div className={styles["col-2"]}>
            <div className={`${styles["about-item"]}`}>
              <h1 id={styles.h1}>Skills</h1>
              <span className={`${styles.skill}`}>HTML</span>
              <span className={`${styles.skill}`}>CSS</span>
              <span className={`${styles.skill}`}>JavaScript</span>
              <span className={`${styles.skill}`}>Node.js</span>
              <span className={`${styles.skill}`}>React</span>
              <span className={`${styles.skill}`}>SQL</span>
              <span className={`${styles.skill}`}>Git</span>
              <span className={`${styles.skill}`}>API</span>
              <span className={`${styles.skill}`}>Unix/Linux</span>
              <span className={`${styles.skill}`}>Jira</span>
              <span className={`${styles.skill}`}>Confluence</span>
              <span className={`${styles.skill}`}>Figma</span>
            </div>
            <div className={`${styles["about-item"]} ${styles["languages"]}`}>
              <h1 id={styles.h1}>Languages</h1>
              <div className={styles.language}>
                <p>Español</p>
                <span className={styles.bar}>
                  <span className={styles.polish}></span>
                </span>
              </div>
              <div className={styles.language}>
                <p>Ingles</p>
                <span className={styles.bar}>
                  <span className={styles.english}></span>
                </span>
              </div>
              <div className={styles.language}>
                <p>Italiano</p>
                <span className={styles.bar}>
                  <span className={styles.french}></span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
