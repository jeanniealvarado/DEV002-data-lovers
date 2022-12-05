import { characters, personajesYcasas, gMasculino, gFemenino, filterAscendent, filterDescendent } from './data.js';

import data from './data/harrypotter/data.js';


let lista = document.getElementById("characteresList");
let ordenAscendent = document.getElementById("filterAscendent");
let ordenDescendent = document.getElementById("filterDescendent");
let filtroMasculino = document.getElementById("boton1")
let filtroFemenino = document.getElementById("boton2")


let personajesNameHouse = personajesYcasas(data);

listaElementos(characters(data));

function listaElementos(elements) {
  elements.forEach((element) => {
    let li = document.createElement("li");
    let estilo = document.createElement("span");
    let p = document.createElement("p");

    p.innerHTML = element.name;

    if (element.gender == "Male") {
      estilo.style.color = "#740001";
    } else if (element.gender == "Female") {
      estilo.style.color = "#F0C75E";

    } else {
      estilo.style.color = "#000";
    }
    lista.appendChild(li);
    li.appendChild(p);

  });

};

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
