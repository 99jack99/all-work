document.addEventListener('DOMContentLoaded', () => {
  //DESARROLLA TU CÓDIGO A PARTIR DE AQUÍ


  // 1
  let LastColor=""
  let ActualColor = "black"
  let ActualHerramienta = null


  // cambio a hexagesimal
  function RGBToHex(rgbString){
  let value = rgbString.replace(/rgb|\s|\(|\)/g,"").split(","). map(x => {
      x = parseInt(x).toString(16);
      
      return (x.length==1) ? "0"+x : x;
  });
  return "#"+value.join("");
  }


  // 2
  function ChangeColor(elemento, color) {

    elemento.style.backgroundColor = color;

  }



  // 3
  function pushToolButton(elemento) {

    //si no hay nada
    if (ActualHerramienta == null) {
      elemento.style.backgroundColor = "#ffcc66"
      ActualHerramienta = elemento
    }
    //si vuelves a seleccionarlo, se deselecciona
    else if (ActualHerramienta == elemento) {
      ActualHerramienta = null
      elemento.style.backgroundColor = "silver"
    }

    //si ya esta seleccionado
    else {
      elemento.style.backgroundColor = "#ffcc66"
      ActualHerramienta.style.backgroundColor = "silver"
      ActualHerramienta = elemento
    }
  }

  // 4
  let botones = document.getElementsByClassName("button")

  for (let i = 0; i < botones.length; i++) {
    botones[i].addEventListener('click', event => pushToolButton(event.currentTarget))

  }


  // 5
  let grid = document.getElementById("canvas_grid")
  let cajas = document.getElementsByClassName("canvas_cell")

  grid.addEventListener('click', event => {

    // pincel
    if (ActualHerramienta.id == "brush_button") {
      for (let i = 0; i < cajas.length; i++) {
        LastColor = cajas[i].style.color
        
      }
      ChangeColor(event.target, ActualColor)
    }

    // goma
    else if (ActualHerramienta.id == "rubber_button") {
      ChangeColor(event.target, "white")
    }

    // basura
    else if (ActualHerramienta.id == "trash_button") {

      for (let i = 0; i < cajas.length; i++) {
        cajas[i].style.backgroundColor = "white"
      }

    }

    // pipeta
    else if (ActualHerramienta.id == "picker_button") {
      ActualColor = event.target.style.backgroundColor;
      ChangeColor(document.getElementById("main_color_cell"), event.target.style.backgroundColor)
      document.getElementById("chosen_color").style.backgroundColor = ActualColor
      document.getElementById("chosen_color").textContent=RGBToHex(event.target.style.backgroundColor)

    }

    // cubo
    else if (ActualHerramienta.id == "bucket_button") {

      for (let i = 0; i < cajas.length; i++) {

        if (cajas[i].style.backgroundColor != ActualColor) {
          cajas[i].style.backgroundColor = ActualColor

        }
      }
    }


  })


  // 6

  document.addEventListener('keydown', event => {

    if (event.key == "b") {
      pushToolButton(document.getElementById("brush_button"));
    }

    else if (event.key == "r") {
      pushToolButton(document.getElementById("rubber_button"));
    }

    else if (event.key == "p") {
      pushToolButton(document.getElementById("picker_button"));
    }

    else if (event.key == "c") {
      pushToolButton(document.getElementById("bucket_button"));
    }

    else if (event.key == "t") {
      pushToolButton(document.getElementById("trash_button"));
    }

  })

  // 7
  grid2 = document.getElementById("color_picker")

  grid2.addEventListener("click", event => {

    ChangeColor(document.getElementById("main_color_cell"), event.target.style.backgroundColor)
    ActualColor = event.target.style.backgroundColor
    document.getElementById("chosen_color").textContent=RGBToHex(event.target.style.backgroundColor)
    document.getElementById("chosen_color").style.backgroundColor = ActualColor
  })


  // 8
  grid.addEventListener("mouseover", event =>{
    if (ActualHerramienta.id=="brush_button") {
      ChangeColor(event.target, ActualColor)
    
    }
  
    

  })

 
  grid.addEventListener("mouseout", event =>{
    if (ActualHerramienta.id=="brush_button"){
      ChangeColor(event.target, LastColor)
    }
  })

  
  
  

});

















