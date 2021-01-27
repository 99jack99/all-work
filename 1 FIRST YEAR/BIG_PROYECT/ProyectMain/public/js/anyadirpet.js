function comp(){

    let nombre=document.getElementById('name').value;
    let edad=document.getElementById('age').value;
    let descripcion=document.getElementById('description').value;
    let genero=document.getElementById('gender').value;
    let vacinas=document.getElementById('vaccines').value;

    let error=true;

  


    if(nombre==""){
document.getElementsByid("unos").style.border-bottom-color = "red";
      error=false;
    }
    if (edad=="") {
document.getElementsByid("dous").style.border-bottom-color = "red";
      error=false;
    }
    if (descripcion=="") {
 document.getElementsByid("treis").style.border-bottom-color = "red";
      error=false;
    }
    if (genero=="") {
document.getElementsByid("cuatrous").style.border-bottom-color = "red";
      error=false;
    }
    if (vacinas=="") {
document.getElementsByid("cincous").style.border-bottom-color = "red";
        error=false;
            }

    if (error==false) {
      return false;
    }
  }



function elim(){

if(nombre != ""){
  nombre="";
}
if(edad != ""){
  edad="";
}
if(descripcion != ""){
    descripcion="";
}
if(genero != ""){
      genero="";
}
if(vacinas != ""){
    vacinas="";
}

}