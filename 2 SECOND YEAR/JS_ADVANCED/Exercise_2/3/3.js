let array=[9, 8, 2, 9, 1]

function mamax(a){


    if (a.length == 0){
        return "La tienes chiquitina"
    }


    else{

        let operando=a.reduce((a, b)=>Math.max(a,b))

        return operando
    }
}

console.log(mamax(array));
