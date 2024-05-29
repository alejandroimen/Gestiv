import BST from "../models/BST/BST.js";
import Producto from "../models/BST/Producto.js";

let bst = new BST();

let producto1 = new Producto("Led", 20, 5, "Emiten luz cuando se aplica una corriente eléctrica.");
let producto2 = new Producto("Diodo infrarrojo", 21, 12, "Mandan señakes a traves de infrarrojo");
let producto3 = new Producto("Diodo puente", 15, 15, "Convierte corriente alterna (CA) en corriente continua (CC).");
let producto4 = new Producto("Relevador", 20, 15, "Regula circuitos de alta potencia.")
let producto5 = new Producto("Puente H", 31, 53, "Controla el sentido de giro de un motor (CC).");
let producto6 = new Producto("Terminales", 10, 3, "Permite la unión de cables.");
let producto7 = new Producto("Resistencia", 62, 1, "Limita el flujo de corriente eléctrica en un circuito.");
let producto8 = new Producto("Capacitores", 30, 10, "Almacena y liberan energía eléctrica.");
let producto9 = new Producto("Circuitos integrados", 12, 25, "Se encargan de realizar diversas funciones.");
let producto10 = new Producto ("Fusibles", 12, 7, "Interrumpen el flujo de corriente cuando ésta excede la variable.");

bst.add(producto1);
bst.add(producto2);
bst.add(producto3);
bst.add(producto4);
bst.add(producto5);
bst.add(producto6);
bst.add(producto7);
bst.add(producto8);
bst.add(producto9);
bst.add(producto10);

export {
    bst
};
