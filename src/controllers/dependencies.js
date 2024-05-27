import BST from "../models/BST/BST.js";
import Producto from "../models/BST/Producto.js";

let bst = new BST();

let producto1 = new Producto("Lapiz", 8, 37, "Lapiz de grafito 4B");
let producto2 = new Producto("Corrector", 20, 24, "Corrector de brocha para lapicero");
let producto3 = new Producto("Borrador", 5, 11, "Goma de borrar pequeña");
let Producto4 = new Producto("Hojas", 1, 200, "Hojas blancas de tamaño carta")
let producto5 = new Producto("Cinta", 20, 12, "Cinta adhesiva para pegar diversos materiales");
let producto6 = new Producto("Sacapuntas", 10, 16, "Sacapuntas de metal");
let producto7 = new Producto("Grapadora", 60, 3, "Grapadora");
let producto8 = new Producto("Crayones", 30, 3, "Caja de crayones con 12 colores");
let producto9 = new Producto("Lapicero", 12, 10, "Lapicero de tinta");

bst.add(producto1);
bst.add(producto2);
bst.add(producto3);
bst.add(Producto4);
bst.add(producto5);
bst.add(producto6);
bst.add(producto7);
bst.add(producto8);
bst.add(producto9);

export {
    bst
};