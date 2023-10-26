'use client'
import React, { useEffect, useState } from 'react'
import Personagem from '@/data/anime'
import styles from '@/app/page.module.css'
import Header from '@/app/components/header/Header';
import Footer from '@/app/components/footer/Footer';
import { useRouter } from 'next/navigation';
import ListAkatsuki from './akatsukiList';

const listaAka = new ListAkatsuki()

function Menu() {
  const [dadosApi, setdadosApi] = useState('');
  const router = useRouter();
  useEffect(() => {
    const AnimeFetch = async () => {
      try {
        const dados = await Personagem();
        listaAka.addApiData(dados)
        setdadosApi(listaAka.getListaTsuki());
        console.log(dados)
      } catch (e) {
        throw e;
      }
    }
    AnimeFetch()
  }, [])

  const pular = () => {
    router.push("./cadastro")
  }
  return (
    <div>
      <Header />
      <div className={styles.tudo}>
        <h1 className={styles.titulo}><strong>AKATSUKI</strong></h1>
        <button onClick={pular}>Cadastrar</button>
        <div className={styles.quasetd}>
          {dadosApi ? (
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
                                          )


            )

          ) : (
            <p>Loading...</p>
          )}





        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Menu

