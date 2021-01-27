<?php

namespace PPR\Controller\Actions;

use PPR\Core\Controller;
use PPR\Controller\Request;
use PPR\Controller\Response;
use PPR\Entity\Person;


/*
*APIBuscadorController
*/

class APIRegistroController extends Controller
{

    function registro(Request $request)
    {
        if(isset($_POST['name']))
        {
            $user = new Person();
            $user->register('usuario');
            header('Location: ../');
        }
    }

    function login(Request $request)
    {        
        if(isset($_POST['name']))
        {
            $user = new Person();

            $user->login($_POST['tipo']);

            header('Location: ../');
        }
    }

    function logout(Request $request)
    {
        \session_destroy();
        header('Location: ../');
    }      

}

?>