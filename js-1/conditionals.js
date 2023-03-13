function calcularColor(num) {//ingresamos la variable num como parametro, nombre correcto de la funcion
  var color;
  if (num == 1) { //==
    color = "negro"; //negro
  } else if (num == 2) { //else if, ==
    color = "blanco"; //ya punto y coma, no dos puntos
  } else if (num == 3) { //==
    color = "azul"; //azul
  } else {
    color = "verde"; // va el igual en ves de dos puntos
  }

  return "El color es " + color;
}

// código de prueba
console.log(calcularColor(1)) // "El color es negro"
console.log(calcularColor(2)) // "El color es blanco"
console.log(calcularColor(3)) // "El color es azul"
console.log(calcularColor(8)) // "El color es verde"