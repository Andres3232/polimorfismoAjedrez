
import Pieza from "./pieza"

abstract class Tablero {
    protected largo: number
    protected ancho: number
    protected piezas : Pieza []


    constructor (largo:number, ancho: number){
        this.largo = largo;
        this.ancho = ancho;
        this.piezas = [];
    }


}


export default Tablero