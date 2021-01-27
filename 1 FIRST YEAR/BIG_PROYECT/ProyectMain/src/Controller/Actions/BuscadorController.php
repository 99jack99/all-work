<?php

namespace PPR\Controller\Actions;

use PPR\Core\Controller;
use PPR\Controller\Request;
use PPR\Controller\Response;
use PPR\Entity\Person;


/*
*BuscadorController
*/

class BuscadorController extends Controller
{
    function index(Request $request){
        $user = new Person();
        return $this->render("home/buscador");
       }

       

}

?>