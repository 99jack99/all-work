<?php

namespace PPR\Controller\Actions;

use PPR\Core\Controller;
use PPR\Controller\Request;
use PPR\Controller\Response;
use PPR\Entity\Person;


/*
*ProtectoraController
*/

class ProtectoraController extends Controller
{
    function index(Request $request){
        return $this->render("home/protectora");
       }

}

?>