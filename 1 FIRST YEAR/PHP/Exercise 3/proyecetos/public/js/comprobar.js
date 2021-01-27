function comprobar(){
    let nombre=document.getElementById('nombre').value;
    let apellidos=document.getElementById('apellidos').value;
    let edad=document.getElementById('precio').value;

    let error=true;
    if(nombre==""){
      error=false;
      alert("RELLENA EL CAMPO");
    }

    if (apellidos=="") {
      error=false;
      alert("RELLENA EL CAMPO");
    }
    
    if (precio=="") {
      error=false;
      alert("RELLENA EL CAMPO");
    }

    if (error==false) {
      return false;
    }
  }
  