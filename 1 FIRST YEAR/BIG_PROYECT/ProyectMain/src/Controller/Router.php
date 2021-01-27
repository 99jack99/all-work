<?php

namespace PPR\Controller;

/*
*Router
*/

class Router
{
    private $url = null;
    const URL_START_DELETE = "/petmeup/public/";
    function __construct()
    {
        
    }

    public function start_router()
    {
        $this->url = $_SERVER['REQUEST_URI'];
    }

    public function parse_route($request)
    {
        $this->url = str_replace($this::URL_START_DELETE,"",$this->url);
        $explode_url=explode("/",$this->url);
        if(count($explode_url)==1)
        {
            $request->setController($explode_url[0]);
            $request->setAction("index");
        }elseif (count($explode_url)==2) {
            $request->setController($explode_url[0]);
            $request->setAction($explode_url[1]);
        }
        elseif (count($explode_url)>2) {
            $request->setController($explode_url[0]);
            $request->setAction($explode_url[1]);
            $request->setParams(array_slice($explode_url,2));
        }
    }
}

?>