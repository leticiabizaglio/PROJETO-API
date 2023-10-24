'use client'
import React, { useEffect, useState } from 'react'
import { Personagem } from './akatsuki'
import ListAkatsuki from './akatsukiList'
import ApiData from '../data/anime'
import styles from '@/app/page.module.css'
import Header from '@/app/components/header/Header';
import Footer from '@/app/components/footer/Footer';

const listAkatsuki = new ListAkatsuki;

export default function Cadastro() {
    const [listAkatsuki, setListAkatsuki] = useState([]); 
    const [apiData, setApiData] = useState(null);
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [tipo, setTipo] = useState("");
    const [tracos, setTracos] = useState("");
    const [render, setRender] = useState(false);

   const criarPersonagem = () =>{
    const newCH = new Personagem(name, image, tipo, tracos);
    if(!listAkatsuki.some(personagem => personagem.name === name)){
        const updateList = [...listAkatsuki, newCH];
        setListAkatsuki(updateList);
    }

    listAkatsuki.addPersonagem(newCH);

    setName("");
    setImage("");
    setTipo("");
    setTracos("");
   }
   const remove = (personagem) => {
    instanciaLista.removeTsuki(personagem); 
    setListAkatsuki(instanciaLista.getListaTsuki()); 
  };

  const apidata = new ApiData();
  useEffect(() => {
    const apidata = async () => {
      try {
        const data = await apiData();
        setApiData(data);
      } catch (error) {
        <p>ERROR</p>
      }
    };
    apidata();
  }, []);


    <>
    </>
}