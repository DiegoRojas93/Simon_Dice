class Persona{
    constructor(nombre, apellido, altura){
        this.nombre = nombre
        this.apellido = apellido
        this.edad = 20
        this.altura = altura
    }

    saludar(fn){
        var {nombre,apellido} = this
        console.log(`Hola! me llamo ${nombre} ${apellido}`);
        if(fn){
            fn(nombre,apellido)
        }
    }

    soyAlto(){
        return this.altura >= 1.8
    }
}

class desarrollador extends Persona{
    constructor(nombre,apellido,altura){
        super (nombre,apellido,altura)
    }

    saludar(fn){
        var {nombre,apellido} = this
        console.log(`Hola! me llamo ${nombre} ${apellido} y soy desarrollador/a`);
        if(fn){
            fn(nombre,apellido,true)
        }
    }
}

function responderSaludo(nombre, apellido, esDev) {
    console.log(`Buen dia ${nombre} ${apellido}`);
    if (esDev) {
        console.log(`ah míra, no sabia que eras desarrollador/a`);
    }
}

var sacha = new Persona('Sacha', 'lifzyck', 180)
var erika = new Persona('Erika', 'Luna', 1.60)
var arturo = new desarrollador('Arturo', 'Martinez', 1.85)

sacha.saludar()
erika.saludar(responderSaludo)
arturo.saludar(responderSaludo)
