import { filtrarCasas1, } from '../src/data.js';
const data= {
  characters: [
    {
      "id": 59,
      "name": "Amelia Bones' father",
      "house": "Hufflepuff (likely)",
     
    },
    {
      "id": 45,
      "name": "Alphard Black",
      "house": "House of Black (disowned posthumously)",
   
    },
    {
      "id": 17,
      "name": "Avery I",
      "house": "Slytherin",
      
    },
    {
      "id": 1,
      "name": "Euan Abercrombie",
      "house": "Gryffindor",
    
    },
    {
      "id": 255,
      "name": "Xenophilius Lovegood",
      "house": "Ravenclaw",
    },
  ]
}

describe('pruebas para la funcion de filtrar', () => {
  it('comprueba que filtrarcasas1 es una funcion', () => {
           
    expect(typeof (filtrarCasas1)).toBe("function");
  });

   it('la funcion filtrarCasas1 debe retornar los personajes que pertenecen a cada casa', () => {
     expect(filtrarCasas1(data, "Gryffindor")).toEqual( [ { "id": 1,
     "name": "Euan Abercrombie",
     "house": "Gryffindor",}]);
   });
   it('la funcion filtrarCasas1 debe retornar los personajes que pertenecen a cada casa', () => {
    expect(filtrarCasas1(data, "Ravenclaw")).toEqual( [ {
      "id": 255,
      "name": "Xenophilius Lovegood",
      "house": "Ravenclaw",
    }]);
  });
  it('la funcion filtrarCasas1 debe retornar los personajes que pertenecen a cada casa', () => {
    expect(filtrarCasas1(data, "Slytherin")).toEqual( [ {
      "id": 17,
      "name": "Avery I",
      "house": "Slytherin",
      
    }]);
  });
  it('la funcion filtrarCasas1 debe retornar los personajes que pertenecen a cada casa', () => {
    expect(filtrarCasas1(data, "House of Black (disowned posthumously)")).toEqual( [{
      "id": 45,
      "name": "Alphard Black",
      "house": "House of Black (disowned posthumously)",
   
    }]);
  });
  it('la funcion filtrarCasas1 debe retornar los personajes que pertenecen a cada casa', () => {
    expect(filtrarCasas1(data, "Hufflepuff")).toEqual( [  {
      "id": 59,
      "name": "Amelia Bones' father",
      "house": "Hufflepuff",
     
    }]);
  });
 });


// describe('anotherExample', () => {
//   it('is a function', () => {
//     expect(typeof anotherExample).toBe('function');
//   });

//   it('returns `anotherExample`', () => {
//     expect(anotherExample()).toBe('OMG');
//   });
// });
