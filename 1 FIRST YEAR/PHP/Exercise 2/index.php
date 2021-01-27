
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
            <li><a href="equipo.php">EQUIPO</a></li>
          </ul>
        </div>
      </nav>
      <h2>Partidos</h2>
      <table>
        <tr>
          <th>Id</th>
          <th>Local</th>
          <th>Visitante</th>
          <th>Resultado</th>
        </tr>
        <?php
    
 $conector = new mysqli("localhost", "root", "", "liga");
    if ($conexion->connect_errno) {
        echo "Fallo al conectar a MySQL: (" . $conector->connect_errno . ") " . $conector->connect_error;
    }else{
          $resultado = $conector->query("SELECT * FROM partido");
        }
        
          foreach ($resultado as $equipo) {
            echo "<tr>";
            echo "<td>".$equipo['id_partido']."</td>";
            echo "<td>"."<a href=equipo.php?equipo=".$equipo['local'].">".$equipo['local']."</a> </td>";
            echo "<td>"."<a href=equipo.php?equipo=".$equipo['visitante'].">".$equipo['visitante']."</a> </td>";
            echo "<td>".$equipo['resultado']."</td>";
            echo "</tr>";
          }
        ?>
      </table>

      <h2>PARTIDO</h2>

        <br>equipo local<br>
        <input type="text" name="local">
        <br>Equipo Visitante<br>
        <input type="text" name="visitante">
        <br>Resultado</br>
        <input type="text" name="resultado"><br>
        <input type="submit" value="Submit">
  

    </div>
<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
</body>
</html>