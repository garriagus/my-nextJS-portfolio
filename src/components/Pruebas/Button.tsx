import { useState } from 'react';
import styles from './Button.module.css';
import Card from './Card';
import PersonalCard from '../../components/Posts/PersonalCard'


export default function Button({ children, ...props }) {
  const [showCard, setShowCard] = useState(false);

  const handleMouseOver = () => {
    setShowCard(true);
  };

  const handleMouseOut = () => {
    setShowCard(false);
  };
  {/*    */ }
  return (
    <>
      <div className={styles.parent}
        onMouseEnter={handleMouseOver}
        onMouseLeave={handleMouseOut}>
        <div className={styles.button}>
          <button id={styles[props.id]} className={styles.button}>
            {children}
          </button>
        </div>
        <div className={styles.cardContainer}>
          <div className={styles.content}>
            {showCard && <PersonalCard id={styles[props.id]}>{ }</PersonalCard>}
          </div>
        </div>
      </div>
    </>
  );
};