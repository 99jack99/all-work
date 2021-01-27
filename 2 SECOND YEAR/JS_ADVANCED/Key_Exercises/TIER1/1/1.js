
numeros=[]


for (let i = 0; i < 11; i++) {
   let pregunta = prompt("dime numeros: ")
   numeros.push(pregunta)
}


//-----------------PRIMERO--------------------: 
let sumaPrimera=0
todos=[]

for (let x = 0; x < numeros.length; x++) {
    sumaPrimera= sumaPrimera + numeros[x]
    todos.push(numeros[x])
    
        if (sumaPrimera>100) {
            break   
              
        }

}
console.log(sumaPrimera);
console.log(todos);



//-------------------------SEGUNDO--------------------:
let sumaSegunda=0
todos2=[]

for (let z = numeros.lenght; z > -1 ; z--) {
    sumaSegunda= sumaSegunda + numeros[z]
    todos2.push(numeros[z])
    
        if (sumaSegunda>100) {
            break
        }
}

console.log(sumaSegunda);
console.log(todos2);



//--------------------MEDIA----------------------------:

let Final=(sumaPrimera+sumaSegunda)/2
console.log(Final);




