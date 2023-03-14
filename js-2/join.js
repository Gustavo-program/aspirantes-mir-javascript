function join(arreglo = []){
    let string = "";

    for (let i = 0; i < arreglo.length; i++) {
        string += (arreglo[i] +' ' );
    }
    return string;
}
console.log(join(['Hola', 'mi', 'nombre', 'es', 'Gustavo', 'Román', 'Cortez']));
console.log(join([10, 9, 8, 7, 6, 5, 4]));