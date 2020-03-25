function Persona(nombre,apellido,altura) {
    this.nombre = nombre
    this.apellido = apellido
    this.edad = 20
    this.altura = altura
}

//Recuerda que dentro de la arrow function, this está haciendo referencia al espacio global, a windows.

Persona.prototype.saludar = function () {
    console.log(`Hola! me llamo ${this.nombre} ${this.apellido}`);
}
  
Persona.prototype.soyAlto= function () {
    return this.altura >= 1.8
}

var sacha = new Persona('Sacha', 'lifzick', 180)
var erika = new Persona('Erika', 'Luna', 1.60)
var arturo = new Persona('Arturo', 'Martinez', 1.85)

sacha.soyAlto()
erika.soyAlto()
arturo.soyAlto()