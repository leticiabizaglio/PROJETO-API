"use client"
import React, { useEffect, useState } from "react";
//  import Header from '@/app/components/header/Header';
import Footer from '@/app/components/footer/Footer';
import styles from '@/app/page.module.css'
import Personagem from "@/models/Personagem";
import ListaPersonagem from "@/models/PersonagemLista";
import Akatsuki from "@/data/akatsuki";
import { BsFillTrash3Fill } from 'react-icons/bs';
import { BsFillPenFill } from 'react-icons/bs';

const instanciaLista = new ListaPersonagem();

export default function Home() {
  const [listaPersonagem, setListaPersonagem] = useState([]);
  const [name, setName] = useState("");
  const [imagem, setImagem] = useState("");
  const [status, setStatus] = useState("");
  const [render, setRender] = useState(true);
  const [flag, setFlag] = useState(0);
  const [editButton, setEditButton] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

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

  const editPersonagem = (id) => {
    atualizar();
    const criacao = instanciaLista.getPersongameById(id);

    setName(criacao.name);
    setImagem(criacao.imagem);
    setStatus(criacao.status);
    setFlag(id);
    setEditButton(true);
    setRender(!render)
  };

  const update = () => {
    instanciaLista.atualizarLista(flag, name, imagem, status);

    atualizar();
    setEditButton(false);
    setFlag(0);
  }

  const searchPersonagem = (term) => {
    const filteredPersonagens = instanciaLista.getListaPersonagem().filter(personagem => {
      return personagem.name.toLowerCase().includes(term.toLowerCase());
    });
    setListaPersonagem(filteredPersonagens);
  };

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
      {/* <Header />  */}
      <div className={styles.container}>
        <img className={styles.fundo} src="/akatsuki.png" alt="" />
        <h1 className={styles.title}>Akatsuki API:</h1>

        {render ? (
          <>
          <div className={styles.buscar}>
            <input className={styles.inputpesquisar} type="text" placeholder="Pesquisar personagem" value={searchTerm} onChange={(e) => { setSearchTerm(e.target.value); searchPersonagem(e.target.value); }} />
            </div>
            <button onClick={() => setRender(!render)} className={styles.Renderbutton}>Cadastrar</button>
            <div className={styles.space}>{listaPersonagem && (
              listaPersonagem.map((personagem) => (
                <div key={personagem.id} className={styles.card}>
                  <h2 className={styles.li}>{personagem.name}</h2>
                  <img className={styles.img} src={personagem.img} alt={personagem.name} />
                  <p>Status: {personagem.status}</p>
                  <button onClick={() => deletarPersonagem(personagem)} className={styles.button}><BsFillTrash3Fill /></button>

                  <button onClick={() => editPersonagem(personagem.id)} className={styles.button}><BsFillPenFill /></button>
                </div>
              ))
            )}
            </div>

          </>
        ) : (

          <div className={styles.cadastro}>
            <button onClick={() => setRender(!render)} className={styles.Renderbutton}>Exibir Dados</button>
            <div className={styles.cardzinho}>
              <div className={styles.forms}>
                <input className={styles.input} type='text' placeholder='Nome do personagem' value={name} onChange={(p) => setName(p.target.value)} />
                <input className={styles.input} type='text' placeholder='URL da imagem' value={imagem} onChange={(p) => setImagem(p.target.value)} />
                <input className={styles.input} type='text' placeholder='Status' value={status} onChange={(p) => setStatus(p.target.value)} />
                {editButton ? (
                  <button onClick={update} className={styles.button}>Atualizar</button>
                ) : (
                  <button onClick={criarPersonagem} className={styles.button}>Cadastrar</button>
                )}
              </div>
              <div className={styles.forms}></div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  )
}