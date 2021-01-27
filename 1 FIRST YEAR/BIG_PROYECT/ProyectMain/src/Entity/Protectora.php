<?php
namespace PPR\Entity;
use PPR\Core\Model;
/*
*Protectora
*/
class Protectora extends Model
{
    private $id = "";
    private $name = "";
    private $address = "";
    private $location = "";
    private $tlf = "";
    private $email = "";
    private $password = "";


    public function __construct()
    {
    }
    public function register($tipo)
    {
    if ($tipo == "animal_shelter") {
        $this->name = $_POST['name'];
        $this->address = $_POST['address'];
        $this->location = $_POST['location'];
        $this->email = $_POST['email'];
        $this->tlf = $_POST['tlf'];
        $this->password = $_POST['password'];
        $conexion = parent::getBdd();
        
        $consulta="INSERT INTO animal_shelter (name, address, location, email, tlf, password)
        VALUES ('$this->name', '$this->address', '$this->location', '$this->email', $this->tlf, $this->password)";
        $conexion->query($consulta);
        $_SESSION['user'] = $this->name;
        $_SESSION['user']['tipo'] =$tipo;
    }
    }
    public function getId()
    {
        return $this->id;
    }
    public function getName()
    {
        return $this->name;
    }

    public function getAddress()
    {
        return $this->address;
    }

    public function getLocation()
    {
        return $this->location;
    }

    public function getTlf()
    {
        return $this->tlf;
    }

    public function getEmail()
    {
        return $this->email;
    }
   
    public function getPassword()
    {
        return $this->password;
    }
    public function getIdName($name)
    {
        $conexion = parent::getBdd();
        $consulta="SELECT id FROM animal_shelter WHERE name='$name'";
       return $conexion->query($consulta);
        
    }
    public function setId($id)
    {
        $this->id = $id ;
    }

    public function setName($name)
    {
        $this->name = $name ;   
    }

    public function setAddress($address)
    {
        $this->address = $address ;
    }

    public function setLocation($location)
    {
        $this->location = $location ;
    }
    
    public function setEmail($email)
    {
        $this->email = $email ;
    }

    public function setTlf($tlf)
    {
        $this->tlf = $tlf ;
    }

    public function setPassword($password)
    {
        $this->password = $password ;
    }
}