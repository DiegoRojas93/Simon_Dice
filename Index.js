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

const INCREMENTO_DE_PESO = 0.3
const DIAS_DEL_AÑO = 365

console.log(`Al inicio del año ${diego.nombre} peso ${diego.peso} Kg`);

const aumentarDePeso = persona => persona.peso += INCREMENTO_DE_PESO
const adelgazar = persona => persona.peso -= INCREMENTO_DE_PESO
const comeMucho = () => Math.random () < 0.3
const realizaDeporte = () => Math.random () < 0.4
 
const META = diego.peso - 3
var dias = 0

while (diego.peso > META){
    if (comeMucho()) {
        aumentarDePeso(diego)
    }
    if (realizaDeporte()){
        adelgazar(diego)
    }
    dias +=1
}

console.log(`Pasaron ${dias} dias hasta que ${diego.nombre} adelgado 3kg`);