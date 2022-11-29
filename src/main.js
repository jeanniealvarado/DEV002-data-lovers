import {characters, personajesYcasas, gMasculino, gFemenino, filterAscendent, filterDescendent} from './data.js';

import data from './data/harrypotter/data.js';



let list =document.getElementById("characteresList"); 
let ordenAscendent = document.getElementById("filterAscendent");
let ordenDescendent = document.getElementById("filterDescendent");


//boton filtrar genero masculino
const b1 = document.getElementById ("boton1")
b1.addEventListener("click",()=>{
    console.log (gMasculino(data));
    list.innerHTML = "";
    listaElementos=(gMasculino(data));

})


//boton filtar genero femenino
const b2 = document.getElementById ("boton2")
b2.addEventListener("click",()=>{
    console.log (gFemenino(data));
    list.innerHTML = "";
    listaElementos=(gFemenino(data));

});


//boton ordenar personajes alfabeticamente ascendente

ordenAscendent.addEventListener("click",() =>{ 
    console.log (filterAscendent(data));
    list.innerHTML = "";
    listaElementos=(filterAscendent(personajesNameHouse));
});

//boton ordenar personajes alfabeticamente descendente

ordenDescendent.addEventListener("click",() =>{
   console.log (filterDescendent(data));
   list.innerHTML = "";
 listaElementos =(filterDescendent(personajesNameHouse));

});

let personajesNameHouse = personajesYcasas(data);

listaElementos(characters(data));

function listaElementos(elements) {
elements.forEach((element) => {
  let li = document.createElement("li");
let span = document.createElement("span");
//let i = document.createElement("i");
let p = document.createElement("p");

li.className = "card-element"
p.innerHTML = element.name;
//p.className = "card-p";
//i.className = "fa-solid fa-hat-wizard";
//i.id = "span-i";
//span.className = "card-span";
if(element.house == "Gryffindor"){
 span.style.color = "#740001";
} else if(element.house == "Hufflepuff"){
  span.style.color = "#F0C75E";
}else if(element.house =="Slytherin"){
  span.style.color = "#2A623D";
}else if(element.house == "Ravenclaw"){
  span.style.color = "#728DDA";

}else {
  span.style.color = "#000";
}
list.appendChild(li);
//li.appendChild(span);
//span.appendChild(i);
li.appendChild(p);

});

};






//list.innerHTML = "";


//let ordenAscendent = document.getElementById("boton3");
//let ordenDescendent = document.getElementById("boton4");


 //ordenAscendent .addEventListener("click",() =>{
   // list.innerHTML = "";
    //console.log(ordenarPersonajesAs(data));
 //(ordenarPersonajesAs(data));
 
 //})
    //ordenDescendent.addEventListener("click",() =>{
 //list.innerHTML = "";
    //listElements (ordenarPersdonajesDesc = (data));
    
//});

//function listElements(elements) {
  //  elements.forEach((element) => {
//let li = document.createElement("li");
//let span = document.createElement("span");
//let i = document.createElement("i");
//let p = document.createElement("p");

//li.className = "card-element"
//p.innerHTML = element.name;
//p.className = "card-p";
//i.className = "fa-solid fa-hat-wizard";
//i.id = "span-i";
//span.className = "card-span";


//if(element.house == "Gryffindor"){
  //  span.style.color = red;
//} else 
//}


  //  })
//}
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