function crearMapa(elarray) {

// creacion caja
let body = document.getElementsByTagName("body")[0];

let creacionTable = document.createElement('table');
    creacionTable.className = "caja";
    creacionTable.style.border="2px solid black"

    body.appendChild(creacionTable);


// creacion filas y columnas
for (let i = 0; i < 8; i++){

    var creacion1=document.createElement('tr')

    for (let x = 0; x < 8; x++){

    var creacion2=document.createElement("td")

    creacion1.id="celda_"+ i +"_"+ x +""
    creacion2.id="celda_"+ i +"_"+ x +""

    creacion1.style.height="50px"
    creacion1.style.width="50px"

    creacion2.style.height="50px"
    creacion2.style.width="50px"

    caja.appendChild(creacion1)
    caja.appendChild(creacion2)
    }
}


// verificar si es pisable o no
for (let p = 0; p < elarray.length; p++) {
    for (let o = 0; o < elarray.length; o++) {
        
        if (elarray[p]==1) {
            document.getElementById("celda_"+p+"_"+o+"").style.backgroundColor="green"
        }
        else{
            document.getElementById("celda_"+p+"_"+o+"").style.backgroundColor="black"
        }
    }    
}




} //FIN FUNCION 



function crearSalida(x,y){
  
let adver = document.createElement('p');
    adver.textContent = "EXIT";

let cual=document.getElementsByClassName("celda_"+x+"_"+y+"")
cual.appendChild(adver);

}

document.addEventListener('DOMContentLoaded', () => {
    let disponibilidad = [[1, 0, 0, 0, 0, 1, 1, 1],
    [1, 1, 1, 0, 1, 0, 1, 0],
    [1, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 1, 0, 1, 0, 1, 1],
    [0, 0, 1, 1, 1, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 1, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0, 0]];


// Ejercicio 3 ( llamar funciones)

crearMapa(disponibilidad)
crearSalida(1,2)

// Ejercicio 4 - ( boton )

function crear(NumFila, NumCol, cuando, cuantasFilas ){
    let fila=document.getElementsByClassName("celda_"+NumFila+"_"+NumCol+"")
    fila.style.backgroundColor="green"

    let boton = document.getElementById("add_row")


    for (let i = 0; i < cuantasFilas; i++) {
        let masfilas = document.createElement("td")

        if (cuando=="after") {
            boton.insertAdjacentElement("beforebegin", masfilas)
        }

        else if(cuando=="before"){
            boton.insertAdjacentElement("afterbegin", masfilas)
        }} 

}

crear(1,2,"after",2) 

});