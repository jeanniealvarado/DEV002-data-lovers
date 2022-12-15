
export const filtrarCasas1 = (data, casa) => {
  let personajes= data.characters;
  let casa1= personajes.filter(element => element.house === casa) // de los personajes se filtran por casa, en el main se encuentra el valor de cada casa, aqui solo ponemos el parametro
 return casa1 
 
 }; 


// rama karla
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
export const filterAscendent = (array) => {
     let ascendente = array.sort(function (a, b){
      return ((a.name < b.name) ? -1 : ((a.name > b.name) ? 1 : 0));
 });
 return ascendente;
 
 };
 
 export const filterDescendent = (array) => {
     let descendente = array.sort(function (a, b) {
      return ((a.name < b.name) ? 1 : ((a.name > b.name) ? -1 : 0));
 });
 return descendente
     
 }; 



//export const calcularPorcentaje = (datos){
  //  console.log(calcularPorcentaje)
    //let hombres = 0;
    //let mujeres = 0;
    //for(let i = 0; i < datos.length; i++ ){
      //  if(datos[i].gender === "Female"){
        //    mujeres++;
        //}else{
          //  hombres++;
        //}
    //}
    
    //let porcentajeMujeres = (mujeres / datos.length)*100;
    //porcentajeMujeres = porcentajeMujeres.toFixed[1];
    //let porcentajeHombres = (hombres / datos.length)*100;
    //porcentajeHombres = porcentajeHombres.toFixed[1];
    //return { porcentajeMujeres, porcentajeHombres};
//} 


 //export const fallecidos = (data) => {
//let personajesF = data.characters
//let personajescasa= personajesF.filter(element =>element.house)
//let fallecidos=personajescasa.filter(element =>element.death)
//return fallecidos.length
 //}