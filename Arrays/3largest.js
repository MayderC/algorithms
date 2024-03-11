function threeLargestNumbers(arreglo) {
  if (arreglo.length < 3) {
    return "El arreglo no tiene al menos 3 elementos.";
  }

  let primerMax = -Infinity;
  let segundoMax = -Infinity;
  let tercerMax = -Infinity;

  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i] > primerMax) {
      tercerMax = segundoMax;
      segundoMax = primerMax;
      primerMax = arreglo[i];
    }else if(arreglo[i] > segundoMax && arreglo[i] < primerMax){
      
    }
  }

  return [primerMax, segundoMax, tercerMax];
}

console.log(threeLargestNumbers([1, 200, 3, 4, 5, 69, 7, 8, 9])); // [7,8,9]
