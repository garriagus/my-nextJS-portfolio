
import Image from 'next/image'
import { Inter } from 'next/font/google'

import Link from 'next/link'
import { FaBeer, FaArrowRight, FaJava } from 'react-icons/fa';
import { AiFillGithub } from "react-icons/ai";
import { BiBody } from "react-icons/bi";
import { TbBrandNextjs } from "react-icons/tb";
// My components
import Head from '../../components/Head/Head'
import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/Sidebar/HoverContainer'
import Footer from '../../components/Footer/Footer'
import Button from '../../components/Buttons/Button'

import Card from '../../components/Posts/PersonalCard'
const inter = Inter({ subsets: ['latin'] })

export default function PostContainer(children) {
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
                                <div className="page" id="p1">
                                    <section className="icon fa fa-bolt">
                                        <span className="title">Agustín Garrido</span>
                                        <span className="hint">Full Stack Developer<br></br>
                                            Java & React Js
                                        </span>
                                    </section>
                                </div>
                                <div className="page" id="p2">
                                    <section className="icon fa fa-bolt"><span className="title">Bolt</span><span className="hint">Like this pen to see the magic!...<br></br> Just kidding, it won't happen anything but I'll be really happy If you do so.</span></section>
                                </div>
                                <div className="page" id="p2">
                                    <section className="icon fa fa-keyboard-o">
                                        <span className="title">Java</span>
                                        <span className="hint">Aquí se encuentran mis proyectos con Java<br></br>
                                            En construcción...
                                        </span>
                                    </section>
                                </div>
                                <div className="page" id="p3">
                                    <section className="icon fa fa-rocket">
                                        <span className="title">Next Js</span>
                                        <span className="hint">Aquí se encuentran mis proyectos con Next Js<br></br>
                                            En construcción...
                                        </span>
                                        </section>
                                </div>
                                <div className="page" id="p4">
                                    <section className="icon fa fa-dribbble">
                                        <span className="title">Mis redes Sociales</span>
                                        <p className="hint">
                                            <a href="https://github.com/garriagus" target="_blank">En construccion...<span className="hint line-trough">Hecho por </span> @garriagus</a>
                                        </p>
                                        <p className="hint">Already invited by <a href="https://github.com/garriagus" target="_blank">Stan Peters</a></p>
                                    </section>
                                </div>
                                <div className="page" id="p5">
                                    <section className="icon fa fa-plus-circle">
                                        <span className="title">Github</span>
                                        <p className="hint">
                                            <span>Accede a mis repositorios de Github </span><br />
                                            <a href="https://github.com/garriagus" target="_blank">check this pprojects here</a>
                                        </p>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}
