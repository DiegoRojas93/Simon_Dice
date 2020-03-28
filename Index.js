//Callback: Es una devolución de llamada, es decir, una función que se ejecuta cuando llegue la respuesta de un servidor a JS. Por ejemplo: ¿que procesos quieres hacer cuando los datos de tu servidor hayan llegado?

//----------------Manejo de errores con callbacks----------------

//Si tenemos fallas de cominicacion con las APIS para obtener el Callback lo mejor seria refactorizar el codigo


const API_ULR = `https://swapi.co/api/`
const PEOPLE_URL = `people/:id`

const opciones = {croossDomain: true}
const onPeopleResponse = (persona) => console.log(`Hola, yo soy ${persona.name}`);

function obtenerPersonaje(id, Callback) {
    const url = `${API_ULR}${PEOPLE_URL.replace(`:id`,id)}`

    
    $
        .get(url, opciones, Callback)
        .fail(() =>{
            console.log(`Sucedió un error, no se pudo obtener el personaje ${id}`);
        })
}




//Callbackhell -----------▼

obtenerPersonaje(1, function (personaje) {
    console.log(`Hola, yo soy ${personaje.name}`)

    obtenerPersonaje(2, function (personaje) {
        console.log(`Hola, yo soy ${personaje.name}`)

        obtenerPersonaje(3,function (personaje) {
            console.log(`Hola, yo soy ${personaje.name}`)

            obtenerPersonaje(4,function (personaje) {
                console.log(`Hola, yo soy ${personaje.name}`)

                obtenerPersonaje(5,function (personaje) {
                    console.log(`Hola, yo soy ${personaje.name}`)

                    obtenerPersonaje(6,function (personaje) {
                        console.log(`Hola, yo soy ${personaje.name}`)

                        obtenerPersonaje(7, function (personaje) {
                            console.log(`Hola, yo soy ${personaje.name}`)
                        })
                    })
                })
            })
        })
    })
})