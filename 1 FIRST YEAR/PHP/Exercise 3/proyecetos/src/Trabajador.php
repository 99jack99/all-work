<?php

class Trabajador extends Conexion
{

  private $nombre;
  private $apellidos;
  private $precio;


  function __construct()
  {

  }

  public function comprobarCampos($post){
     $error=null;
     if(!isset($post)||!isset($post["nombre"])||!isset($post["apellidos"])||!isset($post["precio"])){
       $error="";
     }elseif($post["nombre"]==""){
       $error="Debes rellenar este campo";
     }elseif($post["apellidos"]==""){
       $error="No has introducido el apellido";
     }elseif($post["precio"]==""){
       $error="No has introducido el precio";
   
     }else{
       $error=false;
       $this->nombre=$post["nombre"];
       $this->apellidos=$post["apellidos"];
       $this->edad=$post["precio"];
    
       echo "Bien!";
     }
     return $error;
   }



   public function insertarTrabajador()
   {
      $consulta="INSERT INTO trabajador (nombre, apellidos, precio_hora)
      VALUES ('$this->nombre', '$this->apellidos',  '$this->precio')";
      $this->conexion->query($consulta);
    }

    
    public function ultimoRegistro()
    {
      $consulta="SELECT * FROM trabajador ORDER BY id DESC LIMIT 1";
      $resultado=$this->conexion->query($consulta);
      foreach($resultado as $value){
        $idTrabajador=$value["id"];
      }
      return $idTrabajador;


    }
    public function insertarProyTrab($trabajador,$proyecto, $horas)
    {
      $consulta="INSERT INTO trabajador_proyecto (id_trabajador, id_proyecto, horas)
      VALUES ('$trabajador', '$proyecto', '$horas')";
      $this->conexion->query($consulta);
    }
}

 ?>



