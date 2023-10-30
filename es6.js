//template literals

function saludar(nombre){
    return "hola "+ nombre;
}

function calcularNacimiento(edad){
    return 2023 - edad;
}

let nombrePersona = prompt("ingresa tu nombre");
let resultado = saludar(nombrePersona);


let edadPersona =prompt("Ingresa tu edad");
let resultadoCalculo = calcularNacimiento(edadPersona);
console.log(resultado +" naciste en el año "+ resultadoCalculo);