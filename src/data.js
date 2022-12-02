// estas funciones son de ejemplo

//import data from "./data/harrypotter/data";

export const filtrarCasas1 = (data, casa) => {
  let personajes= data.characters;
  let casa1= personajes.filter(element => element.house === casa)
 return casa1 
 
 }; 
//  export const PromedioG = (filtrarCasas1) => {
//   let Gryffi= filtrarCasas1.filter(element => element.death === !"null")
//   return Gryffi.reduce(total, filtrarCasas1) => total + 
 

  //  Gryffi.reduce((total, currentCharacters, index, array)=>{
  //   total += currentCharacters.death
  //   return total
  // })

export const filtrarCasas2 = (data) => {
  let personajes2= data.characters;
  let casaRave= personajes2.filter(element => element.house === "Ravenclaw")
  return casaRave;
};

export const filtrarCasas3 = (data) => {
  let personajes3= data.characters;
  let casaSly= personajes3.filter(element => element.house === "Slytherin")
  return casaSly;
};

export const filtrarCasas4 = (data) => {
  let personajes4= data.characters;
  let casaBlack= personajes4.filter(element => element.house === "House of Black")
  return casaBlack;
};

export const filtrarCasas5 = (data) => {
  let personajes5= data.characters;
  let casaHuf= personajes5.filter(element => element.house === "Hufflepuff")
  return casaHuf;
};
//export default data;