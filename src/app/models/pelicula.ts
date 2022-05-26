export class Pelicula {
    id!:string;
    titulo!:string;
    fecha!:string;
    img!:string;
    puntaje!:string;

    constructor(id:string, titulo:string, fecha:string, img:string, punt:string){
        this.id = id;
        this.titulo = titulo;
        this.img = img;
        this.puntaje = punt;
        this.fecha = fecha;
    }

}
