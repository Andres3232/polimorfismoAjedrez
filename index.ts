import Tablero from './tablero';

import Pieza from './pieza';
import PiezaAjedrez from './PiezaAjedrez';







const caballo = new PiezaAjedrez("caballo","blanco")
const alfil = new PiezaAjedrez("alfil","blanco")
const torre = new PiezaAjedrez("torre","blanco")
const reina = new PiezaAjedrez("reina","blanco")


const tablero:PiezaAjedrez[] = []

tablero.push(caballo);
tablero.push(alfil);
tablero.push(torre);
tablero.push(reina);



for (let pieza of tablero){
    console.info (pieza.moverse())
}






// const PiezasDeAjedrez: Pieza[] = [];

// PiezasDeAjedrez.push(new Caballo("Caballo", "Negro"));
// PiezasDeAjedrez.push(new Perro(4, "Salchica"));
// animales.push(new Gato(4, "Siames"));

// for(let animal of animales) {
//     console.info(animal.saludame("Pepe Grillo"));
// }
