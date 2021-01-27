

let array=[5, 6, 2, 9, 1]

function minimun(a){


    if (a.length == 0){
        return "La tienes chiquitina"
    }


    else{

        let operando=a.reduce((a, b)=>Math.min(a,b))

        return operando
    }
}

console.log(minimun(array));
