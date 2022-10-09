
# Homework JavaScript Avanzado I

## Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.

```javascript
x = 1;//
var a = 5;//
// var b = 10 si no estuviera no existiria en el global
var b = 10;//    8, 9, 10  aca modifica al contexto global
var c = function(a, b, c) {//
  var x = 10;//10 como esta declarada pertenece a su contexto global
  console.log(x);//10 esto esta en el contexto de la funcion
  console.log(a);//8 me lo pasaron en la funcion
  //               8, 9, 10
  var f = function(a, b, c) {//aca no modifica al contexto global b por que es una copia y no tine var
    b = a;//8 entonces b es 8 ahora
    console.log(b);//8
    b = c;// ahora b es 10 pero no pasa nada
    var x = 5;// como esta declarada pertenece a su contexto global
    //si la x no estuviese declarada la iria a buscar al global
  }//
  f(a,b,c);// se ejecuta la funcion var f aca
  console.log(b);//9 tomo el valor de su contexto  que es 9
}//
c(8,9,10);//
console.log(b);//9
console.log(x);//1
```

```javascript
console.log(bar);//undefined por que no registra su valor que existe si
console.log(baz);//error por que no encuentra nada 
//
foo();//
function foo() { console.log('Hola!'); }//
//esto no llega a ejecutarse por que rompe hantes
var bar = 1;//
//var baz = 2; aca no romperia el codigo
baz = 2;//
```

```javascript
var instructor = "Tony";//
if(true) {//por que no es una function  toma el cambio de la funcion
    var instructor = "Franco";//
}//
console.log(instructor);//franco



let instructor = "Tony";//
//let instructor = 'franco' //esto no se puede hacer
if(true) {// aca no se modificaria el nombre por que let tiene scoupe de block
    let instructor = "Franco";//
}//
console.log(instructor);//tony



```


```javascript
var instructor = "Tony";//
console.log(instructor);// Tony
(function() {//esta funcion se llama asi misma autoinvocacion asy misma ejecutada en el mismo momento
   if(true) {//
      var instructor = "Franco";//
      console.log(instructor);// franco
   }//
})();//es una funcion sin nombre que se va a ejecutar siempre
console.log(instructor);//Tony
```

```javascript
var instructor = "Tony";//esta modificado the flash
let pm = "Franco";//
if (true) {//
    var instructor = "The Flash";//este modifico el instructor de afuera
    let pm = "Reverse Flash";// este se queda en su contexto de bloque
    console.log(instructor);//the flash
    console.log(pm);//reverse flash
}//
console.log(instructor);//the flash
console.log(pm);//franco
```
### Coerción de Datos

¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

```javascript
6 / "3"// 2 , solo la suma concatena 
"2" * "3"// 6
4 + 5 + "px"// '9px'
"$" + 4 + 5//'$45'
"4" - 2// 2
"4px" - 2//NaN
7 / 0// infinity
{}[0]// [0]
parseInt("09")//9
5 && 2// 2 esto te va atirar el segundo valor si el primero es verdadero
2 && 5// 5
0 && 2// 0
5 || 0// 5 este te va a arrojar con tener uno
0 || 5// 5
[3]+[3]-[10]//23 primero concatena los array trabajan de forma diferenciada los array trabajan primero com + de forma de estring y en el segundo lo resta

[1, 2, 3] + [1] //[1, 2, 31] los concatena como si fuesen string cada uno
3>2>1//false   ''true es > 1 , false 
3>1 === 1 //false
3>1 == 1 // true
[] == ![]// true
```

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).


### Hoisting

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

```javascript
function test() {//
   console.log(a);// undefined por que no tiene ningun retorno
   console.log(foo());//2

   var a = 1;//
   function foo() {//
      return 2;//
   }//
}//

test();//
```

Y el de este código? :

```javascript
var snack = 'Meow Mix';//

function getFood(food) {//

    if (food) {//
       // let snack = 'friskies';//es lo mismo por que esta en el contexto de ejecucion no modifica nada el let
        var snack = 'Friskies';//
        //snack = 'Friskies', //lo pisaria el que esta  declarado afuera por que no esta declarada adentro de su contexto
        return snack;//
    }//
    return snack;//
}//

getFood(false);//undefined
getFood(true);//'frikies' entra retorna y corta 
```


### This

¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

```javascript
var fullname = 'Juan Perez';//
var obj = {//
   fullname: 'Natalia Nerea',//
   prop: {//
      fullname: 'Aurelio De Rosa',//
      getFullname: function() {//
         return this.fullname;//
      }//
   }//
};//

console.log(obj.prop.getFullname());//aurelio de rosa por que esta mas cerquita

var test = obj.prop.getFullname;//aca el this queda haciendo referencia al objeto global por eso toma a juan perez

console.log(test());//juan perez si no tuviese juan perez me daria undefined
```

### Event loop

Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

```javascript
function printing() {//
   console.log(1);//1ro 1
   setTimeout(function() { console.log(2); }, 1000);//4to 2
   setTimeout(function() { console.log(3); }, 0);//3ro 3
   console.log(4);//2do 4
}

printing();//
```
