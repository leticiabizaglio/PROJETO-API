class Personagem {
    constructor(name, img, status){
        this.id = this.generateId();
        this.name = name;
        this.img = img;
        this.status = status;
    }
    generateId(){
        return Math.floor(Math.random() * 1000)
    }
}
export default Personagem
