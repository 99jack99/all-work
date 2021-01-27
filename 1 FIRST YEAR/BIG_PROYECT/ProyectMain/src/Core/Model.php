<?php
namespace PPR\Core;


/*
*Model
*/

class Model
{
    private static $bdd = null;

    private function __construct()
    {

    }

    public static function getBdd()
    {

            global $config;

            self::$bdd = new \mysqli('localhost','root','','petmeup');
        return self::$bdd;
    }
}
?>