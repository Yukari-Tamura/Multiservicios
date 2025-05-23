export class Productos {

    constructor() {
        this.id = 0;
        this.nombre = '';
        this.descripcion = '';
        this.categoria = '';
        this.imagen = '';
        this.precio = 0;
        this.stock = 0;
    }

    id?:number;
    nombre?:string;
    descripcion?:string;
    categoria?:string;
    imagen?:string;
    precio?:number;
    stock?:number;
}