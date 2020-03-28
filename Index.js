//Callback: Es una devolución de llamada, es decir, una función que se ejecuta cuando llegue la respuesta de un servidor a JS. Por ejemplo: ¿que procesos quieres hacer cuando los datos de tu servidor hayan llegado?

//----------------------------Promesas----------------------------

//la promesas mejora la forma de manejar el asincronismo y dejar de lado el uso del Callbackhell.

//En esta seccion solamente vamos a obtener el primer personaje pero con promesas


const API_ULR = `https://swapi.co/api/`
const PEOPLE_URL = `people/:id`

const opciones = {croossDomain: true}
const onPeopleResponse = (persona) => console.log(`Hola, yo soy ${persona.name}`);

function obtenerPersonaje(id) {

    return new Promise ((resolve, reject) =>{

        const url = `${API_ULR}${PEOPLE_URL.replace(`:id`,id)}`
        $
            .get(url, opciones, function (data) {
                resolve(data)
            })
            .fail(() => reject(id))
    })  
}


function onError(id) {
    console.log(`Sucedio un error al obtener el personaje ${id}`);
}

obtenerPersonaje(1)
    .then(function (personaje) {
        console.log(`El personaje 1 es ${personaje.name}`);
    })
    .catch(onError)

