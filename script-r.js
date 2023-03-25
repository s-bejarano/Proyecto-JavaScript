Swal.fire({
    imageUrl: './Multimedia/reservas.png',
    icon: '' ,
    title: 'Tipos de mesas para reserva',
    text: 'Recuerde esta imagen al momento de su eleccion',
})
//VALIDACION FORMULARIO DE RESERVA
document.querySelector('#form-r').addEventListener('submit', (e)=> {

    e.preventDefault();
    
    const nombre_r = document.getElementById('nombre-r').value
    const email_r = document.getElementById('email-r').value
    const numero_r = document.getElementById('numero-r').value
    const adultos_r = document.getElementById('adultos-r').value
    const niños_r = document.getElementById('niños-r').value
    const mesa_r = document.getElementById('mesa-r').value
    const fecha_r = document.getElementById('fecha-r').value
    const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    const textov = /^[A-Z]+$/i
    const numer = /[0-9]+/
    const formu = document.getElementById('form-r')
    
    if (nombre_r.length === 0) {

       // alert("por favor ingrese un nombre");
        
        Swal.fire({
            imageUrl: './Multimedia/warning-icon.jpg',
            icon: '' ,
            title: 'Oops...',
            text: 'Ingrese un nombre',
        })
       
        document.getElementById('nombre-r').focus()
    } else if (!textov.test(nombre_r)) {
        Swal.fire({
            imageUrl: './Multimedia/warning-icon.jpg',
            icon: '' ,
            title: 'Oops...',
            text: 'Ingrese el nombre sin numeros',
        })
     //   alert("por favor ingrese un nombre sin numeros");
    }
    else if (!regexEmail.test(email_r)) {
        Swal.fire({
            imageUrl: './Multimedia/warning-icon.jpg',
            icon: '' ,
            title: 'Oops...',
            text: 'El email no es valido',
        })
    
        document.getElementById('email-r').focus()

    } else if (numero_r.length === 0) {
        Swal.fire({
            imageUrl: './Multimedia/warning-icon.jpg',
            icon: '' ,
            title: 'Oops...',
            text: 'Por favor ingrese el numero',
        })

    } else if (!numer.test(numero_r)) {
        Swal.fire({
            imageUrl: './Multimedia/warning-icon.jpg',
            icon: '' ,
            title: 'Oops...',
            text: 'Por favor ingrese solo numeros',
        })
     
        document.getElementById('numero-r').focus()
    } else if (adultos_r.length === 0) {
        Swal.fire({
            imageUrl: './Multimedia/warning-icon.jpg',
            icon: '' ,
            title: 'Oops...',
            text: 'Por favor ingrese el numero de adultos',
        })
     
      
        document.getElementById('adultos-r').focus()

    } else if (niños_r.length === 0) {
        Swal.fire({
            imageUrl: './Multimedia/warning-icon.jpg',
            icon: '' ,
            title: 'Oops...',
            text: 'Por favor ingrese el numero de niños',
        })
     
   
        document.getElementById('niños-r').focus()

    } else if(mesa_r.length === 0) {
        Swal.fire({
            imageUrl: './Multimedia/warning-icon.jpg',
            icon: '' ,
            title: 'Oops...',
            text: 'Por favor selecione un tipo de mesa',
        })
     
       
        document.getElementById('mesa-r').focus()

    } else  {
        Swal.fire({
            imageUrl: './Multimedia/Exitoso.png',
          
            text: 'Datos enviados',
        })
       
        formu.reset();
    }
    

   
    })



    //FUNCION VALIDAR FORMULARIO DE CONTACTO


document.querySelector('#form-c').addEventListener('submit', (e) => {

    e.preventDefault();
    const nombre = document.getElementById('name').value
    const email = document.getElementById('email').value
    const area = document.getElementById('area').value
    const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    const formu_c = document.getElementById('form')
    const textov = /^[A-Z]+$/i
    /*
    e.target.elements.name.value = "";
    e.target.elements.email.value = "";
    e.target.elements.area.value = "";
    */
    if (nombre.length === 0) {
        Swal.fire({
            imageUrl: './Multimedia/warning-icon.jpg',
            icon: '' ,
            title: 'Oops...',
            text: 'Por favor ingrese un nombre',
        })
   
        document.getElementById('name').focus()
    } else if (!textov.test(nombre)) {
        Swal.fire({
            imageUrl: './Multimedia/warning-icon.jpg',
            icon: '' ,
            title: 'Oops...',
            text: 'Por favor ingrese un nombre sin numeros',
        })
        document.getElementById('name').focus()
    }
    else if (!regexEmail.test(email)) {
        Swal.fire({
            imageUrl: './Multimedia/warning-icon.jpg',
            icon: '' ,
            title: 'Oops...',
            text: 'El email no es valido',
        })
        
        document.getElementById('email').focus()

    } else if (area.length === 0) {
        Swal.fire({
            imageUrl: './Multimedia/warning-icon.jpg',
            icon: '' ,
            title: 'Oops...',
            text: 'Por favor ingrese su mensaje',
        })
       
        document.getElementById('area').focus()
    } else {
        
        Swal.fire({
            imageUrl: './Multimedia/Exitoso.png',
          
            text: 'Datos enviados',
        })
        formu_c.reset();
    }

});

/* var c = document.getElementById("myCanvas");

var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(45, 90, 15, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.arc(45, 30, 15, 0, 2 * Math.PI);
ctx.stroke();

//mesa

ctx.beginPath();
ctx.arc(125, 60, 45, 0, 2 * Math.PI);
ctx.stroke();

//sillas

ctx.beginPath();
ctx.arc(205, 30, 15, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.arc(205, 90, 15, 0, 2 * Math.PI);
ctx.stroke();




//lineas
var ctx = c.getContext("2d");
ctx.moveTo(270, 0);
ctx.lineTo(270, 150);
ctx.stroke();


var ctx = c.getContext("2d");
ctx.moveTo(270, 400);
ctx.lineTo(270, 290)
ctx.stroke();



//sillas y mesa

ctx.beginPath();
ctx.arc(45, 340, 15, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.arc(125, 340, 45, 0, 2 * Math.PI);
ctx.stroke();

var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(200, 340, 15, 0, 2 * Math.PI);
ctx.stroke();



//mesa
var ctx = c.getContext("2d");
ctx.moveTo(380, 50);
ctx.lineTo(380, 120);
ctx.stroke();

var ctx = c.getContext("2d");
ctx.moveTo(680, 50);
ctx.lineTo(680, 120);
ctx.stroke();

var ctx = c.getContext("2d");
ctx.moveTo(380, 120);
ctx.lineTo(680, 120);
ctx.stroke();

var ctx = c.getContext("2d");
ctx.moveTo(380, 50);
ctx.lineTo(680, 50);
ctx.stroke();
//sillas de mesa cuadrada
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(350, 90, 15, 0, 2 * Math.PI);
ctx.stroke();


var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(705, 90, 15, 0, 2 * Math.PI);
ctx.stroke();


var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(415, 25, 15, 0, 2 * Math.PI);
ctx.stroke();

//silla centro
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(535, 25, 15, 0, 2 * Math.PI);
ctx.stroke();

var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(650, 25, 15, 0, 2 * Math.PI);
ctx.stroke();

//silla centro
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(535, 145, 15, 0, 2 * Math.PI);
ctx.stroke();

var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(415, 145, 15, 0, 2 * Math.PI);
ctx.stroke();

var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(655, 145, 15, 0, 2 * Math.PI);
ctx.stroke();*/

