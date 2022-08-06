
//Importa datos 
function importarMensaje(){
  return document.getElementById("areaText").value.toLowerCase();
}


//Evalua y prepara los datos
function revisar(text){
 let mensaje = text;
 mensaje = text.replace(/[^a-zA-Z ]/g, "");
 if (mensaje != text){
  alert("Se eliminaron los caracteres invalidos de su mensaje")
  return mensaje;
} else {
  return mensaje;
}
}



//Modifica los mensaje 

function encriptar(mensaje){
  let encriptado ="";
  encriptado = mensaje.replace("e","enter");
  encriptado = encriptado.replace("i","imes");
  encriptado = encriptado.replace("a","ai");
  encriptado = encriptado.replace("o","ober");
  encriptado = encriptado.replace("u","ufat");
  return encriptado;
}

function desencriptar(mensaje){
  let desEncriptado ="";
  desEncriptado = mensaje.replace("enter","e");
  desEncriptado = desEncriptado.replace("imes","i");
  desEncriptado = desEncriptado.replace("ai","a");
  desEncriptado = desEncriptado.replace("ober","o");
  desEncriptado = desEncriptado.replace("ufat","u");
  return desEncriptado;
}


//Prepara los campos de datos


//Muestra los datos
  


//Activacion de la Botonera
document.getElementById("desencriptar").onclick = desencriptar
document.getElementById("encriptar").onclick = encriptar
