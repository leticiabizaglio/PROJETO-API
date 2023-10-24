"use client";
class ListAkatsuki{
    constructor(){
        this.listAkatsuki = [];
    }
    getListaTsuki(){
        return this.listAkatsuki
    }
    removeTsuki(personagem){
       this.listAkatsuki =this.listAkatsuki.filter(info => info.id !== personagem.id);
    }
}
export default ListAkatsuki