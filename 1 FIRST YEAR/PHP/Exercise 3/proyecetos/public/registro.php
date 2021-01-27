<?php
require "../src/Conexion.php";
require "../src/Trabajador.php";

$t=new Trabajador();

$error=$t->comprobarCampos($_POST);
if($error){
  echo $error;
}else{

  $t->conectar();
  $t->insertarTrabajador();
  $idTrabajador=$t->ultimoRegistro();
  $t->insertarProyTrab($idTrabajador,$_POST["proyecto"]);
}


?>
<html>
<html lang="es" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>

  </body>
</html>