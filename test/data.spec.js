import { filtrarCasas1, gMasculino, gFemenino, filterAscendent, filterDescendent } from '../src/data.js';
const data = {
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
      "gender": "Male",
      "house": "House of Black (disowned posthumously)",

    },
    {
      "id": 17,
      "name": "Avery I",
      "gender": "Male",
      "house": "Slytherin",

    },
    {
      "id": 1,
      "name": "Euan Abercrombie",
      "gender": "Male",
      "house": "Gryffindor",

    },
    {
      "id": 255,
      "name": "Xenophilius Lovegood",
      "gender": "Male",
      "house": "Ravenclaw",

    },
    {
      "id": 533,
      "name": "Cho Chang",
      "gender": "Female",
      "house": "Ravenclaw",
    },
    {
      "id": 756,
      "name": "Albus Dumbledore",
      "gender": "Male",
      "house": "Gryffindor",
    }
  ]
}

describe('pruebas para la funcion de filtrar', () => {
  it('comprueba que filtrarcasas1 es una funcion', () => {

    expect(typeof (filtrarCasas1)).toBe("function");
  });

  it('la funcion filtrarCasas1 debe retornar los personajes que pertenecen a cada casa', () => {
    expect(filtrarCasas1(data, "Gryffindor")).toEqual([
      {
        "gender": "Male",
        "id": 1,
        "name": "Euan Abercrombie",
        "house": "Gryffindor"
      },

      {
        "gender": "Male",
        "id": 756,
        "name": "Albus Dumbledore",
        "house": "Gryffindor"
      }

    ]);
  });
  it('la funcion filtrarCasas1 debe retornar los personajes que pertenecen a cada casa', () => {
    expect(filtrarCasas1(data, "Ravenclaw")).toEqual([
      {
        "gender": "Male",
        "id": 255,
        "name": "Xenophilius Lovegood",
        "house": "Ravenclaw"
      },
      {
        "gender": "Female",
        "id": 533,
        "name": "Cho Chang",
        "house": "Ravenclaw",
      },
    ]);
  });


  it('la funcion filtrarCasas1 debe retornar los personajes que pertenecen a cada casa', () => {
    expect(filtrarCasas1(data, "Slytherin")).toEqual([{
      "gender": "Male",
      "id": 17,
      "name": "Avery I",
      "house": "Slytherin",

    }]);
  });
  it('la funcion filtrarCasas1 debe retornar los personajes que pertenecen a cada casa', () => {
    expect(filtrarCasas1(data, "House of Black (disowned posthumously)")).toEqual([{
      "gender": "Male",
      "id": 45,
      "name": "Alphard Black",
      "house": "House of Black (disowned posthumously)",

    }]);
  });
  it('la funcion filtrarCasas1 debe retornar los personajes que pertenecen a cada casa', () => {
    expect(filtrarCasas1(data, "Hufflepuff (likely)")).toEqual([{
      "gender": "Male",
      "id": 59,
      "name": "Amelia Bones' father",
      "house": "Hufflepuff (likely)",

    }]);
  });
});

//test Karla
describe('pruebas para la funcion de filtrar por genero maculino', () => {
  it('la funcion gMasculino debe retornar los personajes que pertenecen a gender Male', () => {
    expect(gMasculino(data, "Male")).toEqual([

      {
        "gender": "Male",

        "name": "Amelia Bones' father"
      },

      {
        "gender": "Male",

        "name": "Alphard Black"
      },

      {
        "gender": "Male",

        "name": "Avery I"
      },

      {
        "gender": "Male",

        "name": "Euan Abercrombie"
      },

      {
        "gender": "Male",

        "name": "Xenophilius Lovegood"
      },

      {
        "gender": "Male",

        "name": "Albus Dumbledore"
      },

    ]);

  });
});

describe('pruebas para la funcion de filtrar por genero femenino', () => {
  it('la funcion gFemenino debe retornar los personajes que pertenecen a gender Female', () => {
    expect(gFemenino(data, "Female")).toEqual([{
      "gender": "Female",
      "name": "Cho Chang"

    }]);
  });

});

describe('pruebas para la funcion de ordenar ascendente', () => {
  it('la funcion filterAscendent debe retornar los personajes ordenados alfabeticamente ascendentemente', () => {
    expect(filterAscendent(data.characters)).toEqual([

      {
        "gender": "Male",
        "house": "Gryffindor",
        "id": 756,
        "name": "Albus Dumbledore"
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
        "gender": "Male",
        "house": "Slytherin",
        "id": 17,
        "name": "Avery I"
      },

      {
        "gender": "Female",
        "house": "Ravenclaw",
        "id": 533,
        "name": "Cho Chang"
      },

      {
        "gender": "Male",
        "house": "Gryffindor",
        "id": 1,
        "name": "Euan Abercrombie"
      },

      {
        "gender": "Male",
        "house": "Ravenclaw",
        "id": 255,
        "name": "Xenophilius Lovegood"
      },

    ]);
  });
})
describe('pruebas para la funcion de ordenar descendente', () => {
  it('la funcion filterDescendent debe retornar los personajes ordenados alfabeticamente descendente', () => {
    expect(filterDescendent(data.characters)).toEqual([

      {
        "gender": "Male",
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
        "gender": "Female",
        "house": "Ravenclaw",
        "id": 533,
        "name": "Cho Chang"
      },

      {
        "gender": "Male",
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
        "name": "Albus Dumbledore"
      },
    ]);
  });
})

// describe('anotherExample', () => {
//   it('is a function', () => {
//     expect(typeof anotherExample).toBe('function');
//   });

//   it('returns `anotherExample`', () => {
//     expect(anotherExample()).toBe('OMG');
//   });
// });
