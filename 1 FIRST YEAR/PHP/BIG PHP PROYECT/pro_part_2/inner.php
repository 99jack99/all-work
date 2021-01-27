<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" href="proyecto.css">
        <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Oswald" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Stalinist+One" rel="stylesheet">
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>PROYECTO 5</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
    </head>
    <body>

        <div id="TODO">
          <div id="primeraParte">
            <div id="texto">
              <span id="texto2">MICROROBOTS</span>
              <input id="bloque" type="number" placeholder="Numero bloque" readonly/>
              <p>Casilla Inicio</p>
              <input type="color" value="#0000FF"  id="casinicio"/>
              <p>Casilla Final</p>
              <input type="color" value="#ffffff"  id="casfinal"/>
              <br><br>
              <input type="number" placeholder="Cantidad movimentos" id="numMovimientos" readonly></input>
              <br><br>
              <input type="text" placeholder="" id="mensaje" readonly></input>
            </div><!--div texto-->
          </div><!--div primeraParte-->

          <div id="segundaparte">
              <table>
                  <tbody>
                        <tr>
                            <td id="1" class="green" value="1" onclick="cachao(this)">1</td>
                            <td id="2" class="blue" value="1" onclick="cachao(this)">1</td>
                            <td id="3" class="yellow" value="1" onclick="cachao(this)">1</td>
                            <td id="4" class="morado" value="6" onclick="cachao(this)">6</td>
                            <td id="5" class="pink" value="5" onclick="cachao(this)">5</td>
                            <td id="6" class="red" value="1" onclick="cachao(this)">1</td>
                        </tr>

                        <tr>
                            <td id="7" class="green"  value="2" onclick="cachao()">2</td>
                            <td id="8" class="red"  value="4" onclick="cachao">4</td>
                            <td id="9" class="yellow"  value="5" onclick="cachao">5</td>
                            <td id="10" class="red" value="3" onclick="cachao" >3</td>
                            <td id="11" class="pink" value="5" onclick="cachao" >5</td>
                            <td id="12" class="blue" value="6" onclick="cachao" >6</td>
                        </tr>

                        <tr>
                            <td id="13" class="green" value="5" onclick="cachao" >5</td>
                            <td id="14" class="red" value="6" onclick="cachao" >6</td>
                            <td id="15" class="pink" value="4" onclick="cachao" >4</td>
                            <td id="16" class="yellow" value="3" onclick="cachao" >3</td>
                            <td id="17" class="red" value="5" onclick="cachao" >5</td>
                            <td id="18" class="blue" value="3" onclick="cachao" >3</td>
                        </tr>

                        <tr>
                            <td id="19" class="morado" value="6" onclick="cachao" >6</td>
                            <td id="20" class="pink" value="6" onclick="cachao" >6</td>
                            <td id="21" class="pink" value="2" onclick="cachao" >2</td>
                            <td id="22" class="blue" value="2" onclick="cachao" >2</td>
                            <td id="23" class="white" value="3" onclick="cachao" >3</td>
                            <td id="24" class="pink" value="3" onclick="cachao" >3</td>
                        </tr>

                        <tr>
                            <td id="25" class="red" value="1" onclick="cachao">1</td>
                            <td id="26" class="blue" value="4" onclick="cachao" >4</td>
                            <td id="27" class="morado" value="1" onclick="cachao">1</td>
                            <td id="28" class="morado" value="2" onclick="cachao">2</td>
                            <td id="29" class="yellow" value="2" onclick="cachao">2</td>
                            <td id="30" class="red" value="2" onclick="cachao" >2</td>
                        </tr>

                        <tr>
                            <td id="31" class="pink" value="1" onclick="cachao">1</td>
                            <td id="32" class="yellow" value="4" onclick="cachao">4</td>
                            <td id="33" class="morado" value="5" onclick="cachao" >5</td>
                            <td id="34" class="green" value="4" onclick="cachao">4</td>
                            <td id="35" class="yellow" value="6" onclick="cachao">6</td>
                            <td id="36" class="morado" value="4" onclick="cachao" >4</td>
                        </tr>
                    </tbody>
                </table>
            </div><!--div segundaparte-->

            <div id="listado"><!--div php-->
                <a href="listadoJugadores.php">TODOS LOS PLAYERS</a>
            </div>



        </div><!--div TODO-->

        <script src="proyecto5.js"></script>
    </body>
</html>
