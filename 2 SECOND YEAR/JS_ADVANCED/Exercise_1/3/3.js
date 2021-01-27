
let pregunta =""
let calles=new Set()

while (pregunta != "fin"){
    pregunta=prompt("Dime Calles Ninyo")
    
    calles.add(pregunta)

}

if (pregunta == "fin") {
calles.delete("fin")

    console.log(calles);
    
    
}