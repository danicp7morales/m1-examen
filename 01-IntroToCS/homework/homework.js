'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  let numero = num.split('');// aca convierto el string en un numero
  let sum = 0;//creo la variable de la suma que me va a dar el numero
  for(let i = 0; i  < numero.length; i++){//creamos un cicol por la cantidad que me de el string
    if(numero[i] == 1){//preguntamos si el string en la pocicion cero es uno que ingrese
      sum += numero[i] ** [i];//que al numero en la pocicion i se lo eleve al cuadradoy se le
      //sume ala variable sum
    }
  }
  return sum;

}

function DecimalABinario(num) {
  // tu codigo aca

}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}