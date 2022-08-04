
const productos = [];
const compra = [];
let precio = 0;

class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre.toLowerCase();
        this.precio = parseFloat(precio);
    }
    sumaIva(){
         this.precio = this.precio * 1.21;
    }
    
}

class Compra {
    constructor(nombre, precio) {
        this.nombre = nombre.toLowerCase();
        this.precio = parseFloat(precio);
    }
    sumaIva(){
         this.precio = this.precio * 1.21;
    }
    
}


productos.push(new Producto("Pantalon", "100"));
productos.push(new Producto("Remera", "100"));
productos.push(new Producto("Campera", "100"));

console.log(productos);

let entrada = prompt ("Ingrese los productos que desea comprar: Pantalon, Remera, Campera, s para salir")

function comprar() {
    while (entrada != "s" ){
        switch (entrada) {
            case "pantalon":
            case "Pantalon":
            case "PANTALON":        
            compra.push(new Compra("Pantalon", "100"));
            precio = precio+100;
            break;

            case "remera":
            case "Remera":
            case "REMERA":
            compra.push(new Compra("Remera", "100"));    
            precio = precio+100;
            break;

            case "campera":
            case "Campera":
            case "CAMPERA":
            compra.push(new Compra("Campera", "100"));
            precio = precio+100;
            break;

            default:
                alert ("Sin stock");
            
            break;        
          
        }
        entrada = prompt ("Ingrese los productos que desea comprar: Pantalon, Remera, Campera, s para salir")
    }
}

comprar();

console.log(compra);

console.log("Total a pagar $"+precio);