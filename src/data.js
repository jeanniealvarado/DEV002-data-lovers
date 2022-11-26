
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
}




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



//función ordenar libros por año de lanzamiento
//export const ordenarLibrosAs = (data) => {
  //  let libros = data.books;
    //let ascendente = libros.sort(function (a, b){
      //  return ((a.releaseDay < b.releaseDay) ? -1 : ((a.releaseDay > b.releaseDay) ? 1 : 0));
//});
//return ascendente;

//};

//export const ordenarLibrosDesc = (data) => {
  //  let libros = data.books;
    //let descendente = libros.sort(function (a, b) {
      //  return ((a.releaseDay < b.releaseDay) ? 1 : ((a.name > b.name) ? -1 : 0));
//});
//return descendente
    
//}; 