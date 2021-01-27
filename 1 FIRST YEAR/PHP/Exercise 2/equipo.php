<!DOCTYPE html>
<html lang="es" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
  </head>
  <body>
    <div class="container">
      <nav>
        <div class="nav-wrapper">
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li><a href="index.php">PARTIDOS</a></li>
          </ul>
        </div>
      </nav>
      <h2>Equipo</h2>
      <table>
        <tr>
          <th>id</th>
          <th>Nombre</th>
          <th>Ciudad</th>
        </tr>
        <?php
        $conexion = new mysqli("localhost", "root", "", "liga");
        if ($conector->connect_errno) {
            echo "Fallo al conectar a MySQL: (" . $conector->connect_errno . ") " . $conector->connect_error;
        }else{
            $equipoentrada = $_GET['equipo'];
          $resultado = $conector->query("SELECT * FROM equipo WHERE id_equipo = $equipoentrada");
        }

          foreach ($resultado as $equipo) {
            echo "<tr>";
            echo "<td>"."<a href=jugadores.php?jugadores=".$equipo['id_equipo'].">".$equipo['id_equipo']."</a> </td>";
            echo "<td>".$equipo['nombre']."</td>";
            echo "<td>".$equipo['ciudad']."</td>";
            echo "</tr>";
          }
        ?>

<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
</body>
</html>

    