"use client";
class ListAkatsuki{
    constructor(){
        this.listAkatsuki = [];
    }
    addPersonagem(personagem){
        this.listAkatsuki.push(personagem);
    }

    addApiData(lista) {
        this.listAkatsuki = this.listAkatsuki.concat(lista);
    }

    getListaTsuki(){
        return this.listAkatsuki
    }
    
    getListaPorId(id){
        return this.listAkatsuki.find((personagem) => personagem.id == id);
    }

    removeTsuki(personagem){
        const listarPersonagem = (this.listAkatsuki = this.listAkatsuki.filter((info) => info.id != personagem.id));
        this.atualizarLista();

        return listarPersonagem;
    }
    atualizarLista(){
       this.name = ""
       this.img = ""
       this.tipo = ""
       this.tracos = "" 
    }


}
export default ListAkatsuki