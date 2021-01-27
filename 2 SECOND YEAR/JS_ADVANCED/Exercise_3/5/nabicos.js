document.addEventListener('DOMContentLoaded', () => {


let body = document.getElementsByTagName("body")[0];

let creacion1 = document.createElement('div');
    creacion1.textContent = "DAW";
    creacion1.className = "header";

    body.appendChild(creacion1);

let creacion2 = document.createElement('div');
    creacion2.textContent = "best ciclo EUW";
    creacion2.className = "content";

    body.appendChild(creacion2);

let creacion3 = document.createElement('div');
    creacion3.textContent = "DAW";
    creacion3.className = "header";

    body.appendChild(creacion3);

let creacion4 = document.createElement('div');
    creacion4.textContent = "best second ciclo EUW";
    creacion4.className = "content";
    
    body.appendChild(creacion4);

    let header1 = document.body.getElementsByTagName("div")[0];
    let header2 = document.body.getElementsByTagName("div")[2];
    header1.addEventListener('click', desplegarCreacion1);
    header2.addEventListener('click', desplegarCreacion2);
    let contador = true;



function desplegarCreacion1() {
        if (contador == false) {
            body.insertBefore(creacion2, creacion3);
            contador = true;
        }
        else {
            creacion2.remove();
            contador = false;
        }
}


let contador1 = true;



function desplegarCreacion2() {
        if (contador1 == false) {

            body.appendChild(creacion4);
            contador1 = true;
        }
        else {
            creacion4.remove();
            contador1 = false;
        }
    }



});