<?php
require "../src/Conexion.php";
require "../src/Proyecto.php";

$p=new Proyecto();
$p->conectar();
$resultado=$p->listarProyectos();

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
    
        <h2>WOR' WOR' WOR' WOR'</h2>
        <form  action="registro.php" method="post">

          Nombre<br>
          <input type="text" name="nombre" id="nombre" value="">

          <br>Apellidos<br>
          <input type="text" name="apellidos" id="apellidos" value="">

          <br>Precio/Hora<br>
          <input type="text" name="precio" id="precio" value="">

          <br>Horas<br>
      <input type="number" name="horas" id="horas" value="">

         
          <br>Evento<br>
          <select class="" name="proyecto" id="proyecto">

            <?php
              foreach ($resultado as $proyecto) {
                $id=$proyecto["id"];
                $nombre=$proyecto["nombre"];
                echo "<option value='$id'>$nombre</option>";
              }
            ?>
          </select>
          <br><br>
          <input type="submit" name="" value="REGISTRAR" onclick="return comprobar();">
        </form>
      </body>
      <script type="text/javascript" src="./js/comprobar.js"></script>
</html>