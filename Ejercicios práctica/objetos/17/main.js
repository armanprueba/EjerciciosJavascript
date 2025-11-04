let arrayDias = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];
let todosDias = arrayDias.every(dia => dia[0].toLocaleUpperCase() === "M");
let algunDia = arrayDias.some(dia => dia[0].toLocaleUpperCase() === "M");

console.log(todosDias);
console.log(algunDia);

