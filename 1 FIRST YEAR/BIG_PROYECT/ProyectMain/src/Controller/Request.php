<?php

namespace PPR\Controller;

/*
*Request
*/

class Request
{
    private $controller=null;
    private $action=null;
    private $params=null;

    function __construct()
    {
        
    }

    public function getController()
    {
        return $this->controller;
    }
    
    public function getAction()
    {
        return $this->action;
    }

    public function getParams()
    {
        return $this->params;
    }

    public function setController($controller)
    {
        $this->controller = $controller;
    }

    public function setAction($action)
    {
        $this->action = $action;
    }

    public function setParams($params)
    {
        $this->params = $params;
    }

    
}

?>