//import { characters } from './data.js';//

import data from './data/harrypotter/data.js';

console.log(data)

//let personajes = [];//
//console.log(personajes)//
let traerPersonajes = data.characters;
console.log(traerPersonajes);
//traerPersonajes.filter(element => element.name);//
let nombrepersonajes = traerPersonajes.map((element) => ({name: element.name}));
let casapersonajes = traerPersonajes.map((element) => ({house: element.house}));
let nombreYcasaspersonajes = traerPersonajes.map((element) => ({name: element.name, house: element.house}));
//let casapersonajes = traerPersonajes.map((element) => ({name: element.name, house: element.house}));//
//personajes.push(nombrepersonajes);//
console.log(nombrepersonajes);
console.log(casapersonajes);
console.log(nombreYcasaspersonajes)





