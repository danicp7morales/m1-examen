/* eslint-disable no-undef */
'use strict'
//SI QUIERO SABER QUE LIBRERIA ESTAMOS USANDO ME FIJO EN MI PACKAGE.JSON

// un testing debe utilizarse automaticamente
// TEST END TO END PROBAR LA APLICACION DE PRINCIPIO A FIN
const {//creamos una constante con un objeto para traerme las funciones
  BinarioADecimal,
  DecimalABinario,
} = require('../homework.js');//el test para que funcione esta requiriendo el archivo
//lo estamos importando

//al describe ya lo llamariamos test integrador , aca tenemos una agrupacion de test
//vamos probando una agrupacion mas grande de codigo
//       este es el nombre de la function
describe('BinarioADecimal(num)', function() {//aca el discribe toma la function y la ejecuta
  //it representa a un test unitario que van a probar una sola cosa
  //esta funcion se llama debe devolver 2, 'should return 2' ojo esta linea de codigo se puede cambiar 
  it('should return 2', function() {// it = eso, toBe = ser o estar
    expect(BinarioADecimal('10')).toBe(2);//aca le desimos que la function me tiene que debolver 
    // un 2
    // de un string que tiene un 10 me debuelva un numero 2
  });
  //debolver 7, 
  it('should return 7', function() {
    expect(BinarioADecimal('111')).toBe(7);
  });
});

describe('DecimalABinario(num)', function() {
  it('should return "100"', function() {
    expect(DecimalABinario(4)).toBe('100');
  });
  it('should return "111"', function() {
    expect(DecimalABinario(7)).toBe('111');
  });
});

/* "devDependencies": {
    "jest": "^27.5.1"   ESTA ES LA LIBRERIA QUE ESTOY USANDO Y SE ENCUENTRA EN PACKAGE.JSON
  },*/ 