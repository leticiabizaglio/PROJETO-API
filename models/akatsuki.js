"use client"
export class Personagem{
    constructor(name, img, tipo, tracos){
        this.id = this.gerarId();
        this.name = name;
        this.img = img;
        this.tipo = tipo;
        this.tracos = tracos;
    }

    gerarId(){
        return Math.floor(Math.random() * 1000)
    }
}