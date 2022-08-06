

//1-Importa datos 

function importarMensaje() {
  console.log(document.getElementById("areaText").value.toLowerCase());
  return document.getElementById("areaText").value.toLowerCase();
}


//2-Evalua y prepara los datos
function revisar(text) {
  let mensaje = text;
  mensaje = text.replace(/[^a-zA-Z ]/g, "");
  if (mensaje != text) {
    alert("Se eliminaron los caracteres invalidos de su mensaje")
    return mensaje;
  } else {
    return mensaje;
  }
}


//3-Prepara y elimina el campo de imagen en html


//4-Muestra los datos en html
function mostrar(mensaje) {
 document.querySelector(".mensajeFinal").innerHTML = mensaje;
}



//5- Encripta el mensaje
function encriptar() {
  let mensaje = revisar(importarMensaje());
  mensaje = mensaje.replace("e", "enter");
  mensaje = mensaje.replace("i", "imes");
  mensaje = mensaje.replace("a", "ai");
  mensaje = mensaje.replace("o", "ober");
  mensaje = mensaje.replace("u", "ufat");
  mostrar(mensaje)
}

//6- Desencripta el mensaje
function desencriptar() {
  let mensaje = revisar(importarMensaje());
  mensaje = mensaje.replace("enter", "e");
  mensaje = mensaje.replace("imes", "i");
  mensaje = mensaje.replace("ai", "a");
  mensaje = mensaje.replace("ober", "o");
  mensaje = mensaje.replace("ufat", "u");
  mostrar(mensaje)
}



//Activacion de la Botonera
document.getElementById("encriptar").onclick = encriptar
document.getElementById("desencriptar").onclick = desencriptar

