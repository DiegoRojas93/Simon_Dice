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

const INCREMENTO_DE_PESO = 0.2
const DIAS_DEL_AÑO = 365

console.log(`Al inicio del año ${diego.nombre} peso ${diego.peso} Kg`);

const aumentarDePeso = persona => persona.peso += INCREMENTO_DE_PESO

const adelgazar = persona => persona.peso -= INCREMENTO_DE_PESO

for (var i = 1; i <= DIAS_DEL_AÑO; i++) {
    var random = Math.random()

    if (random < 0.25) {
        aumentarDePeso(diego)
    }else if (random < 0.5){
        adelgazar(diego)
    }
}

console.log(`Al final del año ${diego.nombre} pesa ${diego.peso.toFixed(2)} Kg`);