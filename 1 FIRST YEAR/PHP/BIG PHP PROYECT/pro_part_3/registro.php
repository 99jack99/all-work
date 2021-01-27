<?php

require "src/player.php";

$objeto=new Jugador();

$objeto->conexion();
$objeto->comprobacion($_POST);
$result=$objeto->insertar();

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="proy7.css">
    <title>Document</title>
</head>
<body>
    

<div id="fondo"><!-- FONDO DE PANTALLA -->

<div id="cuadro"><!-- CUADRITO -->

<h2>NUEVO JUGADOR: </h2><!-- FORMULARIO -->
<form action="registro.php" method="post">

    <div class="items">
    <span>Nombre: </span>
    <input type="text" name="nombre">
    </div>

    <div class="items">
    <span>Apellidos: </span>
    <input type="text" name="apellidos">
    </div>

    <div class="items">
    <span>Edad: </span>
    <input type="text" name="edad">
    </div>

    <div class="items">
    <span>Curso: </span>
    <input type="text" name="curso">
    </div>

    <div>
    <div id="verde">
        <a href="bien.php">ENVIAR</a>
    </div>
    
    <div id="rojo">
        <a href="listadoJugadores.php">LISTAR</a>
    </div>

</div>

</form>




</div>
</div>

</body>
</html>
