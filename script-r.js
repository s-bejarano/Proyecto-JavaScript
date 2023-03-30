Swal.fire({
    imageUrl: './Multimedia/reservas.png',
    icon: '',
    title: 'Tipos de mesas para reserva',
    text: 'Recuerde esta imagen al momento de su eleccion',
})
//VALIDACION FORMULARIO DE RESERVA
document.querySelector('#form-r').addEventListener('submit', (e) => {

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
            icon: '',
            title: 'Oops...',
            text: 'Ingrese un nombre',
        })

        document.getElementById('nombre-r').focus()
    } else if (!textov.test(nombre_r)) {
        Swal.fire({
            imageUrl: './Multimedia/warning-icon.jpg',
            icon: '',
            title: 'Oops...',
            text: 'Ingrese el nombre sin numeros',
        })
        //   alert("por favor ingrese un nombre sin numeros");
    }
    else if (!regexEmail.test(email_r)) {
        Swal.fire({
            imageUrl: './Multimedia/warning-icon.jpg',
            icon: '',
            title: 'Oops...',
            text: 'El email no es valido',
        })

        document.getElementById('email-r').focus()

    } else if (numero_r.length === 0) {
        Swal.fire({
            imageUrl: './Multimedia/warning-icon.jpg',
            icon: '',
            title: 'Oops...',
            text: 'Por favor ingrese el numero',
        })

    } else if (!numer.test(numero_r)) {
        Swal.fire({
            imageUrl: './Multimedia/warning-icon.jpg',
            icon: '',
            title: 'Oops...',
            text: 'Por favor ingrese solo numeros',
        })

        document.getElementById('numero-r').focus()
    } else if (adultos_r.length === 0) {
        Swal.fire({
            imageUrl: './Multimedia/warning-icon.jpg',
            icon: '',
            title: 'Oops...',
            text: 'Por favor ingrese el numero de adultos',
        })


        document.getElementById('adultos-r').focus()

    } else if (niños_r.length === 0) {
        Swal.fire({
            imageUrl: './Multimedia/warning-icon.jpg',
            icon: '',
            title: 'Oops...',
            text: 'Por favor ingrese el numero de niños',
        })


        document.getElementById('niños-r').focus()

    } else if (mesa_r.length === 0) {
        Swal.fire({
            imageUrl: './Multimedia/warning-icon.jpg',
            icon: '',
            title: 'Oops...',
            text: 'Por favor selecione un tipo de mesa',
        })


        document.getElementById('mesa-r').focus()

    } else {
        Swal.fire({
            imageUrl: './Multimedia/Exitoso.png',

            text: 'Datos enviados',
        })

        formu.reset();
    }



})



//IMPLEMENTACION DE API Y VALIDACIONES EN FORMULARIO
let form = document.getElementById("my-form");
async function handleSubmit(event) {



    event.preventDefault();
    let status = document.getElementById("my-form-status");
    let data = new FormData(event.target);

    const nombre = document.getElementById('name').value
    const email = document.getElementById('email').value
    const area = document.getElementById('area').value
    const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    const formu_c = document.getElementById('form')
    const textov = /^[A-Z]+$/i

    if (nombre.length === 0) {
        Swal.fire({
            imageUrl: './Multimedia/warning-icon.jpg',
            icon: '',
            title: 'Oops...',
            text: 'Por favor ingrese un nombre',
        })

        document.getElementById('name').focus()
    } else if (!textov.test(nombre)) {
        Swal.fire({
            imageUrl: './Multimedia/warning-icon.jpg',
            icon: '',
            title: 'Oops...',
            text: 'Por favor ingrese un nombre sin numeros,espacios o caracteres especiales',
        })
        document.getElementById('name').focus()
    }
    else if (!regexEmail.test(email)) {
        Swal.fire({
            imageUrl: './Multimedia/warning-icon.jpg',
            icon: '',
            title: 'Oops...',
            text: 'El email no es valido',
        })

        document.getElementById('email').focus()

    } else if (area.length === 0) {
        Swal.fire({
            imageUrl: './Multimedia/warning-icon.jpg',
            icon: '',
            title: 'Oops...',
            text: 'Por favor ingrese su mensaje',
        })

        document.getElementById('area').focus()
    } else {


        fetch(event.target.action, {
            method: form.method,
            body: data,
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            if (response.ok) {
                Swal.fire({
                    imageUrl: './Multimedia/Exitoso.png',

                    text: 'Datos enviados',
                })
                status.innerHTML = "Gracias por su envio!";
                form.reset()
            } else {
                response.json().then(data => {
                    if (Object.hasOwn(data, 'errors')) {
                        status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
                    } else {
                        status.innerHTML = "Oops! There was a problem submitting your form"
                    }
                })
            }
        }).catch(error => {

            status.innerHTML = "Oops! There was a problem submitting your form"
        });


    }


}

form.addEventListener("submit", handleSubmit)
