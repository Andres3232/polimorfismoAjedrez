## **<center>Programacion II</center>**

### Profesor Hugo Diego Pacini 
#### Alumnos: Murgo, Andres - Cortinez, Emanuel. 
<br></br>
## **<center>Polimorfismo</center>**
#### **<u>Definicion</u>**
<pre>    Denominamos polimorfismo al mecanismo  que nos permite tener un metodo de una clase padre (herencia) y sobre escribirlo en la clase hija. 
</pre>
### Ejemplo Ajedrez:
 <pre>
 Selecionamos el Ajedrez, este es un juego de dos jugadores en un tablero con 32 piezas(16 para cada jugador) de seis tipos. Cada peiza se mueve de manera diferente. El objetivo del juego es dar jaque mate, esdecir, amenzar al rey del oponente con la captira hasta que sea inevitable.
 
 Tratamos las piezas rey, reina, alfil, caballlo, torre y peon como objetos; cada uno de ellos heredados de la clase Pieza. El metodo moverse() usando polimorfismo hace el movimiento correspondiente a cada pieza. 
 
 Esto permite tener un metodo con resultado diferentes dependiendo de la pieza que lo llame.
 
 </pre>
