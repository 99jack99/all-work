<?php

namespace PPR\Controller\Actions;

use PPR\Core\Controller;
use PPR\Controller\Request;
use PPR\Controller\Response;
use PPR\Entity\Animal;


/*
*BuscadorController
*/

class AnyadirmascotaController extends Controller
{
    function index(Request $request){

        return $this->render("home/añadirpet");
       }

       function registro(Request $request){
        $pet = new Animal();

        $pet->setName($_POST['name']);
        return $this->render("home/añadirpet");
       }


       

}

?>