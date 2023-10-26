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
    const perso = new Personagem(name, image, tipo, tracos);
    if (!listAkatsuki.some(perso => perso.name === name)) {
      const updateList = [...listAkatsuki, perso];
      setListAkatsuki(updateList);
    }

    listAkatsukiA.addPersonagem(perso);

    setName("");
    setImage("");
    setTipo("");
    setTracos("");
  }
  const atualizar = () => {
    setRender(true)
  }
  const remove = (perso) => {
    listAkatsukiA.removeTsuki(perso);
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
        const perso = new Personagem(
          personagemData.name,
          personagemData.image,
          personagemData.tracos,
          personagemData.tipo
        );
        listAkatsukiA.addPersonagem(perso)

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
        {
          listAkatsuki && listAkatsuki.length > 0 ? (
            listAkatsuki.map((personagem) => (
              <div key={personagem.id} className={styles.cardzinho}>
                <h1 className={styles.nome}>{personagem.name}</h1>
                <p>{personagem.id}</p>
                <img className={styles.img} src={personagem.image} alt={personagem.name} />
                <p>{personagem.tracos}</p>
                <p>{personagem.tipo}</p>
                  {
                    render ? (
                    {
                    dadosApi ? (
                      dadosApi.map((info) =>
                        info.name === "Jūgo" ? (
                          null
                        ) :
                          info.name === "Kabuto Yakushi" ? (
                            null
                          ) :
                            info.name === "Karin" ? (
                              null
                            ) :
                              info.name === "Chibi" ? (
                                null
                              ) :
                                info.name === "Hinoki" ? (
                                  null
                                ) :
                                  info.name === "Hinoki" ? (
                                    null
                                  ) :
                                    info.name === "Kakuzu's Partner" ? (
                                      null
                                    ) :
                                      info.name === "Kie" ? (
                                        null
                                      ) :
                                        info.name === "Kyōya" ? (
                                          null
                                        ) :
                                          info.name === "Himeyuri" ? (
                                            null
                                          ) :
                                            info.name === "Ginji" ? (
                                              null
                                            ) :
                                              info.name === "Hidan" ? (
                                                null
                                              ) :

                                                info.name === "Demonic Statue of the Outer Path" ? (
                                                  null
                                                ) :
                                                  info.name === "Daibutsu" ? (
                                                    null
                                                  ) :


                                                    (
                                                      <div className={styles.card1} key={info.id}>
                                                        <h1 className={styles.nome}>{info.name}</h1>
                                                        <p>{info.id}</p>
                                                        {
                                                          info.images.map((img) => (
                                                            <img className={styles.img} src={info.images} width={400} height={400} />
                                                          ))
                                                        }

                                                        {
                                                          !info.natureType ? (
                                                            null
                                                          ) :
                                                            info.natureType.map((tipo) =>
                                                            (
                                                              <p className={styles.descricao}>Natureza: {tipo}</p>
                                                            ))
                                                        }
                                                        {
                                                          !info.uniqueTraits ? (
                                                            null
                                                          ) :
                                                            info.uniqueTraits.map((tracos) =>
                                                            (
                                                              <p className={styles.descricao}>Traços únicos: {tracos}</p>
                                                            ))
                                                        }



                                                      </div>
                    }
                  )


                  )

                  )
                  ) : (
                  <P></P>
                  )
                }
                
                <button className={styles.excluir} onClick={() => remove(personagem.id)}>Excluir</button>
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