'use client'
import React, { useEffect, useState } from 'react'
import Personagem from '@/data/anime'
import styles from '@/app/page.module.css'
import Header from '@/app/components/header/Header';
import Footer from '@/app/components/footer/Footer';



function Menu() {
    const [dadosApi, setdadosApi] = useState('');
    useEffect(() => {
      const AnimeFetch = async () => {
        try {
          const dados = await Personagem();
          setdadosApi(dados);
          console.log(dados)
        } catch (e) {
          throw e;
        }
      }
      AnimeFetch()
    }, [])
  return (
    <div>
      <Header/>
        <div className={styles.tudo}>
<h1 className={styles.titulo}><strong>AKATSUKI</strong></h1>
<div className={styles.quasetd}>
  {dadosApi ? (
    dadosApi.akatsuki.map((info) =>
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
  <Footer/>
</div>
</div>
    </div>
  )
}

export default Menu

