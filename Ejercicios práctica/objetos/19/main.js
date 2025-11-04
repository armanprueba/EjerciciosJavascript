let arrayNotas = [5.2, 3.9, 6, 9.75, 7.5, 3];
let notaTotal = arrayNotas.reduce((total, nota) => total += nota);
let notaMedia =  notaTotal / arrayNotas.length;

console.log(notaMedia.toFixed(1));





