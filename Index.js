var diego = {
    nombre: `Diego`,
    apellido: `Rojas`,
    edad: 26
}

var sacha = {
    nombre: `Sacha`,
    apellido: `Lifszyc`,
    edad: 28
}

var dario = {
    nombre: `Dario`,
    apellido: `Susnisky`,
    edad: 27
}

function imprimirNombreYEdad({nombre, edad}) {
    console.log(`Hola!, me llamo ${nombre} y tengo ${edad} años`);
}

imprimirNombreYEdad(diego)
imprimirNombreYEdad(sacha)
imprimirNombreYEdad(dario)