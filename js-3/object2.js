let persona = {
    nombre : "Gustavo Román",
    edad : 23,
    ciudad : "Lima", 
    profesion: "Ingeniero"
}
console.log(persona);

function presentacion(obj){
    return "Hola mi nombre es "+obj.nombre+" tengo "+ obj.edad+" años y soy de la ciudad de " +obj.ciudad;
}

let mensaje = presentacion(persona);
console.log(mensaje);

persona.hobbies = ["Programar","Fútbol","Piano"];
console.log(persona["hobbies"]);

for(let i = 0; i < persona.hobbies.length; i++){
    console.log(persona.hobbies[i]);
}