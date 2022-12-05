// estas funciones son de ejemplo

export const filtrarCasas1 = (data, casa) => {
  let personajes= data.characters;
  let casa1= personajes.filter(element => element.house === casa) // de los personajes se filtran por casa, en el main se encuentra el valor de cada casa, aqui solo ponemos el parametro
 return casa1 
 
 }; 




// 
