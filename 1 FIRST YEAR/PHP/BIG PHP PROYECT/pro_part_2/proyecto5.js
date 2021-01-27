
var mensaje=document.getElementById('mensaje');
var movimiento=document.getElementById('movimientoHecho');
var cantidad=document.getElementById('numMovimientos');
var movimientos=0;


/* 
function comprobando(){
  var fila=document.getElementById('fila').value;
  var columna=document.getElementById('columna').value;

  movimiento.value=`(${fila},${columna})`;
  movimientos=movimientos+1;
  cantidad.value=movimientos;

  if ((fila<0 || fila>6) || (columna<0 || columna>6)){
      mensaje.value="Mala combinacion!"
    }
    else {
      mensaje.value=`(${fila},${columna}) Es valido!`
    }
    if ((fila=="") || (columna=="")){
        mensaje.value="Pon algo conchesumae!"
        movimiento.value="No has puesto nada!"
      }
  }
 */


function doscasillas(){
 var azar=Math.floor(Math.random()*36)+1;
 return azar;
}


var posAzar= doscasillas();
var posAzar2 = doscasillas();

if (posAzar=posAzar2)
{
    var posAzar=posAzar+1;
    var posAzar2=posAzar-2;

    if (posAzar>36){
        var posAzar=posAzar-3;
    }
}
    else if (posAzar2<1)
{
  var posAzar2=posAzar2+3;
}
document.getElementById(posAzar).style.color="white";
document.getElementById(posAzar2).style.color="blue";


function cachao(){
  
}












  