import { Children, useState } from 'react';
import styles from './Button.module.css';
import { FaBeer, FaArrowRight, FaJava, FaIcons } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import Card from './Card';
import PersonalCard from '../../components/Posts/PersonalCard'
import { icons } from 'react-icons/lib';


export default function Button({ children, ...props }) {

  const iconTags = {
    FaBeer: ' <FaBeer/>',
    FaArrowRight: ' <FaBeer/>',
    FaJava: ' <FaBeer/>',
    FaIcons: ' <FaBeer/>',
  };

  const [showCard, setShowCard] = useState(false);

  const handleMouseOver = () => {
    setShowCard(true);
    console.log(props.icon)
  };

  const handleMouseOut = () => {
    setShowCard(false);
  };
  {/*    */ }
  return (
    <>

      <div className={styles.column}
        onMouseEnter={handleMouseOver}
        onMouseLeave={handleMouseOut}>
        <div className={styles.button}>
          <button id={styles[props.id]} className={styles.button}>

          </button>
        </div>
      </div>


      <div className={styles.div3}>
        <div className={styles.cardContainer}>
          <div className={styles.content}>
            {showCard && children}
          </div>
        </div>
      </div>
    </>
  );
};