'use client'
import React, { useEffect, useState } from 'react'
import { Personagem } from './akatsuki'
import ListAkatsuki from './akatsukiList'
import ApiDataAnime from '../data/anime'
import styles from '@/app/page.module.css'
import Header from '@/app/components/header/Header';
import Footer from '@/app/components/footer/Footer';

const listAkatsukiA = new ListAkatsuki;

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

    listAkatsukiA.addPersonagem(newCH);

    setName("");
    setImage("");
    setTipo("");
    setTracos("");
   }
   const remove = (personagem) => {
    listAkatsukiA.removeTsuki(personagem); 
    setListAkatsuki(listAkatsukiA.getListaTsuki()); 
  };

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const data = await ApiDataAnime();
        setApiData(data);
      } catch (error) {
        return error
      }
    };
    fetchdata();
  }, []);

  useEffect(() => {
    if(apiData && apiData.data){
        apiData.data.forEach((personagemData) => {
            const novop = new Personagem(
                personagemData.name,
                personagemData.image,
                personagemData.tracos,
                personagemData.tipo
            );
            listAkatsukiA.addPersonagem(novop)

        });
        const updatePerso =  [...listAkatsuki,...listAkatsukiA.getListaTsuki()];
        setListAkatsuki(updatePerso)
    }
  }, [apiData]);

  return(
    <>
    
    </>
  )
}