import { useState } from 'react';
import styles from './Footer.module.css';
import { TbH1 } from 'react-icons/tb';

export default function Footer({ children, ...props }) {
  const [showCard, setShowCard] = useState(false);

  const handleMouseOver = () => {
    setShowCard(true);
  };

  const handleMouseOut = () => {
    setShowCard(false);
  };

  return (
    <>
    <div className={styles.navbar}>
  <div className={styles["start-menu"]}>
    <button className={styles["start-btn"]}></button>
    <div className={styles["start-menu-items"]}>
      <ul>
        <li><a href="#">Programa 1</a></li>
        <li><a href="#">Programa 2</a></li>
        <li><a href="#">Programa 3</a></li>
        <li><a href="#">Programa 4</a></li>
      </ul>
    </div>
  </div>
  <div className={styles["navbar-icons"]}>
    <ul>
      <li><a href="#">Cortana</a></li>
      <li><a href="#">Buscar</a></li>
      <li><a href="#">Escritorio</a></li>
      <li><a href="#">Edge</a></li>
      <li><a href="#">Tienda</a></li>
      <li><a href="#">Configuración</a></li>
      <li><a href="#">Usuario</a></li>
    </ul>
  </div>
</div>
      <div className={styles.cardas}>
      {showCard && <h1>hola</h1>}
</div>
    </>
  );
};