'use client'
import axios from 'axios';

const Serie = async () => {

    const URL_API = 'https://www.narutodb.xyz/api/akatsuki';
    try{
        const resposta = await axios.get(URL_API);
        return resposta.akatsuki
    } catch (error){
    throw error;
}
}
export default Serie;