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
//immediatly invoked function expression iife
(function(){
    console.log("hola mundo");
})();

//arrays
const arraymethods =() =>{
    const baloto = [ 15, 34, 84, 35, 95, 20, 34];
console.log(baloto);

// agregar un elemento al final del array
baloto.push(30);
console.log(baloto)

// agregar un elemento al inicio del array
baloto.unshift(4);
console.log(baloto);

// eliminar el ultimo elemento del array
baloto.pop();
console.log(baloto);

//eliminar el primer elemento
baloto.shift();
console.log(baloto)

const array2 = baloto.map((el)=>el=el*2);
console.log(array2);

baloto.forEach((el)=>{console.log(el)});

const filteredNumbers = baloto.filter((el)=>el>=30);
console.log(filteredNumbers);
}

const demoCallback = () =>{
    const saludes=(funcion)=>{
        console.log("hola mundote");
        funcion();
    }

    const despedir=()=>{
        console.log("adios");
    }

    saludes(despedir);


    const timer = (fn)=>{
        console.log("la siguiente funcion se ejecutara en 2 segunods");
        setTimeout(fn,6000);
    }

    timer(despedir)
    
}


const demoPromesas = ()=>{
    let promesa = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("la promesa se resolvió");
        },5000)
    })

    promesa
    .then((response)=>console.log(response))
    .catch((error)=>console.log(error));


    let promesa2 = new Promise((resolve, reject)=>{
        let number =Math.floor(Math.random()*10);
        if(number%2==0){
            resolve(number);
        }else{
            reject(number);
        }
    })

    promesa2
    .then((response)=>console.info(`el numero ${response} es par`))
    .catch((error)=>console.error(`el numero ${response} ess impar`));
}

demoPromesas();

