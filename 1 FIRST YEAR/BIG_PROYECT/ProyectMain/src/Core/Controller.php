<?php
namespace PPR\Core;

use PPR\Controller\Request;
use PPR\Controller\Response;

/*
*Controller
*/

class Controller implements ControllerInterface
{
    function __construct()
    {

    }

    function index(Request $request)
    {
        return $this->render("home/portada");
    }

    function render($vista,$data=null,$layout=null){
        
        ob_start();
        require(__DIR__."/../Views/".$vista.".php");
        $content_body = ob_get_clean();

        ob_start();
        require(__DIR__."/../Views/css/".$vista."css.php");
        $stylesheets = ob_get_clean();


        if($layout == null)
        {
            ob_start();
            require(__DIR__."/../Views/base.php");
            $html_content = ob_get_clean();
        }
        $response = new Response();
        $response->setContent($html_content);
        return $response;

    }
}
?>