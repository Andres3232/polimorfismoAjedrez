
import Pieza from "./pieza"

 class PiezaAjedrez extends Pieza{

    protected color: string;
    
    constructor(nombre: string, color: string){
        super(nombre)
        this.color = color;
  
    }

    moverse():string{
        if ( this.nombre.toLowerCase() === "caballo") return "Me muevo en L"
        if ( this.nombre.toLowerCase() === "alfil") return "Me muevo en Diagonal"
        if ( this.nombre.toLowerCase() === "torre") return "Me muevo en Horizontal y Vertical"
        if ( this.nombre.toLowerCase() === "reina") return "Me muevo por donde quiero"
        if ( this.nombre.toLowerCase() === "rey") return "Me muevo en todas las diracciones pero solo un casillero"
        if ( this.nombre.toLowerCase() === "peon") return "Me muevo en para adelante"



    }

};


export default PiezaAjedrez