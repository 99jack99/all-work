
<div id="godContainer"><!-- FONDO DE TODO -->

<figure id="fondo"><img src="img/fondopatasazul.png" alt=""></figure><!-- IMAGEN DECORATIVA DE FONDO -->
<article>
    <section id="section-imagen">
        <figure id="foto-perfil">
            <img id="foto-img" src="img/logorojo.png" alt="">
        </figure>
    </section>
    <section id="section-datos">
        <form action="modificar.php">
            <label for="nombre">NAME</label>
            <input class="writable" type="text" value="NAME" name="nombre" readonly>
            <label for="nombre">MAIL</label>
            <input class="writable" type="text" value="MAIL" name="correo" readonly>
            <label for="nombre">TELEPHONE</label>
            <input class="writable" type="text" value="TLF" name="tlf" readonly>
            <label for="nombre">LOCATION</label>
            <input class="writable" type="text" value="LOCATION" name="ciudad" readonly>
            <label for="nombre">ADDRESS</label>
            <input class="writable" type="text" value="ADDRESS" name="direccion" readonly>
            <input id ="submit-butt" type="submit" value="Confirm changes">
        </form>
        <span onclick="editToggle()" id="edit-butt" ><i class='fas fa-edit'></i>Modify</span>
        <div class="bigDivInf"><span id="elim-cuenta">ELIMINAR CUENTA</span><!-- TEXTO INFORMACION --></div><!--  DIV INFERIOR LARGO -->
        <div class="big"><span id="cerrar-sesion">CERRAR SESION</span><!-- TEXTO INFORMACION --></div><!--  DIV INFERIOR LARGO -->

    </section>

</article>

</div><!-- FIN FONDO DE TODO -->

<script src="js/usuario.js"></script>





