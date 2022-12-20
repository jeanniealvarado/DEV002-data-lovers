import { filtrarCasas1 ,characters, gMasculino, gFemenino, filterAscendent, filterDescendent, personajesYcasas, } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/harrypotter/data.js';
// import data from './data/rickandmorty/rickandmorty.js';

console.log(data);
//let personajes1 = data.characters
// Función para crear un listado de forma dinamica 
const divMostrar = document.getElementById("lista");
function listaData(data) {
    divMostrar.innerHTML = ""
    data.forEach(d => {
        //aqui podemos agregar el calculo agregado 
        const lista = document.createElement("li")
        lista.textContent = d.name
        divMostrar.appendChild(lista)
    })
}

const btnGryffindor = document.getElementById("Gryffindor")
const btnRavenclaw = document.getElementById("Ravenclaw")
const btnSlytherin = document.getElementById("Slytherin")
const btnHouse = document.getElementById("House of Black")
const btnHufflepuf = document.getElementById("Hufflepuff")

btnGryffindor.addEventListener("click", function () {
    let dataCasa = filtrarCasas1(data, "Gryffindor")
    let dataMostrada = listaData(dataCasa)
    return dataMostrada;
})

btnRavenclaw.addEventListener("click", function () {
    let dataCasa = filtrarCasas1(data, "Ravenclaw")
    let dataMostrada = listaData(dataCasa)
    return dataMostrada;
})

btnSlytherin.addEventListener("click", function () {
    let dataCasa = filtrarCasas1(data, "Slytherin")
    let dataMostrada = listaData(dataCasa)
    return dataMostrada;
})

btnHouse.addEventListener("click", function () {
    let dataCasa = filtrarCasas1(data, "House of Black")
    let dataMostrada = listaData(dataCasa)
    return dataMostrada;
})

btnHufflepuf.addEventListener("click", function () {
    let dataCasa = filtrarCasas1(data, "Hufflepuff")
    let dataMostrada = listaData(dataCasa)
    return dataMostrada;
})


//rama karla 

let lista = document.getElementById("characteresList");
let ordenAscendent = document.getElementById("filterAscendent");
let ordenDescendent = document.getElementById("filterDescendent");
let filtroMasculino = document.getElementById("boton1")
let filtroFemenino = document.getElementById("boton2")
let personajesNameHouse = personajesYcasas(data);
//let datosFiltrados = calcularPorcentaje(datos)

//mostrar lista de personajes en pantalla
listaElementos(characters(data));

function listaElementos(data) {
  lista.innerHTML = "";
  data.forEach(element => {
    let li = document.createElement("li");
    li.textContent=element.name;
    lista.appendChild(li);
  
  });

}
//datosFiltrados.addEventListener("click", () =>{
  //lista.innerHTML = "";
  //listaElementos (calcularPorcentaje(datosFiltrados));
//}
//);

//boton filtrar genero masculino
filtroMasculino.addEventListener("click", () => {
  lista.innerHTML = "";
 listaElementos(gMasculino(data));

});

//boton filtar genero femenino
filtroFemenino.addEventListener("click", () => {
  lista.innerHTML = "";
  listaElementos(gFemenino(data));

});

//boton ordenar personajes alfabeticamente ascendente
ordenAscendent.addEventListener("click", () => {

  lista.innerHTML = "";
  listaElementos(filterAscendent(personajesNameHouse));
});

//boton ordenar personajes alfabeticamente descendente

ordenDescendent.addEventListener("click", () => {
  lista.innerHTML = "";
  listaElementos(filterDescendent(personajesNameHouse));

})

let refresh = document.getElementById("boton3");
refresh.addEventListener('click', function() {
            location.reload();

})

