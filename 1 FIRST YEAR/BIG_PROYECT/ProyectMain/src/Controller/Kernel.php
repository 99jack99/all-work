<?php

namespace PPR\Controller;
use Monolog\Logger;
use Monolog\Handler\StreamHandler;



/*
*Kernel
*/

class Kernel
{
    private $router;
    private $request;
    private $response;
    private $logger;    

    function __construct()
    {
        if (session_status() == PHP_SESSION_NONE) {
            session_start();
        }
        $this->router = new Router();
        $this->request = new Request();
        $this->logger = new Logger('ppr');

        // $this->logger->pushHandler(new StreamHandler(__DIR__.'/../../var/log/ppr_log.log', Logger::DEBUG));
        // $this->logger->info("Kernel ha sido lanzado");

    }

    public function start_kernel()
    {
        $this->router->start_router();
        $this->router->parse_route($this->request);
        // $this->logger->info('Ruta solicitada: ',
        //     array('Controlador' => $this->request->getController(),
        //     'Accion' => $this->request->getAction(),
        //     'Controlador' => $this->request->getParams()));
        
    }

    public function start_action()
    {
        $controllerName = $this->request->getController();
        if(!$controllerName)
        {
            $controller = new Actions\HomeController();
        }
        else
        {
            $controllerName = "PPR\\Controller\\Actions\\".ucFirst($controllerName)."Controller";
            $controller = new $controllerName;
        }
        $actionName = $this->request->getAction();
        if(!$actionName)
        {
            $this->response = call_user_func_array(array($controller,"index"),array($this->request));
        }
        else
        {
            $this->response = call_user_func_array(array($controller,$actionName),array($this->request));
        }
    }

    public function finish_kernel()
    {
        echo $this->response->getContent();
    }   
}

?>