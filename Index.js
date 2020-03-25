var diego = {
    nombre : 'Diego',
    apellido : 'Rojas',
    altura : 1.71,
    libros : 127
}
  
var alan = {
    nombre : 'Alan',
    apellido : 'Perez',
    altura : 1.86,
    libros: 37
}
  
var martin = {
    nombre : 'martin',
    apellido : 'Gomez',
    altura : 1.85,
    libros : 86
}
  
var sacha = {
    nombre : 'sacha',
    apellido : 'Lifszyc',
    altura : 1.72,
    libros : 68
}
  
var dario = {
    nombre : 'Dario',
    apellido : 'Juarez',
    altura : 1.71,
    libros : 12
}
  
var paula = {
    nombre : 'Paula',
    apellido: 'Barrios',
    altura : 1.76,
    libros : 15
}
  
var vicky = {
    nombre : 'Vicky',
    apellido : 'Zapata',
    altura : 1.56,
    libros : 86
}
  
//----------CREACION DEL ARRAY---------
  
var personas = [diego, alan, martin, sacha, dario, paula, vicky]
  
//----------ACOMULADOR DEL ARRAY---------

const reducer = (acumulador,{libros}) => acumulador + libros


var total = personas.reduce(reducer,0)

console.log(`En total todos tienen acumulados ${total} libros`);
