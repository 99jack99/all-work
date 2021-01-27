
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
          <th>Apellido</th>
          <th>Posición</th>
          <th>Salario</th>
          <th>Altura</th>
        </tr>
        <?php

    $conector = new mysqli("localhost", "root", "", "liga");
    if ($conector->connect_errno) {
        echo "Fallo al conectar a MySQL: (" . $conector->connect_errno . ") " . $conector->connect_error;
    }else{
        $jugadoresentrada = $_GET['jugadores'];
        $resultado = $conector->query("SELECT * FROM jugador WHERE equipo = $jugadoresentrada");
        }

          foreach ($resultado as $equipo) {
            echo "<tr>";
            echo "<td>".$equipo['id_jugador']."</td>";
            echo "<td>".$equipo['nombre']."</td>";
            echo "<td>".$equipo['apellido']."</td>";
            echo "<td>".$equipo['posicion']."</td>";
            echo "<td>".$equipo['salario']."</td>";
            echo "<td>".$equipo['altura']."</td>";
            echo "</tr>";
          }
        ?>
      </table>
    </div>
 
<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
</body>
</html>
