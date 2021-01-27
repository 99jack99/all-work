<div id="godContainer">

<aside class="divIzq"> <!-- div animacion izquierda hoover-->
    <div class="pataArriba"><i class="fas fa-dog"></i></div> <!-- pata perro 1 -->
    <div class="pataAbajo"><i class="fas fa-cat"></i></div> <!-- pata gato 1 -->
</aside> 

<div class="DivCentral"> <!-- div listado importante -->
    <?php
    foreach ($resultadoListarPet /* esto hay q enlazarlo */ as $pet) {
        $name=$pet["name"];
        $edad=$pet["age"];
        $genero=$pet["gender"];

        echo "<div class="RectanguloInterno">
       
        <span class="infoInt">.$name. </span>
        <span class="infoInt">.$edad. </span>
        <p><span>.$genero. </span></p>
        </div>"
    }
    ?>
</div>

<aside class="divDrch"> <!-- div animacion derecha hoover -->
    <div class="pataArriba" ><i class="fas fa-cat"></i></div> <!-- pata gato 2 -->
    <div class="pataAbajo"><i class="fas fa-dog"></i></div> <!-- pata perro 2 -->
</aside>


</div> <!-- fin god container -->