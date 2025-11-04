## POO
### ACTIVIDAD 9
* Clase Product:
    Cada producto será un objeto con las propiedades cod, name, price y units. Si no le pasamos unidades al constructor su número por defecto será 1.
    Esta clase tendrá los siguientes métodos:
    * changeUnits(units) : Recibe la cantidad a aumentar (positiva o negativa) e incrementa (o decrementa) las unidades en la cantidad recibida. Si se intentan restar más unidades de las que hay no hace nada y devuelve false y en otro caso cambia las unidades y devuelve true
    * getImport() : Devuelve el importe total del producto (su precio multiplicado por el nº de unidades)
    * getDescription() : Mostrará su descripción, sus unidades entre paréntesis, su precio y el importe total. Por ejemplo: TV Samsung MP45 (5): 235,95 €/u => 1179,75 €
    
* Clase Store:
    Es el almacén de productos y tendrá las propiedades id (código numérico que nos pasan al crear el almacén) y products (array de productos que al crearlo estará vacío)

    Tendrá los siguientes los métodos:

    * findProduct(cod) : Recibe un código de producto y devuelve el producto que tiene dicho código o null si ese código no existe en el almacén.
    * addProduct(cod, units, nombre, precio): Recibe como parámetro el código y unidades a añadir y, opcionalmente, el nombre y precio (si se trata de un producto nuevo) y lo añade al almacén. Si ya existe el código suma al producto las unidades indicadas y si no existe crea un nuevo producto en el array. Devuelve true.
    * delProduct(cod, units): recibe como parámetro el código y las unidades a quitar de un producto y lo resta del almacén. Devuelve true a menos que haya menos unidades de las que quieren restarse, en cuyo caso no hace nada y devuelve false.
    * totalImport(): Devuelve el valor total de los productos del almacén.
    * orderByDescrip: devuelve el array de productos ordenado por el nombre
    * orderByUnits: devuelve el array de productos ordenado por unidades descendente
    
    Para probar que funciona correctamente añadiremos al fichero main.js:


        let almacen = new Store(1);

        almacen.addProduct(1, 4, 'TV Samsung MP45', 345.95);
        almacen.addProduct(2, 8, 'Portátil Acer Travelmate 200', 245.95);
        almacen.addProduct(3, 15, 'Impresora Epson LX-455', 45.95);
        almacen.addProduct(4, 25, 'USB Kingston 16GB', 5.95);

        console.log('LISTADO DEL ALMACÉN');
        almacen.products.forEach( prod => console.log(prod.getDescription()) );

        almacen.addProduct(5, 15, 'USB Kingston 64GB', 15.95);
        almacen.delProduct(3, 11);
        almacen.delProduct(3, 7);
        almacen.addProduct(1, 9);

        console.log('LISTADO DEL ALMACÉN');
        almacen.products.forEach( prod => console.log(prod.getDescription()) );
        
    Además en nuestro main.js haremos que se muestren por consola todos los productos de los que tenemos menos de 5 unidades en stock o cuyo importe es inferior a 150 €.


### ACTIVIDAD 10
    Crea una clase Screen que hereda de Product y que tiene una nueva propiedad llamada size. El método getDescription() mostrará el tamaño (size) junto al nombre.

## ACTIVIDAD 11:
    Adapta las clases Product y Screen para que el método que muestra los datos del producto se llame de la manera más adecuada sobrecargando toString

    Crea 5 productos y guárdalos en un array. Crea las siguientes funciones (todas reciben ese array como parámetro):

        * prodsSortByName() : Devuelve un array con los productos ordenados alfabéticamente.
        * prodsSortByPrice() : Devuelve un array con los productos ordenados por importe.
        * prodsTotalPrice(): Devuelve el importe total del los productos del array, con 2 decimales.
        * prodsWithLowUnits(prods, units): Recibe el array de productos y como segundo parámetro un número. Devuelve un array con todos los productos de los que quedan menos de los unidades indicadas.
        * prodsList(): Devuelve una cadena que dice 'Listado de productos:' y en cada línea un guión y la información de un producto del array.
