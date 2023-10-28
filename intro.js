let nombres = ["John", "Leonardo", "Edwin", "Anderson"];
let edades = [23, 45, 17, 38];
let baloto = [3, 2, 7, 28, 27];
let datos = [2, "Juan", true, null];

let persona ={
    nombre: "Oscar",
    sexo:"M",
    edad: 23,
    cedula: 109865721,
    semanascot:100,
    esmayordeedad: true,
    reportesisben: undefined,
    coloresfavoritos: ["rojo", "naranja", "morado"],
    fechadenacimiento: {
        dia: 29,
        mes: "septiembre",
        año: 1985
    },
    fechaexpedicion: "2020-01-01"   
}
let mayoriaedad=18;
const edadpensionM=62;
const edadpensionF=57;

if(persona.edad>=edadpensionM && persona.sexo=="M" && persona.semanascot>=edadpensionM){
    console.log("puede pensionarse");
}else if(persona.edad>=edadpensionF && persona.sexo=="F" && persona.semanascot>=edadpensionF){
    console.log("puede pensionarse");
}else{console.log("no puede pensionarse");}
    
if(persona.cedula || persona.pasaporte){
    console.log("puede viajar");
}else{
    console.log("no puede salir del pais");
}


let dia = "Lunes";

switch(dia){
    case "Lunes":
        console.log("Hoy es lunes");
        break;
    case "Martes":
        console.log("hoy es martes");
        break;
    case "Miercoles":
        console.log("hoy es miercoles");
        break;
    case "Jueves":
        console.log("Hoy es jueves");
        break;
    case "Viernes":
        console.log("hoy es viernes");
        break;
    case "Sabado":
        console.log("hoy es sabado");
        break;
    case "Domingo":
        console.log("Hoy es domingo");
        break;
    default:
        console.log("dia invalido")
    
}

// operador ternario

if(persona.sexo=="M"){
    console.log("Es hombre");
}else{
    console.log("es mujer");
}

persona.sexo=="M"? console.log("Es un hombre"):console.log("es mujer")