import React from "react";
import { useState } from "react";
import Link from "next/link";
import { Inter } from "next/font/google";

import styles from "./Sidebar.module.css";

import Button from "../Pruebas/Button";

import PersonalCard from "../Pruebas/Card";

import Post from "../Posts/PrimerPost";
import { FaBeer, FaArrowRight, FaJava } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";



export default function Sidebar({ children }) {
 
  return (
    <>
  


          <Button id="b1">
            <AiFillGithub href="a" size={60}></AiFillGithub>
          </Button>

          <Button id="b2">
            <FaArrowRight href="a" size={60}></FaArrowRight>
          </Button>

          <Button id="b3">
            <FaJava href="a" size={60}></FaJava>
          </Button>

          <Button id="b4">
            <FaBeer href="a" size={60}></FaBeer>
          </Button>

          <Button id="b5">
            <AiFillGithub href="a" size={60}></AiFillGithub>
          </Button>
   
      
    </>
  );
}
