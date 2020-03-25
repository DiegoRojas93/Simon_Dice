var diego = {
    nombre : 'Diego',
    apellido : 'Rojas',
    altura : 1.71
}
  
var alan = {
    nombre : 'Alan',
    apellido : 'Perez',
    altura : 1.86
}
  
var martin = {
    nombre : 'martin',
    apellido : 'Gomez',
    altura : 1.85
}
  
var sacha = {
    nombre : 'sacha',
    apellido : 'Lifszyc',
    altura : 1.72
}
  
var dario = {
    nombre : 'Dario',
    apellido : 'Juarez',
    altura: 1.71
}
  
var paula = {
    nombre : 'Paula',
    apellido: 'Barrios',
    altura: 1.76
}
  
var vicky = {
    nombre: 'Vicky',
    apellido : 'Zapata',
    altura: 1.56
}
  
//----------CREACION DEL ARRAY---------

var personas = [diego, alan, martin, sacha, dario, paula, vicky]

const esAlta = ({altura}) => altura > 1.8

 var personasAltas = personas.filter(esAlta)

 console.log(personasAltas);
 