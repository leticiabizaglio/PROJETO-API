'use client'
import React, { useEffect, useState } from "react";
import Header from '@/app/components/header/Header';
import Footer from '@/app/components/footer/Footer';
import styles from '@/app/page.module.css'
import Personagem from "@/models/Personagem";
import ListaPersonagem from "@/models/PersonagemLista";
import Akatsuki from "@/data/akatsuki";

const instanciaLista = new ListaPersonagem();

export default function Home() {
  const [listaPersonagem, setListaPersonagem] = useState([]);
  const [apiData, setApiData] = useState(null);
  const [name, setName] = useState("");
  const [imagem, setImagem] = useState("");
  const [tracos, setTracos] = useState("");
  const [tipos, setTipos] = useState("");
  const [render, setRender] = useState(false);
  const [editButton, setEditButton] = useState(false);
  const [flag, setFlag] = useState(0);

  const criarPersonagem = () => {
    const novoPersonagem = new Personagem(name, imagem, tracos, tipos);
    if (!listaPersonagem.some(personagem => personagem.name === name)) {
      const updatePersonagem = [...listaPersonagem, novoPersonagem];
      setListaPersonagem(updatePersonagem);
    }
    instanciaLista.addPersonagem(novoPersonagem);
    setName("");
    setImagem("");
    setTracos("");
    setTipos("");

  };
  const edit = () =>{
    const criacao = instanciaLista.getPersongameById(id);
    if (criacao){
      setName(criacao.name);
      setImagem(criacao.imagem);
      setTracos(criacao.tracos);
      setTipos(criacao.tipos);
      setFlag(id);
      setEditButton(true);
    }
  }
  const atualizar = () => {
    instanciaLista.updatePersonagem(flag, name, imagem, tracos, tipos);
    setName("");
    setImagem("");
    setTracos("");
    setTipos("");
    setFlag(0);
    setEditButton(false);
  }

  const deletarPersonagem = (personagem) => {
    instanciaLista.excludePersonagem(personagem);
    setListaPersonagem(instanciaLista.getListaPersonagem());
  }
  useEffect(() => {
    const getApi = async () => {
      try {
        const data = await Akatsuki();
        setApiData(data)
      } catch (error) {
        return error
      }
    };
    getApi();
  }, []);

  useEffect(() => {
    if (apiData && apiData.data) {
      apiData.data.forEach((personagem) => {
        const novoPersonagem = new Personagem(
          personagem.name,
          personagem.imagem,
          personagem.tracos,
          personagem.tipos
        );
        instanciaLista.addPersonagem(novoPersonagem);
      });
      const updatePersonagem = [...listaPersonagem, ...instanciaLista.getListaPersonagem()];
      setListaPersonagem(updatePersonagem);
    }
  }, [apiData]);

  return (
    <>
      <Header />
      <div className={styles.container}>
        <h1 className={styles.title}>API data:</h1>
        <div className={styles.forms}>
          <input type='text' placeholder='Nome do personagem' value={name} onChange={(p) => setName(p.target.value)} />
          <input type='text' placeholder='URL da imagem' value={imagem} onChange={(p) => setImagem(p.target.value)} />
          <input type='text' placeholder='Traços Únicos' value={tracos} onChange={(p) => setTracos(p.target.value)} />
          <input type='text' placeholder='Natureza' value={tipos} onChange={(p) => setTipos(p.target.value)} />
          <button onClick={criarPersonagem}>Cadastrar</button>
        </div>
        <div className={styles.forms}>
      
        </div>
        <ul className={styles.ul}>
          {
            listaPersonagem && listaPersonagem.length > 0 ? (
              listaPersonagem.map((personagem) => (
                <div key={personagem.id} className={styles.card}>
                  <h2 className={styles.li}>{personagem.name}</h2>
                  <img className={styles.img} src={personagem.img} alt={personagem.name} />
                  <p className={styles.info}>{personagem.tracos}</p>
                  <p className={styles.info}>{personagem.tipos}</p>
                  <button onClick={() => deletarPersonagem(personagem)}>Deletar</button>
                </div>
              ))
              
            ) : (
              <h1></h1>
            )
          }
          {
             editButton ? (
                        <button className={styles.buttonAtualizar} onClick={edit}>Editar</button>
                    ) : (
                        <>
                        <p>jksnbkjdfdsbjkbsajkfbakjnfkj</p>
                        </>
                    )
                    }
        </ul>
      </div>
      <Footer />
    </>
  )
}




