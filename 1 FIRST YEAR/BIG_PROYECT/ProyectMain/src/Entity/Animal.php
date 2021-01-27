<?php

namespace PPR\Entity;
use PPR\Core\Model;

class Animal extends Model{


private $id= "";
private $nombre= "";
private $edad ="";
private $descripcion="";
private $genero="";
private $vacunado="";

public function __construct(){
   
}



public function insertarPet(){

    $conexion=parent::getBdd();
    $consultaInsertarPet="INSERT INTO animal (name, age, description, sex, weight)
    VALUES ('$this->nombre', '$this->edad', '$this->descripcion', '$this->sexo', '$this->weight')";
    $conexion->query($consultaInsertarPet);

}

public function mostrarPetDisponible(){

    $resultado = array();
    $conexion = parent::getBdd();
    $consultaMostrarPet="SELECT * FROM animal where adopted = false";
    $resultadomysqli = $conexion->query($consultaMostrarPet);
    

    while($row = mysqli_fetch_assoc($resultadomysqli))
        array_push($resultado,$row);
    return $resultado;

}


public function deletePet($petty){
    $conexion=parent::getBdd();
    $consultaDeletePet=" DELETE id FROM animal WHERE id='$petty'";
    $resultaDelete=$conexion->query($consultaDeletePet);

return "HAS ELIMINADO ESA MASCOTA";
}


public function rellenarPetxprotective($idShelter, $idPersona){
    $conexion=parent::getBdd();
    $consultaAutocompletarProc= "INSERT INTO axs (id_protective, id_pet) 
    values ($idShelter, $idPerssona)";
    $conexion->query($consultaAutocompletarProc);

}

public function rellenarFavs($idPet, $idPersona){
    $conexion=parent::getBdd();
    $consultaAutocompletarFavs= "INSERT INTO axpfav (id_pet, id_person)
    values ($idPet, $idPerson)";
    $conexion->query($consultaAutocompletarFavs);

}

public function getshelter($id)
{
    $conexion = parent::getBdd();
    $consultaMostrarPet="SELECT s.name,s.location FROM animal a JOIN axs x ON a.id = x.id_animal JOIN shelter s ON s.id = x.id_shelter WHERE a.id = '$id' ";
    $resultadomysqli = $conexion->query($consultaMostrarPet);
    $row = mysqli_fetch_assoc($resultadomysqli);
    return $row;
}

public function getPet($id)
{
    $conexion = parent::getBdd();
    $consultaMostrarPet="SELECT a.id,a.name,a.age,a.weight,a.sex,a.species,a.description,s.name AS sname, s.location FROM animal a JOIN axs x ON a.id = x.id_animal JOIN shelter s ON s.id = x.id_shelter WHERE a.id = '$id' ";
    $resultadomysqli = $conexion->query($consultaMostrarPet);
    $row = mysqli_fetch_assoc($resultadomysqli);
    return $row;
}

 public function comprobarCampos($post){
    $error=null;
    if(!isset($post)  ||  !isset($post["nombre"])  ||  !isset($post["edad"])  ||  !isset($post["descripcion"])  ||  !isset($post["genero"])  ||  !isset($post["vacinado"])){
      $error="";
    }elseif($post["nombre"]==""){
      $error="Debes rellenar este nombre";
    }
    elseif($post["edad"]==""){
      $error="No has introducido el edad";
    }
    elseif($post["descripcion"]==""){
      $error="No has introducido la descripcion";
    }
    elseif($post["genero"]==""){
      $error="No has introducido el genero";
    }
    elseif($post["vacunado"]==""){
        $error="No has introducido el vacinado";
    }

    else{
      $error=false;
      $this->nombre=$post["nombre"];
      $this->edad=$post["edad"];
      $this->descripcion=$post["descripcion"];
      $this->genero=$post["genero"];
      $this->vacinado=$post["vacinado"];
    }
    return $error;
  } 

  
  public function getId()
  {
      return $this->id;
  }

  public function getNombre()
  {
      return $this->nombre;
  }

  public function getEdad()
  {
      return $this->edad;
  }

  public function getDescripcion()
  {
      return $this->descripcion;
  }

  public function getGenero()
  {
      return $this->genero;
  }

  
  public function setId($id)
  {
      $this->id = $id ;
  }

  public function setName($nombre)
  {
      $this->nombre = $nombre ;
  }

  public function setEmail($edad)
  {
      $this->edad = $edad ;
  }

  public function setdescripcion($descripcion)
  {
      $this->descripcion = $descripcion ;
  }

  public function setgenero($genero)
  {
      $this->genero = $genero ;
  }

  public function setVacuna($vacunado)
  {
      $this->vacunado = $vacunado ;
  }


} /* FIN */ 

?>