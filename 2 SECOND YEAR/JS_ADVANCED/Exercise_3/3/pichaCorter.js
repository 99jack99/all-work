document.addEventListener("DOMContentLoaded", () =>{


    butt=document.createElement("button")
    butt.textContent="Boton para meterla"
    butt.style.margin="50px";

    document.body.appendChild(butt)




    butt.addEventListener("click", event =>{

        let name=prompt("wacha nam?")
        let surname=prompt("wacha sur?")
        let cash=prompt("charge 15 for d?")

            let bodu=document.getElementsByTagName("tbody")[0]
            
        let le=document.createElement("tr")
        let lee=document.createElement("td")
        
        bodu.appendChild(le)

        le.appendChild(lee)
        bodu.lastChild.firstChild.textContent=name

        le.appendChild(lee)
        bodu.lastChild.firstChild.nextSibling.textContent=surname
        
        le.appendChild(lee)
        bodu.lastChild.lastChild.textContent=cash





    })
})