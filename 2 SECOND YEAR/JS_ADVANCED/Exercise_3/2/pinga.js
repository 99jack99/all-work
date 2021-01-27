document.addEventListener('DOMContentLoaded', () => {


        butt=document.createElement("button")
        butt.textContent="Boton para acabar con tu vida"
        butt.style.margin="50px";

        

        document.body.appendChild(butt)




        

    function boton(){
        let cuerpo=document.getElementsByTagName("tbody")
        let oveja=cuerpo.getElementsByTagName("tr")



        cuerpo.insertAdjacentElement("afterbegin",oveja[3])
        cuerpo.remove(oveja[3])




        
    }


    butt.addEventListener("click", boton())

})