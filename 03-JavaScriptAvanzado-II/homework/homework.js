"use strict";

// Closures

function counter() {
  var count = 0; //creamos una clousure para counter

  return function () {
    count ++;
    return count;
  }
};
//genero un nuevo contador para cada persona
//cada uno tendra su propio contador
/*
let contadorParaSabry = counter();
let contadorParaDany = counter();
let contadorParaPinki = counter();
let contadorParaMinnie = counter();
*/


function cacheFunction(cb) {
  let cache = {};//le creamos un objeto para guardar los valores

  return function (arg){
    //si se encuentra el arg retorna el cache argumento
    
    if (cache.hasOwnProperty(arg)){
      return cache[arg];
    // si no ejecuta la funcion con el argumento 
    //y guardalo en cache y luego retornalo
    }else {
      cache[arg] = cb(arg);
      return cache[arg];
    //return cache[arg] = cb(arg)
    }
  };
 
}

//                        cb es una funcion de:
// multiplicar, suma, resta, divide  
/*                          
let squareMulty = cacheFunction(multiplica);
squareMulty(2);

let squareSuma = cacheFunction(suma);
squareSuma(8);

let squareResta= cacheFunction(resta);
squareResta(7);

let squareDivido = cacheFunction(divide);
squareDivido(1);
/*
El método hasOwnProperty() devuelve un valor booleano que indica si el objeto 
tiene la propiedad especificada como su propia propiedad (en lugar de heredarla).
*/
// Bind

var instructor = {
  nombre: "Franco",
  edad: 25,
};

var alumno = {
  nombre: "Juan",
  curso: "FullStack",
};

function getNombre() {
  return this.nombre;
}


 
//bind = unir, unimos la function con el objeto y la guardamos en 
//una variable
let getNombreInstructor = getNombre.bind(instructor);
let getNombreAlumno = getNombre.bind(alumno);

/*
  Ejercicio 4
  
  Sin modificar la función crearCadena, 
  usar bind para guardar, en las tres variables 
  declaradas a continuación, tres funciones que
  retornen una cadena (string) y el delimitador 
  especificado (asteriscos, guiones, y guiones 
    bajos, respectivamente). Las funciones 
    obtenidas deberían recibir solamente un 
    argumento - la cadena de texto - ya que 
    los otros argumentos habrán sido "bindeados". 
*/

function crearCadena(delimitadorIzquierda, delimitadorDerecha, cadena) {
  return delimitadorIzquierda + cadena + delimitadorDerecha;
}
//el primer parametro apunta al objeto
let textoAsteriscos = crearCadena.bind(null,'*', '*');
let textoGuiones = crearCadena.bind(this, '-', '-');
let textoUnderscore = crearCadena.bind(null, '_', '_');

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  counter,
  cacheFunction,
  getNombreInstructor,
  getNombreAlumno,
  textoAsteriscos,
  textoGuiones,
  textoUnderscore,
};
