import React from "react";
import { useState } from "react";
import Link from "next/link";
import { Inter } from "next/font/google";

import styles from "./Post.module.css";


import SidebarButton from "../Buttons/SidebarButtons";

interface Props {
    border: string;
    color: string;
    children?: React.ReactNode;
    height: string;
    onClick: () => void;
    radius: string
    width: string;
}


const inter = Inter({ subsets: ["latin"] });
const navItems: { label: string; page?: string; link?: string }[] = [
    { label: "Home", page: "/" },
    { label: "Blog", page: "/blog" },
    { label: "Contact", page: "/contact" },
    { label: "Source Code", link: "https://github.com/ijjk/notion-blog" },
];

export default function Post({ children, ...props}) {
    const [isNavExpanded, setIsNavExpanded] = useState(false);
    /* ejemplos de estados hoocks
        type estilos = {
            display: 'none'
        }
        const [user, setUser]=useState<estilos>({display: 'block'})*/

    /*always update state variable value by calling setStateVariable() method. 
    updating state variable value is asynchronous. You do need to depend on useEffect()
    or useCallback() to get the most updated value of a state variable. */

    /*// with no dependency

        let count = 0;

        const [stateCount, setStateCount] = useState(0);
        

        useEffect(() => {

        console.log('Execute all time, as there are no dependency');

        count = 0;

        console.log('class Variable (no dependency): ', count);

        console.log('state Variable (no dependency): ', stateCount);

}, []);*/


    // with dependency 

    /* useEffect(() => {
    
       
        
        // This code will execute everytime - when we made any change on state variable
        
        
        
        console.log('state variable has updated');
        
        console.log('state Variable (with state variable dependency): ', stateCount);
        
        }, [stateCount]); */



    const [stateVariable, setStateVariable] = useState(0);



    const handleMouseEnter = (e) => {
        const button = e.target;
        ;
        document.body.style.backgroundColor = 'blue';
        //document.body.id = 'prueba';
        const contenido = document.getElementById("prueba" + { children });

        //  console.log([isNavExpanded, setIsNavExpanded])

    }
    const handleMouseLeave = (e) => {
        const button = e.target;

        // const div = document.querySelector('#prueba');
        const contenido = document.getElementById("prueba");

        document.body.style.backgroundColor = 'green';
        //  console.log({ setIsNavExpanded })
    }

    return (
        <>

            <div className={styles.container}>
                <div className={styles.grid}>                    
                    <h1 id={styles.title}>Contenido de la página</h1>
                    <div className={styles["paragraf"]}>
                        <p>Aquí va el contenido de la página que se muestra al lado derecho de los botones.</p>
                        esto es un parrafo
                        <button className={styles["sidebar-button"]} id={styles[props.id]}
                        >{children}</button>
                    </div>     
                

                </div>
            </div>






        </>
    );
}