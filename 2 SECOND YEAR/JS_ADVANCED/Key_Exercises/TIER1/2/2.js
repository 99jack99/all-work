
let pregunta=prompt("Dime texto: ")
let stopWords=new Set(["tonto","camello","pesto"])
let repetida=new Map()

function getTextStats(textillo, setillo) {
   let texto= textillo.split(" ")
 



   for (let i = 0; i < texto.length; i++) {

        if (repetida.has(texto[i])==false ) {

            repetida.set((texto[i]),0)
            
        }

        else if (repetida.has(texto[i])==true){

            repetida.set(texto[i]), repetida.get(texto[i] + 1)

           
        }

        let grande=0
        let nombre=""

    for (let clave of repetida.keys()){
      let val =  repetida.get(clave)
        if (val > grande) {
                grande=val
                marca=clave
        }

    }

    return nombre + "ha aparecido: "+ grande +"veces"
}


console.log(getTextStats(pregunta, stopWords))


