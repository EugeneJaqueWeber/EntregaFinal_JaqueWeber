function loginUp(password, eMail) {

    nameUser = document.getElementById ("nameRegistered").value;

    password = document.getElementById ("passwordRegistered").value;
    eMail = document.getElementById ("e-mailRegistered").value;


    const validacionEMail = eMail.search ("@")
    const validacionContraseña = password.length >=8

    console.log (validacionEMail)
    console.log (validacionContraseña)


    if ( ( validacionContraseña == true ) && ( validacionEMail != -1 ) ) {

        localStorage.setItem ('Bienvenido/a, tu usuario es:',nameUser)

        localStorage.setItem ('tu cuenta es:',eMail)
        localStorage.setItem ('tu contraseña es:', password)

        console.log ("datos correctos")

        signUpButton.classList.add('move');
  
    } else {
  
        console.log ("hubo un error al iniciar sesion")
  
    }
  

}



function loginIn (password, eMail) {

    password = document.getElementById ("passwordRegistered").value;
    eMail = document.getElementById ("e-mailRegistered").value;

    if ( (password === "") && (eMail === "") ) {

        console.log ("datos no encontrados")

    } else {

        console.log ("datos encontrados")

        window.location = "../pages/login.html"

    }

}

// let valorTrueFalse = localStorage.getItem ('valor:')

// const eventValidar = (res) => {

//     return new Promise ( (resolve, reject) => {

//         if ( res === true ) {

//             console.log ("valido")

//             let numero = 10

//             localStorage.setItem ('valorFinal', numero)
            
//             resolve ('promesa resuelta')

         

//         } else {

//             reject ('promesa rechazada')

//             console.log ("no valido")

//             let numero = 5

//             localStorage.setItem ('valorFinal', numero)


//         }

//     }
//     )

// }


// console.log (eventValidar(valorTrueFalse))

// localStorage.removeItem('valorFinal');

// let valorFinal = localStorage.getItem ('valorFinal')


// function loginIn (final) {

//     console.log (final)

// }

// console.log (loginIn(valorFinal))

// console.log (loginIn(valorTrueFalse))

// let contraseñaValidada = localStorage.getItem ('contraseñaValido')


// function loginIn (validarContraseña, validarEmail) {

//     return new Promise ( (resolve, reject) => {

//         if ( ( validarContraseña == true ) && ( validarEmail != -1 ) ) {

//             resolve ("datos encontrados")

//         } else {

//             reject ("datos no encontrados")

//         }

//     }

//     )

// }


// console.log (loginIn(eMailValidado))



let logInEmail = localStorage.getItem ('tu cuenta es:')
let logInPassword = localStorage.getItem ('tu contraseña es:')

function logInFinal (logInCuenta, logInContraseña) {

    logInCuenta = document.getElementById ("e-mailLogin").value
    logInContraseña = document.getElementById ("passwordLogin").value

    if ( logInEmail === logInCuenta && logInPassword === logInContraseña ) {

        console.log ("bienvenido a la pagina")

        window.location = "../pages/principal.html"



    } else {

        console.log ("hubo un error")

    }

}





const busquedaPrincipal = document.querySelector("busquedaPrincipal")
const botonSubida = document.querySelector("botonSubida")
const divInfo = document.querySelector("divInfo")

// botonSubida.addEventListener ( 'click', (e) => {

//     e.preventDefault()
//     traerInfo(input.value)
// }



// )

let identificador = document.querySelector ('#identificador')
function traerPerfil () {

    fetch ('https://randomuser.me/api/')
    .then ( res=> res.json ())
    .then (

        data => {

            console.log (data.results['0'])
            identificador.innerHTML = `
            
            <img src="${data.results['0'].picture.medium}" alt="" class="img.fluid">
            <p>Nombre: ${data.results['0'].name.last}</p>

            `

        }

    )

}