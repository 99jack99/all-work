
// 	Crea un programa que lea por teclado datos de partidos
//  de fútbol hasta que un carácter especial sea leído.
//  El usuario deberá introducir el equipo local, el equipo visitante, los goles marcados por el equipo visitante, 
//  y los goles marcados por el equipo local. Una vez leídos los datos de todos los partidos,
//  el usuario introducirá un número positivo n.
//  Entonces, el programa imprimirá por pantalla la suma de los goles marcados por el equipo 
//  en los n partidos donde marcó más goles.



let equipo1=""
let equipo2=""
let goles1=""
let goles2=""

while(equipo1 != "fin" || equipo2 != "fin"){

    equipo1=prompt("Dime equipo 1: ")
    goles1=prompt("Goles equipo 1: ")
    equipo2=prompt("Dime equipo 2: ")
    goles2=prompt("Goles equipo 2: ")

    let liga=new Map()

        liga.set(equipo1, [goles1])
        liga.set(equipo2, [goles2])


    
if (equipo1 == "fin" || equipo2 == "fin"  ){
        
    console.log(liga);
    
}




}

//NO SE HACERLO, LO SIENTO.




  






