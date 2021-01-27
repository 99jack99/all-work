
<div id="modal-like" onclick="confirmLike()"></div>
<div id="popup-like">
    <span id="mensaje-like">If you hit like we will send a formal petition to the animal shelter showing you are interested in the pet you have just seen, if you are not sure yet, you can mark this pet as <span id="like-popup-fav" onclick="">favorite</span> to decide later</span>
    <span id="cancel-popup-like" onclick="confirmLike()">Cancel</span>
    <span id="confirm-popup-like" onclick="doubleConfirm()">I'm sure, hit like!</span>
</div>
<main>
    <aside id="barra-info" class="barras">
    <h2 id="titulo-info">Profile</h2>
    <div id="info-inner">
        <span id="info-nombre" class="info-main"></span> <span id="info-edad" class="info-main">5</span> <span id="info-edad-tipo" class="info-main">años</span>
        <br>
        <label>LOCATION</label>
        <span id="info-location" class="info-second"></span>
        <label>WEIGHT</label>
        <span id="info-peso" class="info-second"></span>
        <label>SHELTER</label>
        <span id="info-protectora" class="info-second"></span>
        <label>DESCRIPTION</label>
        <span id="info-desc" class="info-second"></span>
    </div>
    </aside>
    <article id="contenido-main">
        <div id="buscador-wrapper">
            <figure id="imagen-fig">
                <img id="imagen-img" src="../../petmeup/public/img/logorojo.png">
            </figure>
            <div id="acciones-wrapper">
                <span class="accion" id="nope" onclick="nextPet()"><i class="far fa-times-circle"></i></span>
                <?php
                if(isset($_SESSION['user']))
                {
                    echo'<span class="accion" id="fav" onclick="addFav()"><span id="tooltip">Add to Favorites</span><i class="fas fa-bookmark"></i></span>';        
                    echo'<span class="accion" id="like" onclick="confirmLike()"><i class="fas fa-paw"></i></span>';
                }
                else
                echo'<span class="accion" id="like" onclick="noSessionLike()"><i class="fas fa-paw"></i></span>'



                ?> 
            </div>
        </div>


    </article>
    <aside id="barra-fav" class="barras">

        <h2 id="titulo-fav">Favorites <i class="far fa-bookmark"></i></h2>

        <div id="fav-inner">
            
        </div>

    </aside>
</main>

<script src="js/buscador.js"></script>
