//Callback: Es una devolución de llamada, es decir, una función que se ejecuta cuando llegue la respuesta de un servidor a JS. Por ejemplo: ¿que procesos quieres hacer cuando los datos de tu servidor hayan llegado?

const API_ULR = `https://swapi.co/api/`
const PEOPLE_URL = `people/:id`

const lukeUrl = `${API_ULR}${PEOPLE_URL.replace(`:id`,1)}`
const opciones = {croossDomain: true}
const onPeopleResponse = (persona) => console.log(`Hola, yo soy ${persona.name}`);

$.get(lukeUrl, opciones, onPeopleResponse)