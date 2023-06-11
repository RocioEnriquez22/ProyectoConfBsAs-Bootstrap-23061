const valorTicket=200;
let descEstudiante=80;
let descJunior=15;
let descTrainee=50;

let nombre= document.getElementById("fCompNombre");
let apellido= document.getElementById("fCompApellido");
let email = document.getElementById("emailCompra");
let cantidadTicket =document.getElementById("cantidadTickets"); 
let categoriaCompra =document.getElementById("categoriaSelector");
let totalPago= document.getElementById("resultsCalc");

let divMsgErrorNombre= document.getElementById("msgErrorNombre");
let divMsgErrorApellido= document.getElementById("msgErrorApellido");
let divMsgErrorEmail= document.getElementById("msgErrorEmail");
let divMsgErrorCantidad= document.getElementById("msgErrorCantidadTickets");
let divMsgErrorCategoria= document.getElementById("msgErrorCategoria");

/**Botones */
let botonResumen = document.getElementById("botonResumen");
let botonBorrar = document.getElementById("botonBorrar");

const quitarClaseError = () => {
    let listaNodos= document.querySelectorAll(".form-control , .formSelect");
    for(let i=0; i< listaNodos.length; i++){
        listaNodos[i].classList.remove('is-invalid');
    }
    let listaNodosDiv = document.querySelectorAll(".invalid-feedback");
    for(let i=0; i< listaNodosDiv.length; i++){
        listaNodosDiv[i].classList.remove('propia');
    }
}

const resumen = () =>{
    quitarClaseError();

    if(nombre.value ===""){
        nombre.classList.add("is-invalid");
        divMsgErrorNombre.classList.add("propia");
        nombre.focus();
        return;
    }
    if(apellido.value ===""){
        apellido.classList.add("is-invalid");
        apellido
        divMsgErrorApellido.classList.add("propia");
        apellido.focus();
        return;
    }
    if(email.value ===""){
        email.classList.add("is-invalid");
        divMsgErrorEmail.classList.add("propia");
        email.focus();
        return;
    }

    const emailValido = (mail) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail); 
    }

    if(!emailValido(email.value)){
        email.classList.add("is-invalid");
        divMsgErrorEmail.classList.add("propia");
        email.focus();
        return;
    }

    if(cantidadTicket==0 || isNaN(cantidadTicket.value)){
        cantidadTicket.classList.add("is-invalid");
        divMsgErrorCantidad.classList.add("propia");
        cantidadTicket.focus();
        return;
    }
    if(categoriaCompra.value === ""){
        categoriaCompra.classList.add("is-invalid");
        divMsgErrorCategoria.classList.add("propia");
        categoriaCompra.focus();
        return;
    }

    let totalCompra = (cantidadTicket.value) * valorTicket;

    switch(categoriaCompra.value){
        case "0":
            break;
        case "1":
            totalCompra-=(descEstudiante*totalCompra)/100; 
            break;
        case "2":
            totalCompra-=(descTrainee*totalCompra)/100;
            break;
        case "3":
            totalCompra-=(descJunior*totalCompra)/100;
            break;
    }

    totalPago.innerHTML= totalCompra;
}

const borrarInput = () =>{
   
    totalPago.innerHTML= "";
    quitarClaseError();
}

botonResumen.addEventListener("click", resumen);
botonBorrar.addEventListener("click", borrarInput);