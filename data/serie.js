'use client'
import axios from 'axios';

const Serie = async () => {

    const URL_API = 'https://stranger-things-api.fly.dev/api/v1/characters';
    try{
        const resposta = await axios.get(URL_API);
        return resposta.data
    } catch (error){
    throw error;
}
}
export default Serie;