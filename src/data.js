// estas funciones son de ejemplo

//import data from "./data/harrypotter/data";

export const filtrarCasas1 = (data) => {
  let personajes= data.characters;
  let casas= personajes.map((Element)=>({name:Element.name, house:Element.house}));
  let casa1= casas.filter(element => element.house === "Gryffindor")
 return casa1 
 
 }; 
 export const PromedioG = (data) => {
  let Gryffi= data.characters.filter(element => element.house === "Gryffindor")
   Gryffi.reduce((total, currentCharacters, index, array)=>{
    total += currentCharacters.death
    return total
  })

 }
//  let personajeG= personajes.filter(element => element.name)
//  let casas= personajeG.map((Element)=>({house:Element.house === "Gryffindor" })); 
  
//}; 



export const filtrarCasas2 = (data) => {
  let personajes2= data.characters;
  let casas2= personajes2.map((Element)=>({name:Element.name, house:Element.house}));
  let casaRave= casas2.filter(element => element.house === "Ravenclaw")
  return casaRave;
};

export const filtrarCasas3 = (data) => {
  let personajes3= data.characters;
  let casas3= personajes3.map((Element)=>({name:Element.name, house:Element.house}));
  let casaSly= casas3.filter(element => element.house === "Slytherin")
  return casaSly;
};

export const filtrarCasas4 = (data) => {
  let personajes4= data.characters;
  let casas4= personajes4.map((Element)=>({name:Element.name, house:Element.house}));
  let casaBlack= casas4.filter(element => element.house === "House of Black")
  return casaBlack;
};

export const filtrarCasas5 = (data) => {
  let personajes5= data.characters;
  let casas5= personajes5.map((Element)=>({name:Element.name, house:Element.house}));
  let casaHuf= casas5.filter(element => element.house === "Hufflepuff")
  return casaHuf;
};
//export default data;