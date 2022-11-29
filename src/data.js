
export const characters = (data) => {
return(data.characters.filter(element => element.name));
};

export const personajesYcasas = (data) => {
let filtrarPersonajes =data.characters.filter(element => element.name);
let fpersonajes = filtrarPersonajes.map((element)=> ({name: element.name, house: element.house}));
return fpersonajes;
};


//funcion filtrar por genero masculino
export const gMasculino = (data) => {
    let traerPersonajes = data.characters;
    let nombreYgenero = traerPersonajes.map((element) => ({ name: element.name, gender: element.gender }));
    let generoMale = nombreYgenero.filter(element => element.gender === "Male");
    return generoMale;
};
//funcion filtar por genero femenino
export const gFemenino = (data) => {
    let traerPersonajes = data.characters;
    let nombreYgenero = traerPersonajes.map((element) => ({ name: element.name, gender: element.gender }));
    let generoFemale = nombreYgenero.filter(element => element.gender === "Female");
    return generoFemale;
};

//función ordenar personajes alfabeticamente ascendente
export const filterAscendent = (data) => {
    let personajes = data.characters;
    let nombrePersonaje = personajes.map((element) => ({ name: element.name, house: element.house, species: element.species}));
     let ascendente = nombrePersonaje.sort(function (a, b){
      return ((a.name < b.name) ? -1 : ((a.name > b.name) ? 1 : 0));
 });
 return ascendente;
 
 };
 //export const filterCompare= (array, cName) => {
   // let comparedElements = array.filter(element =>element.name.toLowerCase().includes(cName.toLowerCase()))
//return comparedElements;
 //};

 //función ordenar personajes alfabeticamente descendente
 export const filterDescendent = (data) => {
     let personajes = data.characters;
     let nombrePersonaje = personajes.map((element) => ({ name: element.name, house: element.house, species: element.species}));
     let descendente = nombrePersonaje.sort(function (a, b) {
      return ((a.name < b.name) ? 1 : ((a.name > b.name) ? -1 : 0));
 });
 return descendente
     
 }; 


//let traerPersonajes = data.characters.filter(element => element.name)

//let personajes = [];//
//console.log(personajes)//
//traerPersonajes.filter(element => element.name);//
//let nombrepersonajes = traerPersonajes.map((element) => ({name: element.name}));
//let casapersonajes = traerPersonajes.map((element) => ({house: element.house}));
//let nombreYcasaspersonajes = traerPersonajes.map((element) => ({name: element.name, house: element.house}));
//let generopersonajes = traerPersonajes.map((element) => ({gender: element.gender}));

//let nombreCasasGeneropersonajes = traerPersonajes.map((element) => ({name: element.name, house: element.house, gender: element.gender}));
//let casapersonajes = traerPersonajes.map((element) => ({name: element.name, house: element.house}));//
//personajes.push(nombrepersonajes);//
//console.log(nombrepersonajes);
//console.log(casapersonajes);
//console.log(nombreYcasaspersonajes);
//console.log(generopersonajes);
//console.log(nombreYgeneropersonajes);
//console.log(nombreCasasGeneropersonajes);


