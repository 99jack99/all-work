
let marcas=new Map()

let pregunta=""
while(pregunta != "fin"){

    pregunta=prompt("marcas")

    if (marcas.has(pregunta)) {
        marcas.set(pregunta, marcas.get(pregunta) + 1  )
    }

    else{
        marcas.set(pregunta, 1)
    }
}

if (pregunta == "fin"){

let grande=0
let marca=""

    for (let clave of marcas.keys()){
      let val =  marcas.get(clave)
        if (val > grande) {
                grande=val
                marca=clave
        }
    }
console.log("la marca mas frecuente es "+ marca + " con "+ grande+ " veces");

}









