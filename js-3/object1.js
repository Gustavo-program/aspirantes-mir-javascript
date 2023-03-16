let pedro = {
    nombre: "Pedro Perez",
    edad: 30,
    activo: true,
    hobbies: ["programar", "squash", "piano"]
}
//Imprime en la consola el valor de la llave edad.
console.log("La edad de Pedro es: "+pedro.edad);

//Agrega una propiedad con llave estatura y valor 1.8
pedro.estatura = 1.8;
console.log("La estatura de Pedro es: "+pedro["estatura"]);

//Elimina la propiedad con llave activo.
delete pedro.activo;

//Recorre todas las propiedades e imprímelas en consola (una línea por propiedad y separando la llave y el valor con dos puntos :).
let llaves = Object.keys(pedro); //nombre,edad,hobbies,estatura

for (let i=0; i < llaves.length; i++) {
  let llave = llaves[i];
  console.log(llave+" : "+ pedro[llave]);
}

//Agrégale al objeto una función llamada saluda que retorne la frase “Hola, me llamo ” seguido del nombre de la persona.
pedro.saluda = function() {
    console.log("Hola, me llamo "+pedro.nombre);
  }
//Llama la función saluda y verifica el resultado, debería decir “Hola, me llamo Pedro Perez”.
pedro.saluda();
console.log(pedro);


