<?php

 /* objeto jugador */


 class Jugador{

    public $nombre="";
    public $apellidos="";
    public $edad="";
    public $curso="";
    public $error="";
    public $c="";



     public function conexion(){
        $this->c = new mysqli("localhost", "root", "", "proy6");
        if ($this->c->connect_errno) {
            echo "Fallo al conectar a MySQL: (" . $this->c->connect_errno . ") " . $this->c->connect_error;
        }
     }

     public function insertar(){

         $consulta= "INSERT INTO `usuarios` (`nombre`, `apellidos`, `edad`, `curso`) VALUES ('$this->nombre', '$this->apellidos', '$this->edad', '$this->curso')";
         $result=$this->c->query($consulta);
        
         return $result;
     }


     public function mostrar(){
        $consulta2="select * from usuarios";
        $result2=$this->c->query($consulta2);

        return $result2;

     }



     public function comprobacion($post){
        if (!isset($post) || !isset($post["nombre"]) || !isset($post["apellidos"]) || !isset($post["edad"]) || !isset($post["curso"])){
            $error="Escribe algo";
        }
    
        elseif ($post["nombre"]=""){
            echo "Rellena nombre";
        }
        elseif ($post["apellidos"]=""){
            echo "Rellena apellidos";
        }
        elseif ($post["edad"]=""){
            echo "Rellena edad";
        }
        elseif ($post["curso"]=""){
            echo "Rellena curso";
        }
    
        else{
            $error=false;
            $this->nombre=$post("nombre");
            $this->apellidos=$post("apellidos");
            $this->edad=$post("edad");
            $this->curso=$post("curso");
        }
        
     }




 } /* final objeto */