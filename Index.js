//Callback: Es una devolución de llamada, es decir, una función que se ejecuta cuando llegue la respuesta de un servidor a JS. Por ejemplo: ¿que procesos quieres hacer cuando los datos de tu servidor hayan llegado?

//----------------------------Promesas----------------------------

//Para hacer el llamado a múltiples promesas, nos apoyamos en un array de ids con el que luego construimos otro arreglo de Promesas, que pasaremos como parámetro a Promise.all( arregloDePromesas ), con las promesas podemos encadenar llamadas en paralelo, algo que no es posible usando callbacks.


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

var ids = [1, 2, 3, 4, 6, 7]

var promesas = ids.map(id => obtenerPersonaje(id))

Promise
    .all(promesas)
    .then(personajes => console.log(personajes))
    .catch(onError)

