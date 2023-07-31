

function viajar (destino) {
     if (destino === 'Brasil'){
    console.log("Gire a la IZQUIERDA");  
}   else if (destino === 'Argentina'){
    console.log("Gire a la DERECHA");
  } else {
    console.log("NOS PERDIMOS");
  }
}
viajar('Mexico')

function Puedemanejar(edad){
    if (edad >= '18') {       // el IF hace referencia a una condicion en la funcion 
console.log(true);
}  else {
    console.log(false);
}
}
Puedemanejar("16")
Puedemanejar("39")