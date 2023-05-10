import React from "react";
import { useState } from "react";
import { FaBeer, FaJava } from 'react-icons/fa';
import { AiFillGithub, AiOutlineUser } from "react-icons/ai";
import { BiBody } from "react-icons/bi";
import { TbBrandNextjs } from "react-icons/tb";



import Button from "../Buttons/Button";
import Card from "./Card";

import Post from "../Posts/Post";


export default function Sidebar({ children }) {
    const [showCard, setShowCard] = useState(false);

    const handleMouseOver = () => {
        const contenido = document.getElementById("b1");
        console.log(contenido)
        setShowCard(false);
    };

    const handleMouseOut = () => {
        setShowCard(false);
    };
    {/*    */ }
    return (
        <>
            <ul id="menu">
                <a href="#t1">
                    <Button id="btn-3">{<AiOutlineUser style={{ color: 'white', fontSize: '40px' }} ></AiOutlineUser>}</Button>
                </a>
                <a href="#t2">
                    <Button id="btn-4">{<FaJava style={{ color: 'red', fontSize: '40px' }} ></FaJava>}</Button>
                </a>
                <a href="#t3">
                    <Button id="btn-5">{<TbBrandNextjs style={{ color: 'black', fontSize: '40px' }} ></TbBrandNextjs>}</Button>
                </a>
                <a href="#t4">
                    <Button id="btn-6">{<FaBeer style={{ color: 'blue', fontSize: '40px' }} ></FaBeer>}</Button>
                </a>
                <a href="#t5">
                    <Button id="btn-7">{<AiFillGithub style={{ color: 'red', fontSize: '40px' }} ></AiFillGithub>}</Button>
                </a>
            </ul>
            <Card id="p1" div="t1" ><Post>{}</Post></Card>
            <Card id="p2" div="t2" >{ }</Card>
            <Card id="p3" div="t3" >{ }</Card>
            <Card id="p4" div="t4" >{ }</Card>
            <Card id="p5" div="t5" >{ }</Card>
        </>
    );
}
