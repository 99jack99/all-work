<?php

require "Equipo.php";

/* CREAR OBJETOS */
$equipo=new Equipo();
$equipo->conectar();
$equipo->comprobarCampos();



/* ALMACENO RESULTADO DE JUGADORES */
$resultado=$equipo->insertarEquipo()

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    



<?php
    include "./navs/navSup.php";
?>


    <!-- Formulario de insercion -->
    <h2>Insertar Nuevo Equipo: </h2>
    <form class="formato"  method="post">

      <div class="insertando">
        <label for="Nombre"></label>
        <span class="formLabel">Nombre </span>
        <input type="text" name="nombre" value="">
      </div>

      <div class="insertando">
        <label for="Ciudad"></label>
        <span class="formLabel">ciudad </span>
        <input type="text" name="ciudad" value="">
      </div>

      <div class="insertando">
        <label for="Conferencia"></label>
        <span class="formLabel">Conferencia </span>
        <input type="text" name="conferencia" value="">
      </div>

      <div class="insertando">
        <label for="Division"></label>
        <span class="formLabel">division </span>
        <input type="text" name="division" value="">
      </div>

      <input type="submit" name="" value="insertar">
    </form>



<?php
    include "./navs/navInf.php";
?>

</body>
</html>