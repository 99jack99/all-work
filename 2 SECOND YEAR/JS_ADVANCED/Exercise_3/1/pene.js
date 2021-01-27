document.addEventListener('DOMContentLoaded', () => {



    parrafo = document.createElement("p");


    document.body.appendChild(parrafo)
    parrafo.textContent = "swiper no robes";


    imagen = document.createElement("img")
    parrafo.appendChild(imagen)

    imagen.src="swiper.jpg"
    imagen.style.height="200px"
    imagen.style.width="200px"



    linka= document.createElement("a")
    document.body.appendChild(linka)

    linka.textContent="link a hotel 5* pagado"
    linka.href="www.floridauniversitaria.es"



    lista=document.createElement("ul")
    document.body.appendChild(lista)

    listab=document.createElement("li")
    listab.textContent="morir"

    listac=document.createElement("li")
    listac.textContent="morir 2 veces"

    listad=document.createElement("li")
    listad.textContent="resucitar muerto"

  
    
    lista.insertAdjacentElement("afterbegin", listab)

    lista.insertAdjacentElement("beforeend", listac)
    lista.insertAdjacentElement("beforeend", listad)
   






})