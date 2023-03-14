// escribe la función max acá
function max(array = []) {
    if (array.length === 0) {
        return undefined;
    }
    else {
        let mayor = 1;

        for (let i = 0; i < array.length; i++) {
            if (array[i] > mayor) {
                mayor = array[i];
            }
        }
        return mayor;
    }



}

console.log(max([1, 3, 2])) // 3
console.log(max([10, 9, 8, 7, 6, 5, 4])) // 10
console.log(max([])) // undefined