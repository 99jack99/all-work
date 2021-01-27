
<!-- OBJETO JUGADOR -->

<?php


class Player{

   private $conexion="";
   private $buscar="";



    function __contruct(){

}



/* FUNCION LISTAR JUGADORES */
public function listadoJugadores(){

        $buscar= "select nombre from jugadores";
        $resultado=$this->conexion->query($buscar);

        
        return $resultado;
}
/* -------- */


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