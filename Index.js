//Callback: Es una devolución de llamada, es decir, una función que se ejecuta cuando llegue la respuesta de un servidor a JS. Por ejemplo: ¿que procesos quieres hacer cuando los datos de tu servidor hayan llegado?

//-------Manejando el Orden y el Asincronismo en JavaScript-------

//Callback es la funcion que pasa como parametro por cada funcion del Callbackhell


const API_ULR = `https://swapi.co/api/`
const PEOPLE_URL = `people/:id`

const opciones = {croossDomain: true}
const onPeopleResponse = (persona) => console.log(`Hola, yo soy ${persona.name}`);

function obtenerPersonaje(id, Callback) {
    const url = `${API_ULR}${PEOPLE_URL.replace(`:id`,id)}`

    $.get(url, opciones, function (persona) {
        console.log(`Hola, yo soy ${persona.name}`)

        if (Callback) {
            Callback()
        }
    })
}


//Callbackhell -----------▼

obtenerPersonaje(1, function () {
    obtenerPersonaje(2, function () {
        obtenerPersonaje(3,function () {
            obtenerPersonaje(4,function () {
                obtenerPersonaje(5,function () {
                    obtenerPersonaje(6,function () {
                        obtenerPersonaje(7)
                    })
                })
            })
        })
    })
})