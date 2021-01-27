
let x = 5
let array=[4, 6, 7, 3]

function todoElMundoOdiaACris(x, yarray){

    for (let i = 0; i < array.length; i++) {
        if(yarray[i]<x){
            return "MAL LOCO"
        }
        else{
            return "NOTBATTATATAL"
        }
        
    }

}

console.log(todoElMundoOdiaACris(x, array));
