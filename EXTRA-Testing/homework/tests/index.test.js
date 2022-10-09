/*
it('Always ,siempre true', () => {
    expect(true).toBe(true);
  });
  */
 
//me traigo la funcion
 const { checkSeatStatus, getRowNumber, book } = require('../homework');
//AGRUPAMOS CON DESCRIBE acomodamos test
 describe('checkSeatStatus',() => {
/*
 it('checkSeatStatus should be a function', () => {
    //espero que el tipo de dato sea una function
   expect(typeof checkSeatStatus).toBe('function');
 });
 */

 it('checkSeatStatus should be a function', function() {
  //espero que el tipo de dato sea una function
 expect(typeof checkSeatStatus).toBe('function');
});

//si no le paso nada  va a pasar
it('should throw a typeError if first parameter is not a string', () => {
expect(() => checkSeatStatus(7)).toThrow(new TypeError('First parameter is not a string dany')); 
});

it('should throw a typeError if first parameter is not a number', () => {
  expect(() => checkSeatStatus('d', '7')).toThrow(new TypeError('Second parameter is not a number dany')); 
 });

//mockear significa simular imformacion un layout


it('should return 0 if the letter given is A', () => {
  expect(getRowNumber('A')).toBe(0);
} )

it('should return 2 if the letter given is c', () => {
  expect(getRowNumber('C')).toBe(2);
} )
// () => en caso de que falte esto en el expect no anda por que nos pide un toThrow error
   })



//AGRUPAMOS CON DESCRIBE
describe('getRowNumber',() => {
/*
  it('should return true if the seat is booked', () => {
    expect(checkSeatStatus('A', 1)).toBe(true);
  });
  */

  it('should return true if the seat is booked', () => {
    expect(checkSeatStatus('A', 1)).toBeTruthy();
  });
  
  /*
  it('should return false if the seat is not booked', () => {
    expect(checkSeatStatus('E', 3)).toBe(false);
  })
  */
  
  it('should return false if the seat is not booked', () => {
    expect(checkSeatStatus('E', 3)).toBeFalsy();
  })
  
 })


 describe('book', function () {
   it('should return "Seat succesfully booked" if the seat is not booked', () => {
     expect(book('E',2)).toBe('Seat in E2 successfully booked');
   });

   it('should return "Seat is already booked" if the seat is not booked', () => {
    expect(book('A',1)).toBe('Seat in A1 is already booked');
  });

  it('should not allow people to book the same seat twice', () => {
    expect(checkSeatStatus('E', 3)).toBe(false);
    expect(book('E',3)).toBe('Seat in E3 successfully booked');
    expect(checkSeatStatus('E',3)).toBe(true);
  });
    

});