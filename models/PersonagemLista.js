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
        this.removerDuplicados();
    }
    getListaPersonagem(){
        return this.listaPersonagem
    }
    excludePersonagem(personagem){
        this.listaPersonagem = this.listaPersonagem.filter(info => info.id !== personagem.id)
        console.log("lista de personagens", this.listaPersonagem);

    }
    getPersongameById(id){
        return this.listaPersonagem.find((personagem) => personagem.id === id);
    }

    removerDuplicados() {
        this.listaPersonagem = this.listaPersonagem.filter((person, index, self) => index === self.findIndex((p) => p.name === person.name))
    }


}
export default ListaPersonagem