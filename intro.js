let nombres = ["John", "Leonardo", "Edwin", "Anderson"];
let edades = [23, 45, 17, 38];
let baloto = [3, 2, 7, 28, 27];
let datos = [2, "Juan", true, null];

let persona ={
    nombre: "Oscar",
    edad: 23,
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

if(persona.edad>=mayoriaedad){
    console.log("puede entrar al bar");
}