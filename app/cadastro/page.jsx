'use client'
import React, { useEffect, useState } from 'react'
import { Personagem } from '../../models/akatsuki'
import ListAkatsuki from '../../models/akatsukiList'
import ApiDataAnime from '../../data/anime'
import styles from '@/app/page.module.css'
import Header from '@/app/components/header/Header';
import Footer from '@/app/components/footer/Footer';

const listAkatsukiA = new ListAkatsuki();

export default function Cadastro() {
  const [listAkatsuki, setListAkatsuki] = useState([]);
  const [apiData, setApiData] = useState(null);
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [tipo, setTipo] = useState("");
  const [tracos, setTracos] = useState("");
  const [render, setRender] = useState(false);

  const criarPersonagem = () => {
    const newCH = new Personagem(name, image, tipo, tracos);
    if (!listAkatsuki.some(personagem => personagem.name === name)) {
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
    listAkatsukiA.removeTsuki(personagem)
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
    if (apiData && apiData.data) {
      apiData.data.forEach((personagemData) => {
        const novop = new Personagem(
          personagemData.name,
          personagemData.image,
          personagemData.tracos,
          personagemData.tipo
        );
        listAkatsukiA.addPersonagem(novop)

      });
      const updatePerso = [...listAkatsuki, ...listAkatsukiA.getListaTsuki()];
      setListAkatsuki(updatePerso)
    }
  }, [apiData]);

  return (
    <>
      <Header />
      <div className={styles.tudo}>
        <h1 className={styles.titulo}>Cadastro</h1>
        <div className={styles.card}>
          <input type='text' placeholder='Nome do personagem' value={name} onChange={(p) => setName(p.target.value)} />
          <input type='text' placeholder='URL da imagem' value={image} onChange={(p) => setImage(p.target.value)} />
          <input type='text' placeholder='Natureza' value={tipo} onChange={(p) => setTipo(p.target.value)} />
          <input type='text' placeholder='Traços únicos' value={tracos} onChange={(p) => setTracos(p.target.value)} />
        </div>
        <button onClick={criarPersonagem}>Adicionar Personagem</button>
      </div>
      <ul className={styles.ul}>
        {listAkatsuki && listAkatsuki.length > 0 ? (
          listAkatsuki.map((personagem) => (
            <div key={personagem.id} className={styles.cardzinho}>
              <h1 className={styles.nome}>{personagem.name}</h1>
              <img className={styles.img} src={personagem.image} alt={personagem.name} />
              <p>{personagem.tracos}</p>
              <p>{personagem.tipo}</p>
              <button onClick={() => remove(personagem)}>Excluir</button>
            </div>
          ))
        ) : (
          <p></p>
        )}
      </ul>
      <Footer />
    </>
  )
}