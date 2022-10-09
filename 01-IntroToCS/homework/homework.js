'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  let numero = num.split('');// aca convierto el string en un numero
  let sum = 0;//creo la variable de la suma que me va a dar el numero
  for(let i = 0; i < numero.length; i++){//creamos un ciclo por la cantidad que me de el string
    if(numero[i] == 1){//preguntamos si el string en la pocicion cero es uno que ingrese
      sum += numero[i] ** [i];//que al numero en la pocicion i se lo eleve al cuadradoy se le
      //sume ala variable sum
    }
  }
  return sum;//retornamos lo que tenemos en la variable sum

}

function BinToDecAtajo (num){
  var decimal = 0;
  num = num.split('').reverse()  //.join()
  console.log(num)
/*
  for (let i = 0; i < num.length; i++){
    decimal = decimal + num[i] * 2 **i ;
  }*/
  num.forEach((num, i) => (decimal += num * 2 ** i));

  return decimal;
  
}

console.log(BinToDecAtajo('1011'));


function BinToDecAtajo (num){
 return parseInt(num, 2);

}
console.log(BinToDecAtajo('1011'));




function DecToBin(num){
  var binario = [];


while (num > 0){
  binario.unshift(num%2);
  num = Math.floor(num/2);
}
return binario.join('');
}


console.log(DecToBin(54));




function DecimalABinario(num) {
  var str = '';

  while(num > 0){
    str = (num % 2) + str;
    console.log(str);
    num = Math.floor(num / 2);

  }
  return str ;
}
console.log(DecimalABinario(21));

function DecToBinAtajo (num){
  return num.toString(2)
}

console.log(DecToBinAtajo(7))



module.exports = {// no tocar esto lo que hace es dejar a dispocicion para otros archivos 
  //como para el testing
  BinarioADecimal,//esta dejando disponible estas dos funciones
  DecimalABinario,
}