//template literals

function inicio(){
    //traditional function
    /*function saludar(nombre){
        return "hola "+ nombre;
    }*/

    //Arrow function
    const saludar = (nombre) => "hola "+nombre;

    /*function calcularNacimiento(edad){
        return 2023 - edad;
    }*/
    const calcularNacimiento = (edad) => 2023 - edad;
    
    let nombrePersona = prompt("ingresa tu nombre");
    let resultado = saludar(nombrePersona);
    
    
    let edadPersona =prompt("Ingresa tu edad");
    let resultadoCalculo = calcularNacimiento(edadPersona);

    let result = resultado + " tu año de nacimiento es "+ resultadoCalculo;
    // esto es un template string
    let result2 =`${resultado} tu año de nacimiento es ${resultadoCalculo}`; 
    let result3 =`${saludar(nombrePersona)} tu año de nacimiento3 es ${resultadoCalculo}`;
    console.log(result3);

}

inicio();

