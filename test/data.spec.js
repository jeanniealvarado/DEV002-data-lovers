import { filterAscendent, filterDescendent, filtrarCasas1, gFemenino, gMasculino, personajesYcasas, } from '../src/data.js';
const data= {
  characters: [
    {
      "id": 59,
      "name": "Amelia Bones' father",
      "gender": "Male",
      "house": "Hufflepuff (likely)",
     
    },
    {
      "id": 45,
      "name": "Alphard Black",
      "gender":"Male",
      "house": "House of Black (disowned posthumously)",
   
    },
    {
      "id": 17,
      "name": "Avery I",
      "gender": "male",
      "house": "Slytherin",
      
    },
    {
      "id": 1,
      "name": "Euan Abercrombie",
      "gender":"Male",
      "house": "Gryffindor",
    
    },
    {
      "id": 255,
      "name": "Xenophilius Lovegood",
      "gender":"male",
      "house": "Ravenclaw",
    },
    {
      "id": 533,
      "name": "Chon Chang",
      "gender": "Female",
      "house": "Revenclaw",
    },
    {
      "id": 756,
      "name": "Albus Dumblodore",
      "gender": "Male",
      "house": "Gryffindor",
    }

  ]
}

describe('prueba para la funcion de filtrar', () => {
  it('comprueba que FiltrarCasas1 es una funcion', () => {
    expect(typeof filtrarCasas1).toBe("function");
  });

   it('la funcion filtrarCasas1 debe retornar los personajes que pertenecen a la casa Gryffindor', () => {
     expect(filtrarCasas1(data, "Gryffindor")).toEqual( [ { 
      "gender": "Male",
      "id": 1,
     "name": "Euan Abercrombie",
     "house": "Gryffindor",
    },
    { 
      "gender": "Male",
      "id": 756,
     "name": "Albus Dumblodore",
     "house": "Gryffindor",
    }
    
  ]);
    })
   });
   it('la funcion filtrarCasas1 debe retornar los personajes que pertenecen a la casa Revenclaw', () => {
    expect(filtrarCasas1(data, "Ravenclaw")).toEqual( [ {
      "gender": "male",
      "house": "Ravenclaw",
      "id": 255,
      "name": "Xenophilius Lovegood"
    },
    {
      "gender": "Female",
      "house": "Ravenclaw",
      "id": 533,
      "name": "Chon Chang"
    }
  ]);
  });
  it('la funcion filtrarCasas1 debe retornar los personajes que pertenecen a la casa Slytherin', () => {
    expect(filtrarCasas1(data, "Slytherin")).toEqual( [ {
      "gender": "male",
      "house": "Slytherin",
      "id": 17,
      "name": "Avery I"
      
    }]);
  });
  it('la funcion filtrarCasas1 debe retornar los personajes que pertenecen a la casa House of Black', () => {
    expect(filtrarCasas1(data, "House of Black (disowned posthumously)")).toEqual( [{
      "gender": "Male",
      "id": 45,
      "name": "Alphard Black",
      "house": "House of Black (disowned posthumously)",
   
    }]);
  });
  it('la funcion filtrarCasas1 debe retornar los personajes que pertenecen a la casa Hufflepuff', () => {
    expect(filtrarCasas1(data, "Hufflepuff (likely)")).toEqual( [  {
      "gender": "Male",
      "house": "Hufflepuff (likely)",
      "id": 59,
      "name": "Amelia Bones' father",
      

 
}]);

  }) 
  describe('Prueba para filtar por nombre y casa', () => {
    it('la funcion personajesYcasas debe retornar los personajes con su nombre y su casa', () => {
    expect(personajesYcasas(data.characters)).toEqual([
      {  "house": "Hufflepuff (likely)",
        "name": "Amelia Bones' father"
       
      },
      { 
        "house": "House of Black (disowned posthumously)",
        "name": "Alphard Black"
      },
      { "house": "Slytherin",
        "name": "Avery I"
        
      },
      { "house": "Gryffindor",
        "name": "Euan Abercrombie"
      
      },
      { "house": "Ravenclaw",
        "name": "Xenophilius Lovegood"
        
      },
      {  "house": "Revenclaw",
        "name": "Chon Chang"
       
      },
      { "house": "Gryffindor",
        "name": "Albus Dumblodore",
        
    }])
  })
})




describe('Prueba para filtar por genero masculino', () => {
     it('la funcion gMasculino debe retornar los personajes que pertenecen a gender Male', () => {
     expect(gMasculino(data, "male")).toEqual([{
      "gender": "Male",
      "house":"Hufflepuff (likely)",
      "id": 59,
      "name": "Amelia Bones' father"
     },
     {
      "gender": "Male",
      "house": "House of Black (disowned posthumously)",
      "id":45,
      "name": "Alphard Black"
     },
     {
      "gender": "male",
      "house":"Slytherin",
      "id":17,
      "name": "Avery I"
     },
     {"gender":"male",
     "house": "Ravenclaw",
      "id": 255,
      "name": "Xenophilius Lovegood"
    },
     {
      "gender": "Male",
      "house": "Gryffindor",
      "id": 1,
      "name": "Euan Abercrombie"
     },
     {
      "gender": "Male",
      "house": "Gryffindor",
      "id": 756,
      "name": "Albus Dumblodore"
     }

    ]);
  })
 });
 describe('Prueba para filtar por genero Femenino', () => {
  it('la funcion gFemenino debe retornar los personajes que pertenecen a gender Female', () => {
  expect(gFemenino(data, "Female")).toEqual([
    {
   "gender": "Female",
   "house": "Revenclaw",
   "id": 533,
   "name": "Chon Chang",
  }])
  })
 });
 describe('Prueba para la funcion ordenar ascendente', () => {
it('la funcion filterAscendent debe retornar los personajes ordenados ascendentemente', () => {
expect(filterAscendent(data.characters)).toEqual([
  {
    "gender": "Male",
    "house": "Gryffindor",
    "id": 756,
    "name": "Albus Dumblodore"
  },
  {
    "gender": "Male",
    "house": "House of Black (disowned posthumously)",
    "id": 45,
    "name": "Alphard Black"
  },
  {
    "gender": "Male",
    "house": "Hufflepuff (likely)",
    "id": 59,
    "name": "Amelia Bones' father"
  },
  {
      
      "gender": "male",
      "house": "Slytherin",
      "id": 17,
      "name": "Avery I"
  },
  {
    "gender": "Female",
    "house": "Revenclaw",
    "id": 533,
    "name": "Chon Chang"
  },
  {
    "gender":"Male",
    "house": "Gryffindor",
    "id": 1,
    "name": "Euan Abercrombie"
  },
  {
    "gender":"male",
    "house": "Ravenclaw",
    "id": 255,
    "name": "Xenophilius Lovegood"
  }])
 })
});
describe('Prueba para la funcion ordenar descendente', () => {
  it('la funcion filterDescendent debe retornar los personajes ordenados ascendentemente', () => {
  expect(filterDescendent(data.characters)).toEqual([
    {
      "gender":"male",
      "house": "Ravenclaw",
      "id": 255,
      "name": "Xenophilius Lovegood"
    },
    {
      "gender":"Male",
      "house": "Gryffindor",
      "id": 1,
      "name": "Euan Abercrombie"
    },
    {
      "gender": "Female",
      "house": "Revenclaw",
      "id": 533,
      "name": "Chon Chang"
    },
    {
      "gender": "male",
      "house": "Slytherin",
      "id": 17,
      "name": "Avery I"
  },
  {
    "gender": "Male",
    "house": "Hufflepuff (likely)",
    "id": 59,
    "name": "Amelia Bones' father"
  },
  {
    "gender": "Male",
    "house": "House of Black (disowned posthumously)",
    "id": 45,
    "name": "Alphard Black"
  },
  {
    "gender": "Male",
    "house": "Gryffindor",
    "id": 756,
    "name": "Albus Dumblodore"
  }])
})
});
