'use strict'

/*
Definir las funciones recursivas nFactorial y nFibonacci.

nFactorial(n) debe retornar el factorial de n sabiendo que, siendo n un número natural, su factorial (representado como n!) es el producto de n por todos los números naturales menores que él y mayores a 0. Ejemplo: 5! = 5 * 4 * 3 * 2 * 1

nFibonacci(n) debe retornar el enésimo número de la secuencia de Fibonacci, tomando al 0 y al 1, respectivamente, como primer y segundo elementos de la misma, y sabiendo que cualquier elemento que se agregue a esta secuencia será el resultado de la suma del último elemento y el anterior.
Ejemplo: nFibonacci(7) retornará 13, ya que 13 es el dígito que está en la posición 7 de la secuencia.

Secuencia:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ... 


Como ejercicio adicional y completamente opcional, al terminar de resolver este problema pueden intentar definir funciones que logren los mismos resultados pero de manera iterativa.
*/

function nFactorial(n) {
  //if (n < 0) throw new Error ('factorial solo con numeros positivos')
  //if (Number.isInteger(n) !== true) throw new Error ('Factorial solo con numeros enteros')
  //                                 return 'No se aceptan numeros negativos en un factorial'
  if (n === 1) return 1;
  return n * nFactorial(n-1);
}

function nFibonacci(n) {
  if (n === 0 || n === 1) return n;
  return nFibonacci(n-2) + nFibonacci(n-1);
}
/*
//var array = []
function restar(num, array = []){
  //var array = []
 if (num === 0) return array
 console.log(array)
 array.push(num)
 return restar(num-1, array)
}
console.log(restar(8))
console.log(restar(7))
*/
/*
Implementar la clase Queue, sabiendo que es una estructura de tipo FIFO, donde el primer elemento que ingresa es el primero que se quita. Definir los siguientes métodos:
  - enqueue: agrega un valor respetando el orden.
  - dequeue: remueve un valor respetando el orden. Retorna undefined cuando la queue está vacía.
  - size: retorna el tamaño (cantidad de elementos) de la queue.

Pueden utilizar class o función constructora.
*/
//CLASS

/*
class Queue {
  constructor() {
    this.queue = [];

  }
  enqueue(value) {
    this.queue.push(value);
  }
  dequeue(value) {
    return this.queue.shift();
  }
  size(value) {
    return this.queue.length;
  }
}

let queue = new Queue();
queue.enqueue(2);
*/

//FUNCTION CONSTRUCTORA ES MEJOR

function Queue() {
  this.queue = [];
}

Queue.prototype.enqueue = function(value){
  this.queue.push(value);
}

Queue.prototype.dequeue = function(value){
  return this.queue.shift();
}

Queue.prototype.size = function(value){
  return this.queue.length;
}

let queue = new Queue();
queue.enqueue(2);



// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Queue,
  nFactorial,
  nFibonacci
};
