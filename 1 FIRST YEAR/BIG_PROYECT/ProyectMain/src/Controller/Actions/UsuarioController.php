<?php

namespace PPR\Controller\Actions;

use PPR\Core\Controller;
use PPR\Controller\Request;
use PPR\Controller\Response;
use PPR\Entity\Person;


/*
*UsuarioController
*/

class UsuarioController extends Controller
{

    function index(Request $request){

        $datos = array();
        $user = new Person();

        $user->setUserNombre($_SESSION['user']);

        if(isset($_POST['name']))
        {   
            $user->modificarDatos($user->getId());
            $_SESSION['user'] = $_POST['name'];
            $user->setUserNombre($_SESSION['user']);
        }
            
        $datos['name'] = $user->getName();
        $datos['email'] = $user->getEmail();
        $datos['tlf'] = $user->getTlf();
        $data['datos'] = $datos;

        return $this->render("home/usuario",$data);
    }
        
    function deleteacc(Request $request)
    {
        $user = new Person();
        $user->setUserNombre($_SESSION['user']);

        $user->deleteAcc($user->getName());

        \session_destroy();
        header('Location: ../');
    }

}

?>