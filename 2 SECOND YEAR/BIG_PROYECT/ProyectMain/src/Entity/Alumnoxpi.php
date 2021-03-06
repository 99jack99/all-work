<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\AlumnoxpiRepository")
 */
class Alumnoxpi
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Proyecto", inversedBy="alumnoxpis")
     */
    private $pi_id;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Alumno", inversedBy="alumnoxpis")
     */
    private $alumno_id;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getPiId(): ?proyecto
    {
        return $this->pi_id;
    }

    public function setPiId(?proyecto $pi_id): self
    {
        $this->pi_id = $pi_id;

        return $this;
    }

    public function getAlumnoId(): ?alumno
    {
        return $this->alumno_id;
    }

    public function setAlumnoId(?alumno $alumno_id): self
    {
        $this->alumno_id = $alumno_id;

        return $this;
    }

}
