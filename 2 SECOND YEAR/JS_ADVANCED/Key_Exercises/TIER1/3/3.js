
// ------------------------------JERCICIO A-----------------------

let texto=["odio","jugar","por","la","madrugada"]


function ejercicio3a(cadena) {

textoGrande=0

    cadena.forEach(x => {
            if (textoGrande[x]>textoGrande) {
                textoGrande=textGrande[0]

            }
            return textoGrande
    });
}

//-------------------EJERCICIO B-------------------------------
let numeros=[2,4,5,6]

function ejercicio3b(numeros){

let jack = numeros.reduce((a,b) => a + b)
jack= jack/2

numeros.filter( x => {
    return x > jack
    })
    
}


//----------------------------------RESULTADOS--------------------

console.log(ejercicio3b(numeros));
console.log(ejercicio3a(texto));

