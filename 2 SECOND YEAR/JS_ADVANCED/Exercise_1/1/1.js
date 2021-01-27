


let alreadyVisitedSet = new Set(["google.com", "firefox.com", "opera.com"])
extractedURLsArray = ['google.com', 'origen.com', 'microsoft.com']


function shouldBeVisited(alreadyVisitedSet, extractedURLsArray) {
    let muestraTodo = new Set()

    for (let i = 0; i < extractedURLsArray.length; i++) {



        if (alreadyVisitedSet.has(extractedURLsArray[i]) == false) {
         
            
            muestraTodo.add(extractedURLsArray[i])
        }

    }

    return muestraTodo


}

console.log(shouldBeVisited(alreadyVisitedSet, extractedURLsArray))

