<?php

require "src/player.php";

$objeto=new Jugador();
$objeto->conexion();

$result2=$objeto->mostrar();
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
        <link rel="stylesheet" href="proy7.css">
    </head>
    <body>

        <div id="fondo">

            <div id="listado"><!--div php-->
              <a href="registro.php">VOLVER</a>

                <?php


foreach ($result2 as $usuarios){
    echo "<p><strong>ID: </strong>".$usuarios['id']."<strong> Nombre: </strong>".$usuarios['nombre']."<strong> Apellidos: </strong>".$usuarios['apellidos']."</p>";
    echo "<p><strong>Edad: </strong>".$usuarios['edad']."<strong> Curso: </strong>".$usuarios['curso']."</p>";
    echo "<p><strong>PTS: </strong>".$usuarios['puntuacion']."</p>";
}
                ?>

            </div>



        </div><!--div TODO-->

    </body>
</html>