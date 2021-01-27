document.addEventListener('DOMContentLoaded', () => {
    let body = document.getElementsByTagName("body")[0];
    let contenido = document.createElement('tbody');
        body.appendChild(contenido);
    
    for (let i = 1; i < 9; i++) {

    let trs = document.createElement('tr');
    contenido.appendChild(trs);

        for (let i = 1; i < 9; i++) {
            let color = "";
            let td= document.createElement('td');
            td.id = "cell_"+i+"_"+i;
            trs.appendChild(td);
            if (i % 2 == 0 ) {
                if (i % 2 == 0 ) {
                    color = "white"; 
            }
            else{
                color = "black";
            }}
                
            else{
                if (i % 2 == 0 ) {
                    color = "black";
            }

            else{
                color = "white";
            }}


td.style.backgroundColor = color;
td.className = color+"_cell"
td.style.width = "90px";
td.style.height = "90px";


            }
                    
                
    }
});

