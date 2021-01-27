<?php

require "src/player.php";

$objeto=new Jugador();
$objeto->conexion();

$resultado=$objeto->mostrar();
?>



<!DOCTYPE html>
<html>
    <head>
        <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Oswald" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Stalinist+One" rel="stylesheet">
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>PROYECTO 5</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="public/css/proy.css">
    </head>
    <body>

        <div id="fondo">

            <div id="listado"><!--div php-->
              <a href="registro.php">VOLVER</a>

                <?php


foreach ($resultado as $usuario){
    echo "<p><strong>ID: </strong>".$usuario['id']."<strong> Nombre: </strong>".$usuario['nombre']."<strong> Apellidos: </strong>".$usuario['apellidos']."</p>";
    echo "<p><strong>Edad: </strong>".$usuario['edad']."<strong> Curso: </strong>".$usuario['curso']."</p>";
    echo "<p><strong>PTS: </strong>".$usuario['puntuacion']."</p>";
}
                ?>

            </div>


        </div><!--div TODO-->

    </body>
</html>