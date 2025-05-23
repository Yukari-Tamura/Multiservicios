export class Transaccion {

    constructor() {
        this.id = 0;
        this.fecha = new Date();
        this.tipoTransaccion = '';
        this.idProducto = 0;
        this.cantidad = 0;
        this.precioUnitario = 0;
        this.precioTotal = 0;
        this.detalle = '';
    }

    id?:number;
    fecha?:Date;
    tipoTransaccion?:string;
    idProducto?:number;
    cantidad?:number;
    precioUnitario?:number;
    precioTotal?:number;
    detalle?:string;
}