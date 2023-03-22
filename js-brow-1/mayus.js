const texto = document.getElementById('text');
const resultado = document.getElementById('resultado');
const boton = document.getElementById('cambio');
const resultadoBoton = document.getElementById('resultadoBtn');

//cambiar a mayusculas mientras escribo
texto.addEventListener('input', function(){
    const input = texto.value.toUpperCase();
    resultado.textContent = input;
});


boton.addEventListener('click', function(){
    const resultadoButton = texto.value.toUpperCase();
    resultadoBoton.textContent = resultadoButton;
});

 //bonus
const inputPalindroma = document.getElementById('textPalindroma');
const btnPalindroma = document.getElementById('btnPalindroma');
const resultPalindroma = document.getElementById('resultadoPalindroma');

btnPalindroma.addEventListener('click', function(){

    var nuevaCadena = "";
    for (var i = inputPalindroma.value.length - 1; i >= 0; i--) {
        nuevaCadena += inputPalindroma.value[i];
    }
    if(inputPalindroma.value.toUpperCase()===nuevaCadena.toUpperCase()){
        resultPalindroma.textContent = nuevaCadena + ' SI es una palabra palindroma';
    }
    else{
        resultPalindroma.textContent = 'NO es una Palabra palindroma'
    }

});



