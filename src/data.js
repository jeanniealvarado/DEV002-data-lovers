//import data from "./data/harrypotter/data";

export const filtrarCasas1 = (data, casa) => {
    let personajes = data.characters;
    let casa1 = personajes.filter(element => element.house === casa) // de los personajes se filtran por casa, en el main se encuentra el valor de cada casa, aqui solo ponemos el parametro
    return casa1

};


// rama karla
// export const characters = (data) => {
// return(data.characters.filter(element => element.name));
// };

export const personajesYcasas = (data) => {
    let filtrarPersonajes = data.characters.map((element) => ({ name: element.name, house: element.house }));
    return filtrarPersonajes
};

//funcion filtrar por genero masculino
export const gMasculino = (data) => {
    let traerPersonajes = data.characters;
    // let nombreYgenero = traerPersonajes.map((element) => ({ name: element.name, gender: element.gender }));
    let generoMale = traerPersonajes.filter(element => element.gender === "Male");
    return generoMale;
};
//funcion filtar por genero femenino
export const gFemenino = (data) => {
    let traerPersonajes = data.characters;
    //let nombreYgenero = traerPersonajes.map((element) => ({ name: element.name, gender: element.gender }));
    let generoFemale = traerPersonajes.filter(element => element.gender === "Female");
    return generoFemale;
};

//función ordenar personajes alfabeticamente ascendente
export const filterAscendent = (array) => {
    let ascendente = array.sort(function (a, b) {
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

export const porcentaje = (data) => {
    let personajesF = data.characters
    let fallecidos = personajesF.filter(element => element.death)
    return fallecidos.length * 100 / 707
}
//


















