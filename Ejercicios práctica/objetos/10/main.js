/*
No recomendado hacerlo asi
let inventario = new Object();
inventario.nombre = "TV Samsung 42";
inventario.categoria = "Televisores";
inventario.unidades = 4;
inventario.precio = 345.95;
inventario.importe = inventario.unidades * inventario.precio;
*/



let inventario = [
{
    nombre : "TV Samsung 42",
    categoria : "Televisores",
    unidades : 4,
    precio : 345.95,
    importe : this.unidades * this.precio,
},
{
    nombre : "Ordenador AMD",
    categoria : "Ordenadores",
    unidades : 2,
    precio : 450.68,
    importe : this.unidades * this.precio,
},
{
    nombre : "Patinete Xiaomi",
    categoria : "Patinetes",
    unidades : 8,
    precio : 240,
    importe : this.unidades * this.precio,
}
];


console.log(inventario[2].nombre);


