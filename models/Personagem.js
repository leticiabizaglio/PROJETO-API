class Personagem {
    constructor(name, img, natureza){
        this.id = this.generateId();
        this.name = name;
        this.img = img;
        this.natureza = natureza;
    }
    generateId(){
        return Math.floor(Math.random() * 1000)
    }
}
export default Personagem
