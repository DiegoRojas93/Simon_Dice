var diego = {
    nombre: `Diego`,
    apellido: `Rojas`,
    edad: 26,
}

var sacha = {
    nombre: `Sacha`,
    apellido: `Lifszyc`,
    edad: 28,
}

var dario = {
    nombre: `Dario`,
    apellido: `Susnisky`,
    edad: 27,
}



function imprimirNombreEnMayusculas({nombre}) {
    console.log(nombre.toUpperCase());
}

imprimirNombreEnMayusculas(diego)
imprimirNombreEnMayusculas(sacha)
imprimirNombreEnMayusculas(dario)
imprimirNombreEnMayusculas({nombre:`Pepito`})