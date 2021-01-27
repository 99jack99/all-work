<?php

namespace PPR\Controller\Actions;

use PPR\Core\Controller;
use PPR\Controller\Request;
use PPR\Controller\Response;
use PPR\Entity\Person;
use PPR\Entity\Animal;


/*
*APIRegistroController
*/

class APIBuscadorController extends Controller
{
    function confirm()
    {
        $user = new Person();
        $pet = new Animal();

        $user->setUserNombre($_SESSION['user']);
        $idPet = $_POST['confirmid'];
    
        $user->rellenarPetxper($idPet,$user->getId());

        $res = new Response();
        $res->setContent(var_dump($idPet));
        return $res;
    }

    function listapets()
    {
        $pet = new Animal();
        $res = new Response();
        $user = new Person();

        if(isset($_SESSION['user']))
        {
            $user->setUserNombre($_SESSION['user']);
            $favs = $user->mostrarFavs($user->getId());
            $resultados[1] = $favs;
        }
        else
        $resultados[1] = array();

        $pets = $pet->mostrarPetDisponible();

        $resultados[0] = $pets;
       

        $res->setContent(json_encode($resultados));
        return $res;
    }

    function listafavs()
    {
        $res = new Response();

        if(!isset($_SESSION['user']))
        {
            $arres = array();
            $aux = array();
            $aux['id'] = 0;
            $aux['name'] ='Log in to see your favorites';
            $arres[0] = $aux;
            $res->setContent(json_encode($arres));
        }
        else
        {
            $user = new Person();
            $user->setUserNombre($_SESSION['user']);
            $res->setContent(json_encode($user->mostrarFavs($user->getId())));
        }
        
        return $res;
    }

    function addfav()
    {
        $user = new Person();
        $res = new Response();
        $yaexiste = false;
        $user->setUserNombre($_SESSION['user']);
       
        $idPet = $_POST['favid'];

        $favs = $user->mostrarFavs($user->getId());

        foreach ($favs as $fav) {
            if($fav['id'] == $idPet)
            $yaexiste = true;
        }

        if(!$yaexiste)
        {
            $user->addFav($idPet,$user->getId());
            $res->setContent(true);
        }
        else
        $res->setContent(false);

        return $res;
    }

    function removefav()
    {
        $user = new Person();
        $user->setUserNombre($_SESSION['user']);

        $idPet = $_POST['petid'];

        $user->eliminarFavs($idPet,$user->getId());
    }

    function getshelter()
    {
        $pet = new Animal();

        $res = new Response();
        $res->setContent(json_encode($pet->getShelter($_POST['petid'])));
        return $res;
    }

    function seepet()
    {
        $pet = new Animal();
        $res = new Response();
        $res->setContent(json_encode($pet->getPet($_POST['petid'])));
        return $res;
    }
}

?>