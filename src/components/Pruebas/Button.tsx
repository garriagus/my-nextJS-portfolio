import { useState } from 'react';
import styles from './Button.module.css';
import Card from './Card';

const Button = ({ children }) => {
  const [showCard, setShowCard] = useState(false);

  const handleMouseOver = () => {
    setShowCard(true);
  };

  const handleMouseOut = () => {
    setShowCard(false);
  };

  return (
    <button className={styles.button} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      {children}
      {showCard && <Card />}
    </button>
  );
};

export default Button;
