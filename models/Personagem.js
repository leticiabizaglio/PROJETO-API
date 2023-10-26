class Personagem {
    constructor(name, img, tracos, tipos){
        this.id = this.generateId();
        this.name = name;
        this.img = img;
        this.tracos = tracos;
        this.tipos = tipos;
    }
    generateId(){
        return Math.floor(Math.random() * 1000)
    }
}
export default Personagem
