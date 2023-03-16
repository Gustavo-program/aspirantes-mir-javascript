let receta = {

}
receta.nombre = "Sandwich";
receta.ingredientes = [];

receta.ingredientes = [
    {nombre : 'Pan',cantidad: 2},
    {nombre : 'Queso',cantidad: 1}
];


let valor = receta.ingredientes[0];
console.log(valor.nombre);

let ingrediente = receta.ingredientes;
let cantidades = 0;

for(let i = 0; i < ingrediente.length; i++){
    cantidades += ingrediente[i].cantidad;
}


console.log(cantidades);
