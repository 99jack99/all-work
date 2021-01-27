
<!-- OBJETO EQUIPO -->

<?php

class Equipo{


    public $nombre="";
    public $ciudad="";
    public $division="";
    public $conferencia="";


    function __contruct(){

    }




/* FUNCION INSERTAR EQUIPO */

    function insertarEquipo(){

    $consulta="insert into equipos (Nombre, Ciudad, Conferenia, Division) values ($this->nombre,$this->ciudad,$this->conferencia,$this->division)";
    $resultado=$this->conexion->query($consulta);

    return resultado;
    }

/* ------- */



/* FUNCION COMPROBAR CAMPOS */

function comprobarCampos($post){

    if (!isset($post) || !isset($post["Nombre"]) || !isset($post["Ciudad"]) || !isset($post["Conferencia"]) || !isset($post["Division"])){
        $error="";

    }

    elseif ($post["Nombre"]=""){
        echo "Rellena nombre";
    }
    elseif ($post["Ciudad"]=""){
        echo "Rellena ciudad";
    }
    elseif ($post["Conferencia"]=""){
        echo "Rellena conferencia";
    }
    elseif ($post["Division"]=""){
        echo "Rellena division";
    }

    else{
        $error=false;
        $this->nombre=$post("Nombre");
        $this->ciudad=$post("Ciudad");
        $this->conferencia=$post("Conferencia");
        $this->division=$post("Division");

    }

}

/* ------- */











/* FUNCION CONECTAR BASE DA DATOS */
public function conectar(){

    $this->conexion = new mysqli("localhost", "root", "", "nba");
    if ($this->conexion->connect_errno) {
        echo "Fallo al conectar a MySQL: (" . $this->conexion->connect_errno . ") " . $this->conexion->connect_error;
    }
  }
/* -------- */
    



}

?>