export class Musica {
    id!:string;
    nombre!:string;
    artista!:string;
    img!:string;

    constructor(id:string, nombre:string, artista:string, img:string){
        this.id = id;
        this.nombre = nombre;
        this.artista = artista;
        this.img = img;
    }
}
