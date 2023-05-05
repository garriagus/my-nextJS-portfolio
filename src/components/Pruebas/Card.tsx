import styles from './Card.module.css';
import Image from 'next/image';
import Img from '../../../public/explosion.webp';


const Card = () => {
  return (
    <div className={styles.card}>
             <Image className={styles.image}
        src={Img} 
        alt="Foto"
        width={500}
        height={500}
          ></Image>
      <div className={styles.textContainer}>
        <h2>Nombre Apellido</h2>
        <h3>Título profesional</h3>
        <p>Descripción breve sobre mí.</p>
        <p>Correo electrónico: correo@ejemplo.com</p>
        <p>Teléfono: 555-5555</p>
      </div>
    </div>
  );
};

export default Card;
