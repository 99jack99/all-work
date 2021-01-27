// Crea una función llamada multipleFactorial que tome como parámetro un array de número llamado dataArray,
// y devuelva un núevo array que sea el resultado de 
// calcular el factorial para cada uno de los elementos en el array. 
// Emplea funciones de orden superior (e.g., map, filter, reduce, etc.)

let array = [3, 5, 7, 1, 1]

function factorial (n) {
	let total = 1; 
	for (i=1; i<=n; i++) {
		total = total * i; 
	}
	return total; 
}

function multipleVerga(yarray){
    if (yarray.length == 0){
        return "El kkk va a por ti"
    }


    else{
        let filtrado= yarray.map(factorial)

        return filtrado
          
    }
}

console.log(multipleVerga(array));



