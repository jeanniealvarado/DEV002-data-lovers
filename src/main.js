import {gMasculino, gFemenino, ordenarPersonajesAs, ordenarPersdonajesDesc } from './data.js';

import data from './data/harrypotter/data.js';

//boton filtrar genero masculino
const b1 = document.getElementById ("boton1")
b1.addEventListener("click",function(){
    console.log (gMasculino(data));
 (gMasculino(data));

})
//boton filtar genero femenino
const b2 = document.getElementById ("boton2")
b2.addEventListener("click",function(){
    console.log (gFemenino(data));
 (gFemenino(data));
})

let tarea = document.getElementById("hombres")
let tarea2 = document.getElementById("mujeres")

tarea.innerHTML = (gMasculino(data));
//(gMasculino(data));



//let traerPersonajes = data.characters;
//console.log(traerPersonajes);
//traerPersonajes.filter(element => element.name);//


//let nombrepersonajes = traerPersonajes.map((element) => ({name: element.name}));
//let casapersonajes = traerPersonajes.map((element) => ({house: element.house}));
//let nombreYcasaspersonajes = traerPersonajes.map((element) => ({name: element.name, house: element.house}));
//let generopersonajes = traerPersonajes.map((element) => ({gender: element.gender}));
//let nombreYgeneropersonajes = traerPersonajes.map((element) => ({name: element.name, gender: element.gender}));
//let nombreCasasGeneropersonajes = traerPersonajes.map((element) => ({name: element.name, house: element.house, gender: element.gender}));
//let casapersonajes = traerPersonajes.map((element) => ({name: element.name, house: element.house}));//
//personajes.push(nombrepersonajes);//
//console.log(nombrepersonajes);
//console.log(casapersonajes);
//console.log(nombreYcasaspersonajes);
//console.log(generopersonajes);
//console.log(nombreYgeneropersonajes);
//console.log(nombreCasasGeneropersonajes);


//export const charactersmasculino = (data) => {
    //let traerPersonajes = data.characters;
    //let nombreYgenero = traerPersonajes.map((element) => ({name: element.name, gender: element.gender}));
    //let generoMale = nombreYgenero.filter (element => element.gender ==="Male");
    //let generoFemale = nombreYgenero.filter (element => element.gender ==="Female");
 
    //console.log(nombreYgenero)
    //console.log(traerPersonajes)
    //console.log(generoMale)
    //map ((element) => ({element: element.male}));

//let generofemale = nombreYgenero.map((element) => ({name: element.name, female: element.female}));
//console.log(generoFemale)

//boton ordenar personajes alfabeticamente ascendente
const b3 = document.getElementById ("boton3")
b3.addEventListener("click",function(){
    console.log (ordenarPersonajesAs(data));
 (ordenarPersonajesAs(data));
});

//boton ordenar personajes alfabeticamente descendente
const b4 = document.getElementById ("boton4")
b4.addEventListener("click",function(){
    console.log (ordenarPersdonajesDesc(data));
 (ordenarPersdonajesDesc(data));
});