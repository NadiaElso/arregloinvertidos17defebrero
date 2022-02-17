let dimension: number = 0;
let arreglo: number[] = new Array(dimension);

function cargaArreglo(arre: number[], dimen: number): void {
  for (let i = 0; i < dimen; i++) {
    arre[i] = Number(prompt("Ingrese los valores del arreglo"));
    console.log(arre[i]);
  }
}
function cargarDimension(dimension: number) {
  dimension = Number(prompt("Ingresa dimensión del arreglo"));
}
function invertirArreglo(arreglo: number[], dimens: number): void {
  cargaArreglo(arreglo, dimension);
  for (let index = dimens - 1; index >= 0; index--) {
    console.log(arreglo[index]);
  }
}
cargarDimension(dimension);

invertirArreglo(arreglo, dimension);
