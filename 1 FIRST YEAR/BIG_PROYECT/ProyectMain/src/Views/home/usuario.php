
<?php 

$datos = $data ['datos'];

?>

<div id="godContainer"><!-- FONDO DE TODO -->
<div id="modal-user"></div>
<div id="popup-user">

<span id="mensaje-delete">By clicking on this button you accept that your account will be <b>irreversibly</b> removed from our servers, all the data linked to favorites, adopted or interests in pets along with personal information will be deleted </span>
    <span id="cancel-button" onclick="deleteAcc()">Cancel</span>
    <a href="usuario/deleteacc"><span id="confirm-button" >I'm sure, delete account</span></a>


</div>
<figure id="fondo"><img src="img/fondopatasazul.png" alt=""></figure><!-- IMAGEN DECORATIVA DE FONDO -->
<article>
    <section id="section-imagen">
        <figure id="foto-perfil">
            <img id="foto-img" src="img/logorojo.png" alt="">
        </figure>
    </section>
    <section id="section-datos">
        <form action="usuario" method="POST">
            <label for="name">NAME</label>
            <input id="name" class="writable" type="text" value="<?php echo $datos['name'] ?>" name="name" readonly>
            <label for="email">MAIL</label>
            <input id="email" class="writable" type="text" value="<?php echo $datos['email'] ?>" name="email" readonly>
            <label for="tlf">TELEPHONE</label>
            <input id="tlf" class="writable" type="text" value="<?php echo $datos['tlf'] ?>" name="tlf" readonly>
            <input id ="submit-butt" type="submit" value="Confirm changes">
            <input type="text" onclick="editToggle()" id="edit-butt" value="Modify"><i class='fas fa-edit'></i>
        </form>
        
        <a href="APIRegistro/logout" class="big"><span id="cerrar-sesion">LOG OUT</span><!-- TEXTO INFORMACION --></a><!--  DIV INFERIOR LARGO -->
        <a class="bigDivInf" onclick="deleteAcc()"><span id="elim-cuenta">DELETE ACCOUNT</span><!-- TEXTO INFORMACION --></a><!--  DIV INFERIOR LARGO -->
        
    </section>

</article>

</div><!-- FIN FONDO DE TODO -->

<script src="js/usuario.js"></script>




