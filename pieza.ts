abstract class Pieza {

    protected nombre: string;
    
    constructor(nombre: string){
        this.nombre = nombre;
  
    }

    abstract moverse():any;

}
export default Pieza