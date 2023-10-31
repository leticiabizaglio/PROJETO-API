'use client'
import React, {useEffect, useState} from "react";
import Header from '@/app/components/header/Header';
import Footer from '@/app/components/footer/Footer';
import styles from '@/app/page.module.css'
import Personagem from "@/models/Personagem";
import ListaPersonagem from "@/models/PersonagemLista";
import Akatsuki from "@/data/akatsuki";

const instanciaLista = new ListaPersonagem();

export default function Home(){
  const [listaPersonagem, setListaPersonagem] = useState([]);
  
}