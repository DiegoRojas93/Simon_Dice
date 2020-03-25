class Persona{
    constructor(nombre, apellido){
        this.nombre = nombre
        this.apellido = apellido
    }
    
    saludar(fn){
        console.log(`Persona: Buenos dias señorita. Hagame un favor, aqui es la empresa Logitech mobile`);
        let random = Math.round(Math.random())

        let respuesta = (random >= 0.5) ? `Si, asi es` : `No, queda en la sigiente esquina`

        console.log(respuesta);


        if ( random >= 0.5){
            console.log(`Que se le ofrece`);
        }
         
    }
}

class Empleado extends Persona{
    constructor(nombre, apellido,trabajador){
        super(nombre, apellido)
        this.emplado = trabajador
    }


    saludar(fn){
        let {nombre,apellido} = this

        console.log(`${nombre}(empleado/a): Buenos dias chicos`);

        if (fn){
            fn(nombre,apellido)
        }
    }
}

class Ingenieria extends Empleado{
    constructor(nombre, apellido,trabajador, estudios){
        super(nombre, apellido)
        this.emplado = trabajador
        this.Ingeniero = estudios
    }

    saludar(fn){
        let {nombre,apellido,empleado,Ingeniero} =this

        console.log(`${nombre}(ingeniero/a): Buenos dias a todos`);


        if(fn && Ingeniero == true ){
            console.log(`Buenos dias Jefe`);
        }
    }
}

class Dueño extends Persona{
    constructor(nombre, apellido,trabajador, estudios, autoridad){
        super(nombre,apellido)
        this.empleado = trabajador
        this.Ingeniero = estudios
        this.Dueño = autoridad
    }

    saludar(fn){
        console.log(`Buenos dias señorita`);

        let {Dueño} = this

        if (fn && Dueño == true) {
            fn()
        }else{
            console.log(`!AAAAAAACH, Llego la boba esa`);
        }
    }
}


function responderSaludo(nombre, apellido,trabajador, estudios, autoridad){
    console.log(`Que se le ofrece`);
}

function responderSaludo2(nombre, apellido,trabajador, estudios, autoridad){
    console.log(`AAAHHH!, Buenos dias ${nombre} ${apellido} `);
}

function responderSaludo3(nombre, apellido,trabajador, estudios, autoridad){
    console.log(`AAAHHH!, Buenos dias ${nombre} ${apellido} `);
}

function responderSaludo4(nombre, apellido,trabajador, estudios, autoridad){
    console.log(`Recepcionista: Buenos dias, !OOHHHH POR DIOS LLEGO EL DUEÑO¡ ${nombre} ${apellido}\n`
    +`${nombre} (Dueño):Quisera ver el Ingeniero`);
}


var juan = new Persona (`Juan`, `Ramirez`)
var judas = new Persona (`Judas`, `Iscariote`)
var pablo = new Empleado (`Pablo`, `Marmol`, true)
var maria = new Empleado (`Maria`, `Isabel`, true)
var vilma = new Ingenieria (`Vilma`, `Hernandez`, true, false)
var diego = new Ingenieria (`Diego`, `Rojas`, true,true)
var daniela = new Dueño (`Daniela`, `Quintana`, true,true, false)
var jesus = new Dueño (`Jesus`, `Nazaret`, false, true, true)

juan.saludar()
console.log('')
judas.saludar(responderSaludo)
console.log('')
pablo.saludar()
console.log('')
maria.saludar(responderSaludo2)
console.log('')
vilma.saludar(responderSaludo3)
console.log('')
diego.saludar(responderSaludo3)
console.log('')
daniela.saludar(responderSaludo4)
console.log('')
jesus.saludar(responderSaludo4)