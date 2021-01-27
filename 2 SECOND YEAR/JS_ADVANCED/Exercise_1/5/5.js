

let conjunto1 = new Set([1, 2, 7])
let conjunto2 = new Set([1, 2, 8])


// primera parte
function union(x, y) {
    let conjuntoUnion = new Set([])

    for (let value of conjunto1) {
        conjuntoUnion.add(value)
    }

    for (let value of conjunto2) {
        conjuntoUnion.add(value)
    }


    return conjuntoUnion
}



// segunda parte
function intersection(x, y) {
    let conjuntoIntersection = new Set([])


    for (let value of conjunto1) {
        if (conjunto2.has(value) == true) {
            conjuntoIntersection.add(value)
        }
    }

    return conjuntoIntersection
}




// tercera parte
function difference(x, y) {
    let conjuntoDifference = new Set([])

    for (let value of conjunto1) {
        if (conjunto2.has(value) == false) {
            conjuntoDifference.add(value)
        }
    }
    for (let value of conjunto2) {
        if (conjunto1.has(value) == false) {
            conjuntoDifference.add(value)
        }
    }

    return conjuntoDifference


}


console.log(union(conjunto1, conjunto2))
console.log(intersection(conjunto1, conjunto2))
console.log(difference(conjunto1, conjunto2))
