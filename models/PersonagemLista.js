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
        const person = this.listaPersonagem.find((personagem) => personagem.id === id);
       // console.log("No método");
       // console.log(id);
        return person
    }

    removerDuplicados() {
        this.listaPersonagem = this.listaPersonagem.filter((person, index, self) => index === self.findIndex((p) => p.name === person.name))
    }

    atualizarLista(id, name, img, status) {
        const criar = this.getPersongameById(id);
    
        if (criar) {
          criar.name = name;
          criar.img = img;
          criar.status = status;
        }
    
       // this.atualizarLista();
    
        return criar;
      }
    


}
export default ListaPersonagem