
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30, 
    loop: true,
    loopFillGroupWithBlanck:true,
    pagination : {
        el:".swiper-pagination", 
        clickable:true,
    },
    navigation: {

        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },

    breakpoints: {

        0:{
            slidesPerView:1
        },
        520: {
            slidesPerView: 2

        },
        950 : {

            slidesPerView: 3
        }
    }
});


//carrito

const carrito = document.getElementById('carrito');
const elementos = document.getElementById('lista');
const elementos2 = document.getElementById('lista-2');
const lista = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.getElementById('vaciar-carrito');

cargarEventListeners();

function cargarEventListeners() {

elementos.addEventListener('click',comprarElemento);
//elementos2.addEventListener('clic',comprarElemento);

carrito.addEventListener('click',eliminarElemento);


vaciarCarritoBtn.addEventListener('click ',vaciarCarrito);


document.addEventListener('DOMContentLoaded', leerLocalStorage);
}

function comprarElemento(e) {

    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')) {
    const elemento = e.target.parentElement.parentElement;
    leerDatosElemento(elemento);

    }
}


function leerDatosElemento(elemento) {

const infoElemento = {

imagen : elemento.querySelector('img').src,
titulo: elemento.querySelector('h3').textContent,
precio: elemento.querySelector('.precio').textContent,
id: elemento.querySelector('a').getAttribute('data-id')

} 
insertarCarrito(infoElemento);

}


function insertarCarrito(elemento) {


    const row = document.createElement('tr');
    row.innerHTML = `
    
    <td>
    <img src="${elemento.imagen}" width=100> 

    </td>

    <td>
    ${elemento.titulo}

    </td>

    <td>
    

    </td>

    <td>
    ${elemento.precio}

    </td>

    <td>
    <a href="#" class="borrar" data-id=" ${elemento.id}">X<a/>

    </td>

    
    `;

    lista.appendChild(row);
    guardarElementoLocalStorage(elemento);

}


function eliminarElemento(e) {

e.preventDefault();

let elemento, elementoID;

if(e.target.classList.contains('borrar')) {

e.target.parentElement.parentElement;
elementoId = elemento.querySelector('a').getAttribute('data-id');  

}

eliminarElementoLocalStorage(elementoId)

}

function vaciarCarrito() {

    while(lista.firstChild){

        lista.removeChild(lista.firstChild)
    }

    vaciarLocalStorage();
    return false;

}


function guardarElementoLocalStorage(elemento){

let elementos;
elementos = obtenerelementosLocalStorage();
elementos.push(elemento);
localStorage.setItem('elementos', JSON.stringify(elementos));


}

function obtenerelementosLocalStorage() {

    let elementsLS;

    if(localStorage.getItem('elementos') == null){
        elementsLS = [];
    } else {

        elementsLS = JSON.parse(localStorage.getItem('elementos'));

    }
    return elementsLS;

}


function leerLocalStorage() {

let elementosLS;

elementosLS = obtenerelementosLocalStorage();

elementosLS.forEach(function(elemento)

 {

    const row = document.createElement('tr');
    row.innerHTML = `
    
    <td>
    <img src="${elemento.imagen}" width=100> 

    </td>

    <td>
    ${elemento.titulo}

    </td>

    <td>
    

    </td>

    <td>
    ${elemento.precio}

    </td>

    <td>
    <a href="#" class="borrar" data-id=" ${elemento.id}">X<a/>

    </td>

    
    `;

    lista.appendChild(row);
});

}

function eliminarElementoLocalStorage(){

    elementosLS.forEach(function(elementosLS,index){

        if(elementosLS.id === elemento) {
        
        elementosLS.splice(index, 1);
        
        }
        
        });
        localStorage.setItem('elementos', JSON.stringify(elementosLS));
}

function vaciarLocalStorage() {

    localStorage.clear();
}


