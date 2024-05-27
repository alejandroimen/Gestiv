import Producto from "../models/BST/Producto.js";
import { bst } from "./dependencies.js";

document.getElementById("btnVer").addEventListener("click", abrirProds);
function abrirProds () {
    let container = document.createElement("div");
    container.id = "containerForm";
    container.classList.add("container");
    container.style.flexDirection = "column";
    
    let btnClose = document.createElement("button");
    btnClose.id = "btnClose";
    btnClose.textContent = "←"
    btnClose.addEventListener("click", close);

    let input = document.createElement("input");
    input.placeholder = "Buscar";
    input.id = "inputBuscar";

    let btnSearch = document.createElement("button");
    btnSearch.textContent = "Buscar";
    btnSearch.addEventListener("click", searchProd);

    let lineInput = document.createElement("div");
    lineInput.id = "lineInput"

    lineInput.appendChild(input);
    lineInput.appendChild(btnSearch);

    container.appendChild(btnClose);
    container.appendChild(lineInput); 

    document.body.appendChild(container);

    renderProds();
}

function renderProds(){
    let container = document.getElementById("containerForm");
    let lista = document.createElement("ol");
    lista.id = "listaProds";

    
    let cabecera = document.createElement("li");
    cabecera.classList.add("cabeceraLista")
    let name = document.createElement("p");
    let cantidad = document.createElement("p");
    let precio = document.createElement("p");
    let descripcion = document.createElement("p");

    name.textContent = "Nombre";
    name.id = "nombre";
    cantidad.textContent = "Cantidad"
    precio.textContent = "Precio ($)";
    descripcion.id = "descripcionText";
    descripcion.textContent = "Descripción";

    cabecera.appendChild(name);
    cabecera.appendChild(cantidad);
    cabecera.appendChild(precio);
    cabecera.appendChild(descripcion);

    lista.appendChild(cabecera);

    container.appendChild(lista);

    bst.inorder((node) => {
        let linea = document.createElement("li");
        let name = document.createElement("h1");
        let cantidad = document.createElement("p");
        let precio = document.createElement("p");
        let descripcion = document.createElement("p");

        name.textContent = node.value.nombre;
        cantidad.textContent = node.value.cantidad;
        precio.textContent = ("$ "+node.value.precio);
        descripcion.id = "descripcionText";
        descripcion.textContent = node.value.descripcion

        linea.appendChild(name);
        linea.appendChild(cantidad);
        linea.appendChild(precio);
        linea.appendChild(descripcion);

        lista.appendChild(linea);

        container.appendChild(lista);

    });
}

document.getElementById("btnAgregar").addEventListener("click", abrirForm);
function abrirForm () {
    let container = document.createElement("div");
    let form = document.createElement("form");
    let btnClose = document.createElement("button");
    let titulo = document.createElement("h1");
    let inputName = document.createElement("input");
    let inputPrice = document.createElement("input");
    let inputCant = document.createElement("input");
    let inputDescription = document.createElement("textarea");
    let btnAdd = document.createElement("button");

    container.id = "containerForm";
    container.classList.add("container");
    form.id = "formAdd";

    btnClose.id = "btnClose";
    btnClose.textContent = "←"
    btnClose.addEventListener("click", close);

    titulo.textContent = "Agregar Producto";

    inputName.id = "nameInput";
    inputName.placeholder = "Nombre";
    inputPrice.id = "priceInput";
    inputPrice.placeholder = "Precio ($)";
    inputCant.id = "cantInput";
    inputCant.placeholder = "Cantidad"
    inputDescription.id = "descriptionInput";
    inputDescription.placeholder = "Descripcion";

    btnAdd.type = "button";
    btnAdd.id = "addBtn";
    btnAdd.textContent = "Agregar";
    btnAdd.addEventListener("click", addProd);

    form.appendChild(btnClose);
    form.appendChild(titulo);
    form.appendChild(inputName);
    form.appendChild(inputPrice);
    form.appendChild(inputCant);
    form.appendChild(inputDescription);
    form.appendChild(btnAdd);

    container.appendChild(form);

    document.body.appendChild(container);
}

function close(){
    let container = document.getElementById("containerForm");
    container.remove();
}

function addProd(){
    let name = document.getElementById("nameInput").value;
    let price = document.getElementById("priceInput").value;
    let cant = document.getElementById("cantInput").value;
    let descripcion = document.getElementById("descriptionInput").value;

    console.log("Se añadio")

    let newProducto = new Producto(name, price, cant, descripcion)
    bst.add(newProducto);
}

function searchProd(){
    let aBuscar = document.getElementById("inputBuscar").value;

    renderResult(bst.search(aBuscar));
}

function renderResult(result){
    if(result){
        let container = document.getElementById("containerForm");
        let listaVieja = document.getElementById("listaProds");

        if(listaVieja){
            listaVieja.remove();
        }
        let lista = document.createElement("ol");
        lista.id = "listaProds";

        let cabecera = document.createElement("li");
        cabecera.classList.add("cabeceraLista")
        let nombre = document.createElement("p");
        let cant = document.createElement("p");
        let price = document.createElement("p");
        let descrip = document.createElement("p");

        nombre.textContent = "Nombre";
        nombre.id = "nombre";
        cant.textContent = "cant"
        price.textContent = "price ($)";
        descrip.id = "descripText";
        descrip.textContent = "Descripción";

        cabecera.appendChild(nombre);
        cabecera.appendChild(cant);
        cabecera.appendChild(price);
        cabecera.appendChild(descrip);

        lista.appendChild(cabecera);

        container.appendChild(lista);



        let linea = document.createElement("li");
        let name = document.createElement("h1");
        let cantidad = document.createElement("p");
        let precio = document.createElement("p");
        let descripcion = document.createElement("p");

        name.textContent = result.value.nombre;
        cantidad.textContent = result.value.cantidad;
        precio.textContent = ("$ "+result.value.precio);
        descripcion.id = "descripcionText";
        descripcion.textContent = result.value.descripcion

        linea.appendChild(name);
        linea.appendChild(cantidad);
        linea.appendChild(precio);
        linea.appendChild(descripcion);

        lista.appendChild(linea);

        container.appendChild(lista);
    }else{
        let container = document.getElementById("containerForm");
        let listaVieja = document.getElementById("listaProds");

        if(listaVieja){
            listaVieja.remove();
        }
        let lista = document.createElement("ol");
        lista.id = "listaProds";

        let mje = document.createElement("span");
        mje.textContent = "No existe este producto";
        
        lista.appendChild(mje);

        container.appendChild(lista);
    }

}
