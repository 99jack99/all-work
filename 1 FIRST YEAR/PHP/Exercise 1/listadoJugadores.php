<?php

require "Player.php";

/* CREAR OBJETOS */
$player=new Player();
$player->conectar();

/* ALMACENO RESULTADO DE JUGADORES */
$resultado=$player->listadoJugadores();

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="src/ej9.css">
    <title>Document</title>
</head>
<body>

    <?php
    include "./navs/navSup.php";
    ?>

  <span>
   <?php

foreach ($resultado as $names){
    echo "<p>".$names['nombre']."</p>";
}
   ?>
   </span>

<?php
    include "./navs/navInf.php";

?>
</body>
</html>

