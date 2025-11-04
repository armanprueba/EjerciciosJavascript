class Producto {
    //Si no le pasamos unidades al constructor su número por defecto será 1.
    constructor(cod, name, price , units=1) {
        this.cod = cod
        this.name = name
        this.price  = price 
        this.units = units
    }

    changeUnits(units=0){
        if(this.units - units < 0){
            return false;
        } 
        else{
        this.units += units;
        return true; 
        }
    }

    getImport() {
        return this.price * this.units
    }

    getDescription(){
         return `${this.name} ${this.cod }(${this.units}): ${this.price} €/u => ${this.getImport()}`
    }
}

class Store {
    //Si no le pasamos unidades al constructor su número por defecto será 1.
    constructor(id, products) {
        this.id = id
        this.products = products
    }

    findProduct(cod){
        this.products.forEach(product=> {
            if (product.includes(cod)){
                return product
            }
        });
        return null;
       
    }

    addProduct(cod, units, nombre, precio){
        this.products.forEach(product=> {
            if (product.includes(cod)){
                product.changeUnits(units)
            }
        })
        this.products += new Producto(cod, units, nombre, precio)
        return true
        
    }

    delProduct(cod, units){
        this.products.forEach(product=> {
            if (product.includes(cod)){
                product.changeUnits(units)
            }
        })        
    }

    totalImport() {
        let total = 0
        this.products.forEach(product=> {
            total += product.getImport();
        }) 
    }
}

let producto = new Producto('MP45' , 'TV Samsung', 235.95, 5);
console.log(producto.getDescription());
let almacen = new Store(1);

almacen.addProduct(1, 4, 'TV Samsung MP45', 345.95);
almacen.addProduct(2, 8, 'Portátil Acer Travelmate 200', 245.95);
almacen.addProduct(3, 15, 'Impresora Epson LX-455', 45.95);
almacen.addProduct(4, 25, 'USB Kingston 16GB', 5.95);
