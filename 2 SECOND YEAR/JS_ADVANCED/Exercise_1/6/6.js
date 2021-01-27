
function diceThrow(caras) {
    var azar = Math.round(Math.random() * caras)

    return (azar)
}




let Ncaras = prompt("Cuantas caras tiene tu dado?")
let Mdados = prompt("Cuantos dados quieres?")



function lanzaDados(n, m) {
    let almacen = new Map();

    for (let i = 0; i < 1000; i++) {
        let bote = 0
        for (let i = 0; i < m; i++) {
            bote = diceThrow(n) + bote


            if (almacen.has(bote) == false) {
                almacen.set(bote, 1)
            }
            else {
                almacen.set(bote, almacen.get(bote) + 1)
            }
        }




    }

    let masGrande = 0
    let ahoraGrande = 0

    for (let clave of almacen.keys()) {
        let ahoraGrande = almacen.get(clave)
        if (ahoraGrande > masGrande) {
            masGrande = ahoraGrande
            ahoraGrande=almacen.get(masGrande)
        }


    }
    
    return masGrande
    
}


console.log(lanzaDados(Ncaras, Mdados));




