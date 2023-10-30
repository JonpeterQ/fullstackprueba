//template literals

function inicio(){
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

    let result = resultado + " tu año de nacimiento es "+ resultadoCalculo;
    // esto es un template string
    let result2 =`${resultado} tu año de nacimiento es ${resultadoCalculo}`; 
    console.log(result2);

}

inicio();

