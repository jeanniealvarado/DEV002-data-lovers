import { filtrarCasas1, filtrarCasas2, filtrarCasas3, filtrarCasas4, filtrarCasas5 } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/harrypotter/data.js';
// import data from './data/rickandmorty/rickandmorty.js';

console.log (data);
let personajes1= data.characters
//console.log(personajes)
let casaG= []
let casaR= []
let casaS= []
let casaH= []
let casaHu= []
// console.log(personajes2)
const mostrar= document.getElementById("Gryffindor")
mostrar.addEventListener("click", filtrar)
function filtrar () {
  casaG= filtrarCasas1(data)
  casaG.forEach(data => {
    let mostrarG= document.getElementById("listaG")
    const lista= document.createElement("li")
    if (data.house=== "Gryffindor")
    lista.textContent= data.name
     mostrarG.appendChild(lista)
   //document.write("personaje:", data.name)
  });
 // console.log(casaG)
//   for (const Element in data) {
//     const personajeG= data[Element]
//     console.log(personajeG)
//     }
  }

  
// let mostrarG= document.querySelector("div")
// let crear= document.createElement("li")
// crear.textContent= casaG
// mostrarG.appendChild(crear)
   //console.log(casaG)




const mostrar2= document.getElementById("Ravenclaw")
mostrar2.addEventListener("click", filtrar2)
function filtrar2(){
    casaR= filtrarCasas2(data)
    //console.log(casaR)
    casaR.forEach(data => {
    let mostrarR= document.getElementById("listaR")
    const lista2= document.createElement("li")
    if (data.house=== "Ravenclaw")
    lista2.textContent= data.name
     mostrarR.appendChild(lista2)
})
}

const mostrar3= document.getElementById("Slytherin")
mostrar3.addEventListener("click", filtrar3)
function filtrar3(){
    casaS= filtrarCasas3(data)
    //console.log(casaS)
    casaS.forEach(data => {
        let mostrarS= document.getElementById("listaS")
        const lista3= document.createElement("li")
        if (data.house=== "Slytherin")
        lista3.textContent= data.name
         mostrarS.appendChild(lista3)
    })
}

const mostrar4= document.getElementById("House of Black")
mostrar4.addEventListener("click", filtrar4)
function filtrar4(){
    casaH= filtrarCasas4(data)
    console.log(casaH)
    casaH.forEach(data => {
        let mostrarH= document.getElementById("listaH")
        const lista4= document.createElement("li")
        if (data.house=== "House of Black")
        lista4.textContent= data.name
         mostrarH.appendChild(lista4)
    })
}

const mostrar5= document.getElementById("Hufflepuff")
mostrar5.addEventListener("click", filtrar5)
function filtrar5 (){
    casaHu= filtrarCasas5(data)
    console.log(casaHu)
    casaHu.forEach(data => {
        let mostrarHu= document.getElementById("listaHur")
        const lista5= document.createElement("li")
        if (data.house=== "Hufflepuff")
        lista5.textContent= data.name
         mostrarHu.appendChild(lista5)
    })
}
