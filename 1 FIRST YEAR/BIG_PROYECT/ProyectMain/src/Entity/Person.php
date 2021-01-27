<?php
namespace PPR\Entity;

use PPR\Core\Model;


/*
*Person
*/

class Person extends Model
{
    private $id = "";
    private $name = "";
    private $email = "";
    private $tlf = "";
    private $password = "";
    private $tipo = "";

    public function __construct()
    {

    }

    
    public function setUserNombre($nombre)
    {
        $conexion = parent::getBdd();
        $consulta="SELECT * FROM person where name = '$nombre'";
        $valores = $conexion->query($consulta);
        while($usuario = \mysqli_fetch_assoc($valores))
        {
            $this->id = $usuario['id'];
            $this->name = $usuario['name'];
            $this->email = $usuario['email'];
            $this->tlf = $usuario['tlf'];
        }

    }

    public function rellenarPetxper($idPet, $idPerson){
        $conexion=parent::getBdd();
        $consultaAutocompletar= "INSERT INTO axp (id_person, id_animal) 
        values ($idPerson, $idPet)";
        $conexion->query($consultaAutocompletar);
    }

    public function register($tipo)
    {
            $this->name = $_POST['name'];
            $this->email = $_POST['email'];
            $this->tlf = $_POST['tlf'];
            $this->password = $_POST['password'];
            $conexion = parent::getBdd();
            
            if($tipo == 'usuario')
            $consulta="INSERT INTO person (name, email, tlf, pass) VALUES ('$this->name', '$this->email', '$this->tlf', '$this->password')";

            else
            $consulta="INSERT INTO shelter (name, email, tlf, pass) VALUES ('$this->name', '$this->email', '$this->tlf', '$this->password')";
            
            $conexion->query($consulta);

            $_SESSION['user'] = $this->name;
            $_SESSION['tipo'] =$tipo;
    }

    public function login($tipo)
    {
        
        $conexion = parent::getBdd();
        
        if($tipo == 'usuario')
        $consulta="SELECT * FROM person WHERE pass = '$_POST[pass]' AND name = '$_POST[name]' OR email = '$_POST[name]'";

        else
        $consulta="SELECT * FROM shelter WHERE pass = '$_POST[pass]' AND name = '$_POST[name]' OR email = '$_POST[name]'";
        
        $result = $conexion->query($consulta);

        if($result->num_rows !=0 )
        {
            $row = \mysqli_fetch_assoc($result);            
            $_SESSION['user'] = $row['name'];
            $_SESSION['tipo'] = $tipo;  
        }
    }

    public function deleteAcc()
    {
        $conexion=parent::getBdd();

        $consulta= "DELETE FROM axp where id_person = '$this->id'";
        $res = $conexion->query($consulta);

        $consulta= "DELETE FROM axpfav where id_person = '$this->id'";
        $res = $conexion->query($consulta);


        $consulta= "DELETE from person where id = '$this->id'";
        $res = $conexion->query($consulta);


    }

    public function addFav($idPet,$idPers)
    {
        $conexion = parent::getBdd();
        $consulta= "INSERT INTO axpfav (id_person, id_animal) 
        values ($idPers, $idPet)";
        $conexion->query($consulta);
    }

    public function mostrarFavs($idPers)
    {
        $resultado = array();
        $conexion = parent::getBdd();
        $consulta="SELECT a.name,a.id FROM animal a JOIN axpfav x ON x.id_animal = a.id JOIN person p ON p.id = x.id_person where p.id = $idPers";
        $resultadomysqli = $conexion->query($consulta);
    
        while($row = mysqli_fetch_assoc($resultadomysqli))
            array_push($resultado,$row);
        return $resultado;
    }

    public function eliminarFavs($idPet, $idPers){
        $conexion=parent::getBdd();
        $consulta= "DELETE from axpfav where id_animal='$idPet' AND id_person ='$idPers'";
        $conexion->query($consulta);    
    }

    public function modificarDatos($idPers)
    {
        $conexion=parent::getBdd();
        $consulta= "UPDATE person SET name = '$_POST[name]', email = '$_POST[email]', tlf = '$_POST[tlf]' WHERE id = $idPers";
        $conexion->query($consulta);
    }

    public function getId()
    {
        return $this->id;
    }

    public function getName()
    {
        return $this->name;
    }

    public function getEmail()
    {
        return $this->email;
    }

    public function getTlf()
    {
        return $this->tlf;
    }

    public function getPassword()
    {
        return $this->password;
    }

    
    public function setId($id)
    {
        $this->id = $id ;
    }

    public function setName($name)
    {
        $this->name = $name ;
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