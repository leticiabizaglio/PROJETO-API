'use client'
import axios from 'axios';

const Akatsuki = async () => {

    const URL_API = 'https://www.narutodb.xyz/api/akatsuki';
    try{
        const resposta = await axios.get(URL_API);
        return resposta.data.akatsuki
    } catch (error){
    throw error;
}
}
export default Akatsuki;