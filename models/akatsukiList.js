"use client";
class ListAkatsuki{
    constructor(){
        this.listAkatsuki = [];
    }
    addPersonagem(personagem){
        this.listAkatsuki.push(personagem);
    }
    getListaTsuki(){
        return this.listAkatsuki
    }
    removeTsuki(personagem){
       this.listAkatsuki =this.listAkatsuki.filter(info => info.id !== personagem.id);
    }
}
export default ListAkatsuki