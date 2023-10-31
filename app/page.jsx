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
  const [status, setstatus] = useState("");
  const [render, setRender] = useState(true);
  const [flag, setFlag] = useState(0);

  // const addAPI = async () => {
  //   const data = await Akatsuki();

  //   data.map((personagem) => {
  //     const novoPersonagem = new Personagem(
  //       personagem.name,
  //       personagem.imagem,
  //       personagem.tracos,
  //       personagem.Natureza
  //     );
  //     instanciaLista.addPersonagem(novoPersonagem);
  //   });
  //   const updatePersonagem = [...listaPersonagem, ...instanciaLista.getListaPersonagem()];
  //   setListaPersonagem(updatePersonagem);
  // }

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
    setstatus("");
    setvoiceActors("");

    // const excludedCharacters = [
    //   "Jūgo",
    //   "Kabuto Yakushi",
    //   "Karin",
    //   "Chibi",
    //   "Hinoki",
    //   "Kakuzu's Partner", 
    //   "Kie",
    //   "Kyōya",
    //   "Himeyuri",
    //   "Ginji",
    //   "Hidan",
    //   "Demonic Statue of the Outer Path",
    //   "Daibutsu",
    // ];

    // return listaPersonagem.filter(personagem => !excludedCharacters.includes(personagem.name));
  }


  // const edit = (id) => {
  //   atualizar();
  //   const criacao = instanciaLista.getPersongameById(id);
  //   if (criacao) {
  //     setName(criacao.name);
  //     setImagem(criacao.imagem);
  //     setNatureza(criacao.Natureza);
  //     setFlag(id);
  //     setEditButton(true);
  //   }
  // }
  const atualizar = () => {
    setName("");
    setImagem("");
    setstatus("");
    setFlag(0);
  }

  const deletarPersonagem = (personagem) => {
    atualizar();
    instanciaLista.excludePersonagem(personagem);
    setListaPersonagem(instanciaLista.getListaPersonagem());
  }

  useEffect(() => {
    let ignore = false


    const addAPI = async () => {
      const data = await Akatsuki();

      if (!false) {
        data.map((personagem) => {
          const novoPersonagem = new Personagem(
            personagem.name,
            personagem.images[0],
            personagem.personal.status,
          );
          instanciaLista.addPersonagem(novoPersonagem);
        });
      }
      const updatePersonagem = [...listaPersonagem, ...instanciaLista.getListaPersonagem()];
      setListaPersonagem(updatePersonagem);
    }
    addAPI();
    ignore = true;
  }, [apiData]);

  return (
    <>
      <Header />
      <div className={styles.container}>
        <h1 className={styles.title}>API data:</h1>
        <button className={styles.buttonAtualizar} onClick={() => setRender(!render)}>Renderizar</button>
        <ul className={styles.ul}>
          {
            render ? (
              //listaPersonagem && listaPersonagem.length > 0 ? (
              listaPersonagem ? (



                listaPersonagem.map((personagem) => (
                  <div key={personagem.id} className={styles.card}>
                    <h2 className={styles.li}>{personagem.name}</h2>
                    <img className={styles.img} src={personagem.img} alt={personagem.name} />
                    <p>Status:{personagem.status}</p>
                    <button onClick={() => deletarPersonagem(personagem)}>Deletar</button>
                    {/* <button className={styles.buttonAtualizar} onClick={() => edit(personagem.id)}>Editar</button> */}
                  </div>
                ))) : (
                <h1></h1>
              )
            )
              : (
                <>
                  <div className={styles.forms}>
                    <input type='text' placeholder='Nome do personagem' value={name} onChange={(p) => setName(p.target.value)} />
                    <input type='text' placeholder='URL da imagem' value={imagem} onChange={(p) => setImagem(p.target.value)} />
                    <input type='text' placeholder='Status' value={status} onChange={(p) => setstatus(p.target.value)} />
                    <button onClick={criarPersonagem}>Cadastrar</button>
                  </div>
                  <div className={styles.forms}>

                  </div>
                </>
              )

          }
        </ul>
      </div>
      <Footer />
    </>
  )
}




