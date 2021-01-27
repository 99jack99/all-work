<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="https://fonts.googleapis.com/css?family=Baloo+Bhai" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet">
    <link rel="stylesheet" href="../public/css/base.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css" integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay" crossorigin="anonymous">
    <title>
    
   </title> 

   <?php
        echo $stylesheets;
    ?>
</head>
 <body>

 <nav id="navegador"> <!-- todo el navegador -->
<div id="imgNav" class="itemsNav"><a href="./"><img id="imgLogo" src="img/logo.png" alt=""></a></div> <!-- navegador icono centro -->

<div id="buscador" class="itemsNav">

    <a href="buscador"><span id="buscador-inner">FINDER <i class="fas fa-search"></i> </span></a>

</div>

<div class="itemsNav"> <!-- navegador superior derecha -->

<?php

if(!isset($_SESSION['user']))
    {
        echo'<ul id="rightNav">
        <li onclick="loginPopUp()">Log in </li>
        <li onclick="signupPopUp()">Sign up</li>
    </ul>';
    }

    else {
        
        echo'<ul id="rightNav-borde">
        <li id ="boton-notif" ><i class="fas fa-bell"></i></li> 
        <li> <a id ="boton-usuario" href="'.$_SESSION['tipo'].'"><i class="fas fa-user"></i><span id="username">'.ucfirst($_SESSION['user']) .'</span></a></li>
        </ul>';

    }

?>

</div>

</nav>


<div id="modal-signup" onclick="signupPopUp()"></div>

<div id="login-container">
    
        <i id="cerrar-login" class="fas fa-times" onclick="loginPopUp()"></i>
        <img id="login-fondopatas" src="img/fondopatas.png" alt="">
    <form method="POST" action="APIRegistro/login">
        <input type="text" class="login-input" placeholder="User or email" name="name" required>
        <input type="password" class="login-input" placeholder="Password" name="pass"required >

        <label class="radiocustom">User
            <input type="radio" checked="checked" value="usuario" name="tipo">
            <span class="checkmark"></span>
        </label>
        <label class="radiocustom">Shelter
            <input type="radio" value="protectora" name="tipo">
            <span class="checkmark"></span>
        </label>

        <input id="login-submit" type="submit" value="Entrar">
        <a id="pass-forget" href="#">I forgot my password</a>
    </form>
</div>

<div id="signup-container">
    <img id="signup-fondopatas" src="img/fondopatasazul.png" alt="">
    <h2 id="signup-titulo">Sign Up</h2>
    <form method="POST" action="APIRegistro/registro">
        <input type="email" name="email" class="signup-input" placeholder="E-mail">
        <input type="text" name="name" class="signup-input" placeholder="Username">
        <input type="password" name="password" class="signup-input" placeholder="Password">
        <input type="password" name="tlf" class="signup-input" placeholder="Repeat Password">
        <input id="signup-submit" type="submit" value="Sign Up">
    </form>
</div>

<script
  src="https://code.jquery.com/jquery-3.4.0.min.js"
  integrity="sha256-BJeo0qm959uMBGb65z40ejJYGSgR7REI4+CW1fNKwOg="
  crossorigin="anonymous"></script>

     <?php
        echo $content_body;
    ?>


<script src="js/registro.js"></script>
 </body>
    

</html>