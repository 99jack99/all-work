<?php

require "src/Jugador.php";
require "src/Juego.php";


$objeto2=new Juego();
$result2=$objeto2->mostrar();

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
    <link rel="stylesheet" href="public/css/proy.css">
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

</form> <!-- FINAL FORM -->
</div> <!-- FINAL CUADRITO -->

<div class="minicuadro"> <!-- OTRO CUADRO -->
<select class="" name="juego">
<?php
foreach ($resultado as $usuario){
    $id=$usuario["id"];     
    echo "<option value='$id'>".$usuario['nombre']."</option>";
}
?>
</select>

<select class="" name="usuario">
<?php
foreach ($resultado as $juego){
    $id=$juego["id"];     
    echo "<option value='$id'>".$juego['nombre']."</option>";
}
?>
</select>
</div> <!-- FINAL OTRO CUADRO -->


</div> <!-- FINAL fONDO -->





</body>
</html>
