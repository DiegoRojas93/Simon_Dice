function Persona(nombre,apellido) {
    this.nombre = nombre
    this.apellido = apellido
    this.edad = 20
}
  
Persona.prototype.saludar = function(){
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
}

var sacha = new Persona('Sacha', 'Martinez')

sacha.saludar()
