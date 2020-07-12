/*
    1 - Sin parámetros
    2 - Con parámetros 
    3 - Preinicialización de parámetros 
    4 - Evaluación de parámetros
    5 - Rest 
    6 - Spread 
    7 - Funciones anónimas
    8 - Arrow

*/

//1
function sinParametros(){
    return console.log("Función sin parámetros")
}

sinParametros();

//2
function enviarSaludo(saludo){
    return console.log("Función con parámetro: "+saludo)
}

enviarSaludo("ejemplo")

//3
function enviarSaludoInicializacion(saludo=""){
    return console.log("Función con parámetro: "+saludo)
}

enviarSaludoInicializacion("aaa")

//4
function evaluacionParametros(saludo){
    saludo != null ? console.log(saludo) : console.log("Error")
}
evaluacionParametros()
evaluacionParametros("Hola")

//5
function imprimirMeses(...meses){
    for(let mes of meses){
        console.log(mes)
    }
}

imprimirMeses("Enero","Febrero")

//6
function imprimirDatos(nombre, precio, peso){
    console.log("Nombre: "+nombre+"\nPrecio: "+precio+"\nPeso: "+peso)
}

var juguete = ['Soldado',25,2]
imprimirDatos(...juguete)

//7
var anon = function() {
    console.log('I am anonymous');
}

anon()


//8
var uno = nombre => console.log(nombre);

uno("Arturo Aguilera")