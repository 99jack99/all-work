


let array=[2, 2, 2, 2, 1]


function media(a){

    if (a.length == 0){
        return "La tienes pequeña"
    }

    else{

        let operacion = a.reduce((number1, number2)=> (number1 + number2)/2)


        return operacion
    }
}



console.log(media(array));
