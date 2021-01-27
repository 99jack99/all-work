<?php

namespace PPR\Controller;

/*
*Response
*/

class Response
{
    private $content;

    function __construct()
    {
        $this->content="";
    }


    function getContent()
    {
        return $this->content;
    }

    function setContent($content)
    {
        $this->content = $content;

        return $this;
    }
}

?>