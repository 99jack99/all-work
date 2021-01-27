<?php
namespace PPR\Core;
use PPR\Controller\Request;

/*
*Controller interface
*/

interface ControllerInterface
{
    public function index(Request $request);
    public function render($view,$layout);

}
?>