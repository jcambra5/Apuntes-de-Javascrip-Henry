


function mayoroMenoryPar(num){
    if(num > 5 && num < 10 && num % 2===0)console.log(true);
    else console.log(false);

   // con el operador &&, todas las consiciones deben ser verdaderas para que se ejecute.
}   

//mayoroMenoryPar()
//mayoroMenoryPar(8)

function operaradorOr(str){
    if ( str=== "Henry" || str.length< 2) console.log(true);
    else console.log(false);
}
//operaradorOr("Javascrips");

function negacion(permiso){
    if(!permiso) console.log('tiene permiso');
    //else console.log('No tiene permiso');

}
//negacion(false)

function condicionCompleja(num){
    if (num > 9 && num % 2=== 0 || num <3)console.log(true);
    else console.log(false);
}
condicionCompleja(12)
condicionCompleja(3)
