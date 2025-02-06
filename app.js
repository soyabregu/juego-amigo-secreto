let arrayAmigos = []; //declara el array

function agregarTextoElemento(elemento, texto) {
  let elementoHtml = document.querySelector(elemento);
  elementoHtml.innerHTML = texto; //ASIGNO EL TEXTO CAMBIO EL INTERIOR 
}

agregarTextoElemento("h1", "Amigo Secreto");
agregarTextoElemento("h2", "Digite el nombre de sus amigos ");



function agregarAmigo() {
  let inputNombre = document.getElementById("amigo");
  let nombre = inputNombre.value.trim();

  // Verifica si el valor está vacío '' eso significa null
  if (nombre === "") {
    alert("Por favor, inserte un nombre.");
    return; // Detiene la ejecución de la función si el valor es inválido y larga el mensaje
  }
  arrayAmigos.push(nombre); //agrega el elemento nuevo al final de la lista

  // Limpia la caja para que el usuario pueda poner un nuevo nombre
  inputNombre.value = "";
  listaPersona();
}

//contenido de la lista de nombres
function listaPersona() {
  let elementosLista = document.getElementById("listaAmigos");
  elementosLista.innerHTML = ""; // borra
  for (let i = 0; i < arrayAmigos.length; i++) {//.LENGTH ES  LA CANTIDAD DE ELEMENTOS 
    //contador i
    elementosLista.innerHTML ="<li>" + arrayAmigos[i] + "</li>" + elementosLista.innerHTML;
  }
}

//sorteo de amigos
function sortearAmigo() {
  if (arrayAmigos.length <=1 ) {
    //menor igual 1 porque carece de logica  sortear un solo amigo.
    alert("Por  favor debe ingresar más amigos ");
    return;
  }

  let numeroRandom = Math.floor(Math.random() * arrayAmigos.length );
     
  let resultado  = document.getElementById('resultado');//estu es un numero , justo lo que dice 

  resultado.innerHTML = arrayAmigos[numeroRandom] ;
}






























