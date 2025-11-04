let alumnado = [
  { nombre: "Sara", edad: 19 },
  { nombre: "Pepe", edad: 61 },
  { nombre: "Lara", edad: 24 },
  { nombre: "Álex", edad: 17 },
  { nombre: "Inés", edad: 31 }
];



/* Hay que poner el slice para que no se cambier el valor original*/
let ordenaEdad = [];
try {
  ordenaEdad = alumnado.slice().sort(function (alumnado, alumnado2) {
    return alumnado.edad - alumnado2.edad;
  });
}
catch (err) {
  console.error(err);
}
console.log(ordenaEdad);



let ordenaNombre = alumnado.slice().sort((alumnado, alumnado2) => alumnado.nombre.localeCompare(alumnado2.nombre));

/*let ordenaNombre = alumnado.slice().sort(function(alumnado, alumnado2) {
  return alumnado.nombre.localeCompare(alumnado2.nombre);
});*/

console.log(alumnado);
console.log(ordenaNombre);



