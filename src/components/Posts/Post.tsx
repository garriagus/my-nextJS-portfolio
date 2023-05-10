import styles from './Post.module.css'
import Image from 'next/image';
import Profile from './../../../public/profile.jpg';

export default function Post({ children, ...props }) {
    {/*    */ }
    return (
        <>
            <div id={styles.body}>
                <div className={styles.box}>

                    <div className={styles.card}>
                        <Image
                            src={Profile}
                            width={500}
                            height={500}
                            alt="Picture of the author"
                        />
                       FullStack Developer 
                    </div>
                    <a href="https://github.com/garriagus/" target="_blank">GitHub</a>

                    <h1>Agustín Garrido</h1>
                    <h5>Java & Spring Boot <br /> React & Next Js</h5>
                    <p>Soy Licenciado en Gestión Operativa de Construcciones Inteligentes y utilizo tecnologías como Java con Spring Boot y Next Js para realizar aplicaciones web.
                        También realizo proyectos IoT para domótica, en los cuales utilizo C++, Node Red, mqtt, influx y Mongodb.
                    </p>
                    <ul className={styles.ul}>
                        <li><a href="https://twitter.com/" target="_blank"><i className="fab fa-twitter-square"></i></a></li>
                        <li><a href="https://codepen.io/" target="_blank"><i className="fab fa-codepen"></i></a></li>
                        <li><a href="https://www.youtube.com/" target="_blank"><i className="fab fa-youtube"></i></a></li>
                    </ul>
                </div>
            </div>
        </>
    );
}
