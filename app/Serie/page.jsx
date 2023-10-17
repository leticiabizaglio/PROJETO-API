'use client'
import React, { useEffect, useState } from 'react'
import Personagem from '@/data/serie'
import styles from './page.module.css'

function Serie() {

    const [dadosApi, setdadosApi] = useState('');
    useEffect(() => {
        const SerieFetch = async () => {
            try {
                const dados = await Personagem();
                setdadosApi(dados);
                console.log(dados)
            } catch (e) {
                throw e;
            }
        }
        SerieFetch()
    }, [])
    return (
        <div className={styles.tudo}>
            <h1 className={styles.titulo}>STRANGER THINGS</h1>
            <div className={styles.quasetd}>
                {dadosApi ? (
                    dadosApi.map((info) =>
                        info.name === "Sam Mayfield" ? (
                            null
                        ) :
                        info.name === "Saint John" ? (
                            null
                        ) :
                        info.name === "Mr. Holland" ? (
                            null
                        ) :
                        info.name === "Martin Brenner" ? (
                            null
                        ) :
                        info.name === "Mrs. Walsh" ? (
                            null
                        ) :
                        info.name === "Nerdy Tech" ? (
                            null
                        ) :
                        info.name === "Chester" ? (
                            null
                        ) :
                        info.name === "Diane" ? (
                            null
                        ) :
                        info.name === "Eugene McCorkle" ? (
                            null
                        ) :
                        
                            (
                                <div className={styles.card1} key={info._id}>
                                    <h1 className={styles.nome}>{info.name}</h1>

                                    <img className={styles.img} src={info.photo} width={400} height={400} />
                                    <p className={styles.descricao}><strong>Status: </strong>{info.status}</p>
                                    <p className={styles.descricao}><strong>Nascimento: </strong>{info.born}</p>
                                    <p className={styles.descricao}><strong>Gênero: </strong>{info.gender}</p>
                                    <p className={styles.descricao}><strong>Cor dos olhos: </strong>{info.eyeColor}</p>
                                    <p className={styles.descricao}><strong>Cor dos cabelos: </strong>{info.hairColor}</p>
                                    <p className={styles.descricao}><strong>Retratado por: </strong>{info.portrayedBy}</p>

                                    {/* <div className={styles.adicionais}>
                                    {info.map((stranger) => (
                                        <div key={stranger.aliases} className={styles.cardzinho}>
                                            <p className={styles.skillname}>{stranger.affiliation}</p>
                                            <p className={styles.skillname}>{stranger.occupation}</p>
                                            <p className={styles.skillname}>{stranger.residence}</p>
                                            <p className={styles.skillname}>{stranger.appearsInEpisodes}</p>
                                        </div>
                                    ))}
                                </div> */}
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

export default Serie;