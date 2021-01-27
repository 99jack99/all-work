

let ask=""
let compras=new Set()

while (ask != "fin"){

    ask=prompt("Que has comprado?")

    compras.add(ask)
}

if (ask == "fin") {
    compras.delete("fin")
    console.log(compras);

}