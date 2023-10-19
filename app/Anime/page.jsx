'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Personagem from '@/data/anime'
import styles from './page.module.css'

function Anime() {

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
                        info.name === "Hinoki" ? (
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


                                            </div>
                                        )


                    )

                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </div>
    );
}

export default Anime;