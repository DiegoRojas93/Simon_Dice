function persona(nombre,apellido,altura) {
    this.nombre = nombre
    this.apellido = apellido
    this.edad = 20
    this.altura = altura
}

persona.prototype.soyAlto = function () {
    
    var resultado = (this.altura >= 1.8) ? `Hola!, me llamo ${this.nombre} ${this.apellido} y soy alto debido a que mido ${this.altura}`
    : `Hola!, me llamo ${this.nombre} ${this.apellido} y no soy alto debido a que mido ${this.altura}`

    console.log(resultado)
}

var sacha = new persona('Sacha', 'Lifzick', 1.8)
var erika = new persona('Erika', 'Luna', 1.6)
var arturo = new persona('Arturo', 'Martinez', 1.8)

sacha.soyAlto()
erika.soyAlto()
arturo.soyAlto()