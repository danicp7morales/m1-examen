const layout = [
    [{type: 'VIP', booked: false}, {type: 'VIP', booked: true}, {type: 'VIP', booked: true}, {type: 'VIP', booked: false}],
    [{type: 'NORMAL', booked: false}, {type: 'VIP', booked: true}, {type: 'VIP', booked: false}, {type: 'NORMAL', booked: false}],
    [{type: 'NORMAL', booked: false}, {type: 'NORMAL', booked: true}, {type: 'NORMAL', booked: true}, {type: 'NORMAL', booked: false}],
    [{type: 'ECONOMIC', booked: true}, {type: 'NORMAL', booked: true}, {type: 'NORMAL', booked: true}, {type: 'ECONOMIC', booked: false}],
    [{type: 'ECONOMIC', booked: false}, {type: 'ECONOMIC', booked: true}, {type: 'ECONOMIC', booked: false}, {type: 'ECONOMIC', booked: false}]
  ];

  function getSeat(row, number) {
    const numberRow = getRowNumber(row);
    const layoutSelected = layout[numberRow];
    return layoutSelected[number];

  }


function checkSeatStatus(row, number) {
//si mi type de dato is not string return error
  if(typeof row !== 'string') throw new TypeError('First parameter is not a string dany')
  if(typeof number !== 'number') throw new TypeError('Second parameter is not a number dany')

  const numberRow = getRowNumber(row);
  const layoutSelected = layout[numberRow];
  const seatSelected = layoutSelected[number];
  
  return seatSelected.booked;
  //   es otra forma
  //return seatSelected['booked'] aca le estamos diciendo que busque la propiedad 
  //return seatSelected[booked] sin las comillas se accede a una variable

 //const numberRow = getRowNumber(row)
  //return layout[numberRow][number].booked;
  //0 4 .booked , butacas
}
//creamos la funcion para poder usarla dentro de la otra funcion
//estudiar bien el charCodeAt transforma la letra en numeros
function getRowNumber(letter) {
    return letter.charCodeAt(0) -65;
}
//A = 65 - 65 = 0 [{} {} {}] Con el charCodeAt
//B = 66 - 65 = 1 
//C = 67 - 65 = 2 
//D = 68 - 65 = 3 
//E = 69 - 65 = 4 

//REFACTOR cambiar cosas de nuestro codigo pero sin cambiar funcionabilidad

function book(row, number){
  if(checkSeatStatus(row, number)) return 'Seat in '+ row + number+' is already booked';
 
 //return 'Seat in ' + row + number +  ' successfully booked'
 /*
  const numberRow = getRowNumber(row);
  const layoutSelected = layout[numberRow];
  const seatSelected = layoutSelected[number];
*/
  let seatSelected = getSeat(row, number)
  seatSelected.booked = true;
  return 'Seat in '+ row + number +' successfully booked'

}





//exportamos los modulos
module.exports = {
    checkSeatStatus,
    getRowNumber,
    book
}