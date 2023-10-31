"use client"
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
  const [name, setName] = useState("");
  const [imagem, setImagem] = useState("");
  const [status, setStatus] = useState("");
  const [render, setRender] = useState(true);

  const criarPersonagem = () => {
    atualizar();
    const novoPersonagem = new Personagem(name, imagem, status);
    if (!listaPersonagem.some(personagem => personagem.name === name)) {
      const updatePersonagem = [...listaPersonagem, novoPersonagem];
      setListaPersonagem(updatePersonagem);
    }
    instanciaLista.addPersonagem(novoPersonagem);
    setName("");
    setImagem("");
    setStatus("");
  }

  const atualizar = () => {
    setName("");
    setImagem("");
    setStatus("");
  }

  const deletarPersonagem = (personagem) => {
    atualizar();
    instanciaLista.excludePersonagem(personagem);
    setListaPersonagem(instanciaLista.getListaPersonagem());
  }

  useEffect(() => {
    const addAPI = async () => {
      const data = await Akatsuki();

      data.map((personagem) => {
        const novoPersonagem = new Personagem(
          personagem.name,
          personagem.images[0],
          personagem.personal.status,
        );
        instanciaLista.addPersonagem(novoPersonagem);
      });

      const updatePersonagem = [...listaPersonagem, ...instanciaLista.getListaPersonagem()];
      setListaPersonagem(updatePersonagem);
    }
    addAPI();
  }, []);

  return (
    <>
      <Header />
      <div className={styles.container}>
        <h1 className={styles.title}>API data:</h1>

        {render ? (
          <>
            <button onClick={() => setRender(!render)} className={styles.Renderbutton}>ICON 2</button>
            {listaPersonagem && (
              listaPersonagem.map((personagem) => (
                <div key={personagem.id} className={styles.card}>
                  <h2 className={styles.li}>{personagem.name}</h2>
                  <img className={styles.img} src={personagem.img} alt={personagem.name} />
                  <p>Status: {personagem.status}</p>
                  <button onClick={() => deletarPersonagem(personagem)} className={styles.button}>Deletar</button>
                </div>
              ))
            )}
           
          </>
        ) : (
          <>
           <button onClick={() => setRender(!render)} className={styles.Renderbutton}>ICON 1</button>
            <div className={styles.forms}>
              <input type='text' placeholder='Nome do personagem' value={name} onChange={(p) => setName(p.target.value)} />
              <input type='text' placeholder='URL da imagem' value={imagem} onChange={(p) => setImagem(p.target.value)} />
              <input type='text' placeholder='Status' value={status} onChange={(p) => setStatus(p.target.value)} />
              <button onClick={criarPersonagem} className={styles.button}>Cadastrar</button>
            </div>
            <div className={styles.forms}></div>
          </>
        )}
      </div>
      <Footer />
    </>
  )
}