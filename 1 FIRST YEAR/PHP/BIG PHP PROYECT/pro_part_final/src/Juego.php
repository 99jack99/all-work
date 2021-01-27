<?php

 /* objeto juego */


 class Juego extends Conexion{

    public $nombre="";
    public $id="";



     public function mostrar(){
        $consulta2="select * from juego";
        $result2=$this->c->query($consulta2);
        
        return $result2;

     }





 } /* final objeto */