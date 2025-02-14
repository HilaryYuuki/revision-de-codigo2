// Cambie las variables var por const

const formulario = document.querySelector("#form");

formulario.onsubmit = function (e) {
  e.preventDefault(); // El metodo estaba mal escrito, lo cambie 

  const nombreFormulario = formulario.elements[0];// Cambie el nombre de las variables para que fueran mas descriptivas 
  const edadFormulario = formulario.elements[1]; 
  const nacionalidadFormulario = formulario.elements[2];

  const nombre = nombreFormulario.value;
  const edad = parseInt(edadFormulario.value, 10); // Al ser una entrada de formulario es con string asi que lo cambie para que lo convirtiera en numero para compararlo

  const i = nacionalidadFormulario.selectedIndex;
  const nacionalidad = i >= 0 ? nacionalidadFormulario.options[i].value : "";

  console.log(nombre, edad);
  console.log(nacionalidad);

  if (nombre.length === 0) {
    nombreFormulario.classList.add("error");
  }
  if (isNaN(edad) || edad < 18 || edad > 80) { 
    edadFormulario.classList.add("error");
  }
  agregarInvitado(nombre, edad, nacionalidad)// Llame la funcion agregar invitado para que cada que le demos click al boton se ejecute
};


//Elimine un boton extra que estaba de mas ya que no ayudaba en nada y estaba fuera de la tarjeta de invitados.

function agregarInvitado(nombre, edad, nacionalidad) {

  if (nacionalidad === "ar") {
    nacionalidad = "Argentina"
  }
  else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana"
  }
  else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana"
  }
  else if (nacionalidad === "per") {
    nacionalidad = "Peruana"
  }

const lista = document.getElementById("lista-de-invitados")

const elementoLista = document.createElement("div")
elementoLista.classList.add("elemento-lista")// Cambie el nombre del metodo ya que estaba mal (added)
lista.appendChild(elementoLista)

/*Elimine : const spanNombre = document.createElement("span")
const inputNombre = document.createElement("input")
const espacio = document.createElement("br")
spanNombre.textContent = "Nombre: "
inputNombre.value = nombre 
elementoLista.appendChild(spanNombre)
elementoLista.appendChild(inputNombre)
elementoLista.appendChild(espacio)
Ya que esta parte esta demas y hace que aparezca Nombre dos veces dentro de la tarjeta invitado*/

function crearElemento(descripcion, valor) {

const spanNombre = document.createElement("span")
const inputNombre = document.createElement("input")
const espacio = document.createElement("br")
spanNombre.textContent = descripcion + ": "
inputNombre.value = valor 
elementoLista.appendChild(spanNombre)
elementoLista.appendChild(inputNombre)
elementoLista.appendChild(espacio)
}

crearElemento("Nombre", nombre)
crearElemento("Edad", edad)
crearElemento("Nacionalidad", nacionalidad)


var botonBorrar = document.createElement("button")
botonBorrar.textContent = "Eliminar invitado"
botonBorrar.id = "boton-borrar"
var corteLinea = document.createElement("br")
elementoLista.appendChild(corteLinea)
elementoLista.appendChild(botonBorrar);

 botonBorrar.onclick = function() {

botonBorrar.parentNode.remove()
  }

}