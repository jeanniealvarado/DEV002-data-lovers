import { filtrarCasas1, gMasculino, gFemenino, filterAscendent, filterDescendent, personajesYcasas, porcentaje } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/harrypotter/data.js';
// import data from './data/rickandmorty/rickandmorty.js';



const btnGryffindor = document.getElementById("Gryffindor")
const btnRavenclaw = document.getElementById("Ravenclaw")
const btnSlytherin = document.getElementById("Slytherin")
const btnHouse = document.getElementById("House of Black")
const btnHufflepuf = document.getElementById("Hufflepuff")

btnGryffindor.addEventListener("click", function () {
  let dataCasa = filtrarCasas1(data, "Gryffindor")
  let dataMostrada = listaElementos (dataCasa)
  return dataMostrada 
})

btnRavenclaw.addEventListener("click", function () {
  let dataCasa = filtrarCasas1(data, "Ravenclaw")
  let dataMostrada = listaElementos (dataCasa)
  return dataMostrada;
})

btnSlytherin.addEventListener("click", function () {
  let dataCasa = filtrarCasas1(data, "Slytherin")
  let dataMostrada = listaElementos (dataCasa)
  return dataMostrada;
})

btnHouse.addEventListener("click", function () {
  let dataCasa = filtrarCasas1(data, "House of Black")
  let dataMostrada = listaElementos (dataCasa)
  return dataMostrada;
})

btnHufflepuf.addEventListener("click", function () {
  let dataCasa = filtrarCasas1(data, "Hufflepuff")
  let dataMostrada = listaElementos(dataCasa)
  return dataMostrada;
})


//rama karla 

let lista = document.getElementById("characteresList");
let ordenAscendent = document.getElementById("filterAscendent");
let ordenDescendent = document.getElementById("filterDescendent");
let filtroMasculino = document.getElementById("boton1")
let filtroFemenino = document.getElementById("boton2")

let personajesNameHouse = personajesYcasas(data);
//console.log(personajesNameHouse)
//listaElementos(characters(data));

function listaElementos(data) {
  lista.innerHTML = "";
  data.forEach(element => {
    let li = document.createElement("li");
    li.textContent = element.name;
    lista.appendChild(li);

  });

}

//boton filtrar genero masculino
filtroMasculino.addEventListener("click", () => {

  listaElementos(gMasculino(data));
});

//boton filtar genero femenino
filtroFemenino.addEventListener("click", () => {
  listaElementos(gFemenino(data));

});

//boton ordenar personajes alfabeticamente ascendente
ordenAscendent.addEventListener("click", () => {
  listaElementos(filterAscendent(personajesNameHouse));
});

//boton ordenar personajes alfabeticamente descendente

ordenDescendent.addEventListener("click", () => {
  listaElementos(filterDescendent(personajesNameHouse));

})


let personajesfallecidos = Math.round(porcentaje(data))

let resultado= document.getElementById("resultado")
resultado.innerHTML= personajesfallecidos + "%"
let refresh = document.getElementById("boton3");
refresh.addEventListener('click', function() {
            location.reload();

})

