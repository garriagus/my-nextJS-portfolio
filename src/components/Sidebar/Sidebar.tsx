import React from "react";
import { useState } from "react";
import Image from 'next/image'
import { Inter } from 'next/font/google'

import Link from 'next/link'
import { FaBeer, FaArrowRight, FaJava } from 'react-icons/fa';
import { AiFillGithub } from "react-icons/ai";
import { BiBody } from "react-icons/bi";
import { TbBrandNextjs } from "react-icons/tb";


import styles from "./Sidebar.module.css";

import Button from "../Buttons/Button";

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
           <div className="ct" id="t1">
                <div className="ct" id="t2">
                    <div className="ct" id="t3">
                        <div className="ct" id="t4">
                            <div className="ct" id="t5">
                                <ul id="menu">
                                    <a href="#t1">
                                        <li className="icon fa fa-bolt" id="uno">
                                            <Button id="btn-3">{<BiBody style={{ color: 'white', fontSize: '40px' }} ></BiBody>}</Button>
                                        </li>
                                    </a>
                                    <a href="#t2">
                                        <li className="icon fa fa-keyboard-o" id="dos">
                                            <Button id="btn-4">{<FaJava style={{ color: 'red', fontSize: '40px' }} ></FaJava>}</Button>
                                        </li>
                                    </a>
                                    <a href="#t3">
                                        <li className="icon fa fa-rocket" id="tres">
                                            <Button id="btn-5">{<TbBrandNextjs style={{ color: 'black', fontSize: '40px' }} ></TbBrandNextjs>}</Button>
                                        </li>
                                    </a>
                                    <a href="#t4">
                                        <li className="icon fa fa-dribbble" id="cuatro">
                                            <Button id="btn-6">{<FaBeer style={{ color: 'blue', fontSize: '40px' }} ></FaBeer>}</Button>
                                        </li>
                                    </a>
                                    <a href="#t5">
                                        <li className="icon fa fa-plus-circle" id="cinco">
                                            <Button id="btn-7">{<AiFillGithub style={{ color: 'red', fontSize: '40px' }} ></AiFillGithub>}</Button>
                                        </li>
                                    </a>
                                </ul>
                             <Post>{}</Post>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


    </>
  );
}
