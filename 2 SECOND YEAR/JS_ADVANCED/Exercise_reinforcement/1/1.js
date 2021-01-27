// Crea una clase Persona, que tenga las siguientes propiedades (nombre, edad, jubilada).
// Debes implementar el constructor de la clase donde inicialices sus atributos
// y también un método en la clase que sea cumplirAnyos(). 
// Dicho método, cada vez que se ejecute aumentará la edad de la persona en un año
// e informará de la misma. Si sobrepasa los 67 años, además la persona se jubilará.
// Crea un objeto que sea instancia de la clase Persona (utilizando su constructor) 
// y utiliza el método cumplirAnyos() en ambos para validar su correcto funcionamiento

class Persona{

    constructor(nombre, edad, jubilada){
        this.nombre=nombre
        this.edad=edad
        this.jubilada=jubilada

        
    }

    cumpliAnyos(age){
        if (age < 64) {
            this.jubilada="No"
            return this.nombre + "tiene" + this.edad +"años y" +this.jubilado+ "jubilado"
        }

        else{
            this.jubilada="Si"
            return this.nombre + " Esta caput"
        }
    }

    

}



let pregunta=prompt("Nombre?")
let anos=prompt("edad?")
let jubilado=prompt("estas casi en el fin?")

let persona=new Persona(pregunta,anos,jubilado)
let resultCumplir=persona.cumpliAnyos(anos)




