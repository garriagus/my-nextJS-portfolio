import React from "react";
import { useState } from "react";
import Link from "next/link";
import { Inter } from "next/font/google";

import styles from "./Post.module.css";

import Image from "next/image";
import SidebarButton from "../Pruebas/SidebarButtons";

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

export default function Post({ children, ...props }) {
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

            <div id={styles[props.id]} className={styles.parent}>1
             
                <div id={styles[props.id]} className={styles.div1}>
                    {children}
                </div>
                <div id={styles[props.id]} className={styles.div2}>
                Soy autodidacta en este maravilloso mundo de la programación.
        Utilizo tecnologías como React y Java.
        Tengo 27 años, actualmente vivo en Argentina.        
        Soy Licenciado en Gestión Operativa de Construcciones Inteligentes.
        Soy el autor de esta pagina,  
                </div>
            </div>
        </>
    );
}