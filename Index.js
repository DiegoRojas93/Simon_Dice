//Callback: Es una devolución de llamada, es decir, una función que se ejecuta cuando llegue la respuesta de un servidor a JS. Por ejemplo: ¿que procesos quieres hacer cuando los datos de tu servidor hayan llegado?

//-------------Haciendo múltiples requests o peticiones-----------

const API_ULR = `https://swapi.co/api/`
const PEOPLE_URL = `people/:id`

const opciones = {croossDomain: true}
const onPeopleResponse = (persona) => console.log(`Hola, yo soy ${persona.name}`);

function obtenerPersonaje(id) {
    const url = `${API_ULR}${PEOPLE_URL.replace(`:id`,id)}`
    $.get(url, opciones, onPeopleResponse)
}


obtenerPersonaje(1)
obtenerPersonaje(2)
obtenerPersonaje(3)