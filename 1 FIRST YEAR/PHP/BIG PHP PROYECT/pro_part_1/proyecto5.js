
var mensaje=document.getElementById('mensaje')
var movimiento=document.getElementById('movimientoHecho');
var cantidad=document.getElementById('numMovimientos');
var movimientos=0;



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

  /*
filacas=[1,3,4,6,2,5];
filacas1=[2,3,5,6,1,4];
filacas2=[2,6,3,4,1,5];
filacas3=[6,5,4,2,1,3];
filacas4=[5,3,2,1,4,6];
filacas5=[3,4,6,2,1,5];

colores=["rojo","azul","amarillo","verde","blanco","purpura"]
numcol= [];

for (let i=0; i<6; i++){
  numrandom=Math.round(Math.random()*5)
    numcol[i]=colores[numrandom];
  }
 */


colores=["rojo","azul","amarillo","verde","blanco","purpura"]
var cat=colores[Math.round(Math.random()*6)];

crear_tabla();

function crear_tabla(){

var creartr="";
var creartd="";

  for(let i=0; i<6; i++){
    creartr += "<tr class=\"tere\"></tr>"
        for (let p=0; p<6; p++){
          creartd += "<td class=\"tede\"></td>"
        }
  }  
document.getElementById("pene").innerHTML=creartr; /*pene=id tabla*/ 
document.getElementsByClassName("tere").innerHTML=creartd;
}

  