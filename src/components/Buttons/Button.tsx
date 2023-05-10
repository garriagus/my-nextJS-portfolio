import React from "react";
import styles from "./Buttons.module.css";

export default function Button({ children, ...props }) {

    // 1. Al llamar al Button, pasar el id con formato id="btn-15" para darle estilo.
    // 2. El children será el contenido dentro del bontón
    // 3. Ejemplo...
    // <Button id="btn-15">{    <FaBeer style={{color: 'red', fontSize: '40px'}} ></FaBeer>}</Button>
    //____________________________________


    // Funciones:      onMouseEnter={handleMouseEnter}         onMouseLeave={handleMouseLeave}
  const handleMouseEnter = (e) => {
    //const prueba = document.getElementById(styles.x1);
    //console.log(props.id);
  };
  const handleMouseLeave = (e) => {
    //console.log("soy un boton");
  };

  return (
    <>
   
       <div className={`${styles["custom-btn"]} ${styles[props.id]} ${styles["button"]} `}    
       >{children}</div>

    </>
  );
}


