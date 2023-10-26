'use client'
class ListaPersonagem{
    constructor(){
        this.listaPersonagem = [];
    }
    addPersonagem(personagem){
        console.log("Mandrak");
        console.log(personagem);
        this.listaPersonagem.push(personagem)
        console.log("lista de personagens", this.listaPersonagem);
    }
    getListaPersonagem(){
        return this.listaPersonagem
    }
    excludePersonagem(personagem){
        this.listaPersonagem = this.listaPersonagem.filter(info => info.id !== personagem.id)
        console.log("lista de personagens", this.listaPersonagem);

    }
}
export default ListaPersonagem