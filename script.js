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
const btnCart = document.querySelector('.container-cart-icon');
const containerCartProducts = document.querySelector(
	'.container-cart-products'
);

const cartInfo = document.querySelector('.platillo');

const rowProduct = document.querySelector('.lista-carrito');

const productList = document.querySelector('.platillos ');

let allProducts = [];

const valorTotal = document.querySelector('.total-pagar');

const countProducts = document.querySelector('#contador-productos');

productList.addEventListener('click',e => {

if(e.target.classList.contains('agregar-carrito')){

    const product = e.target.parentElement


    const infoProduct = {
        quantity: 1, 
        imagen : product.querySelector('img').src,
        titulo: product.querySelector('h3').textContent,
        precio: product.querySelector('.precio').textContent,
        id: product.querySelector('a').getAttribute('.data-id')
        

        

    }
    const exits = allProducts.some(product => product.titulo === infoProduct.titulo)

    if(exits){

        const products = allProducts.map(product => {

            if(product.titulo === infoProduct.titulo) {

                product.quantity++;
                return product
            } else {

                return product
            }

        })
        allProducts = [...products];
     
    } else {
  
        allProducts = [...allProducts, infoProduct];
    }

    
    showHTML();
}
    //console.log(allProducts)
});


rowProduct.addEventListener('click', e => {
	if (e.target.classList.contains('.borrar')) {
		const product = e.target.parentElement;
		const title = product.querySelector('p').textContent;

		allProducts = allProducts.filter(
			product => product.title !== title
		);

		console.log(allProducts);

		showHTML();
	}
});



const btnClearAll = document.querySelector('#vaciar-carrito')
btnClearAll.addEventListener('click', () => {
	allProducts = [];
	showHTML()
})



cargarEventListeners();

function cargarEventListeners(){




    carrito.addEventListener('click', eliminarElemento);
    

};
function eliminarElemento(e) {

 //   e.preventDefault();
    
    let elemento, elementoId;
    
    if(e.target.classList.contains('borrar')) {
    
    e.target.parentElement.parentElement.remove();
    elemento = e.target.parentElement.parentElement;
    elementoId = elemento.querySelector('a').getAttribute('data-id');  
    
    
    }
    
    eliminarElementoLocalStorage(elementoId)
    
    }
    function obtenerelementosLocalStorage() {

        let elementsLS;
    
        if(localStorage.getItem('elementos') == null){
            elementsLS = [];
        } else {
    
            elementsLS = JSON.parse(localStorage.getItem('elementos'));
    
        }
        return elementsLS;
        
    
    };
    function eliminarElementoLocalStorage(elemento){

        let elementosLS;
    
        elementosLS = obtenerelementosLocalStorage();
        elementosLS.forEach(function(elementosLS,index){
    
            if(elementosLS.id === elemento) {
            
            elementosLS.splice(index, 1);
            
            }
            
            });
            localStorage.setItem('elementos', JSON.stringify(elementosLS));
            
    };
const showHTML = () => {

rowProduct.innerHTML = '';    
let total = 0;
let totalOfProducts = 0;
allProducts.forEach(product =>{

    const containerProduct  = document.createElement('div');
    containerProduct.classList.add('agregar-carrito')

    containerProduct.innerHTML = `

    <div class="platillo">
    <span class="cantidad-producto-carrito">${product.quantity}</</span>
    <img src="${product.imagen}">
    <h3>${product.titulo}</h3>

    <p class="precio">${product.precio}</p>
    <a href="#" class="borrar" >X</a>
    
  
   </div>
    `
    rowProduct.append(containerProduct);

    total = total + parseFloat(product.quantity * product.precio.slice(1));
    totalOfProducts = totalOfProducts + product.quantity;
});

valorTotal.innerText = `$${total}00`;
countProducts.innerText = totalOfProducts;

};