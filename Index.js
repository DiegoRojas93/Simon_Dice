var diego = {
    nombre: `Diego`,
    apellido: `Rojas`,
    edad: 26,
    peso: 71,
    ingeniero: false,
    cocinero: false,
    cantante: false,
    dj : false,
    guitarrista: false,
    drone: true,
}

var sacha = {
    nombre: `Sacha`,
    apellido: `Lifszyc`,
    edad: 16,
    ingeniero: true,
    cocinero: false,
    cantante: false,
    dj : false,
    guitarrista: false,
    drone: true,
}

var contador = 0

const llueve = () => Math.random() < 0.25

do{
    contador++
}while(!llueve())

var cantidad = (contador == 1) ? 'sola vez' : 'veces'

console.log(`Fui a ver si llovia ${contador} ${cantidad}`);
