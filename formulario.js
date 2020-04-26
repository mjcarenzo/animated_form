var inputNombre = document.getElementById("nombre");
var labelNombre = document.getElementById("labelNombre");

var inputEmail = document.getElementById("email");
var labelEmail = document.getElementById("labelEmail");

var inputTel = document.getElementById("tel");
var labelTel = document.getElementById("labelTel");

var inputMsj = document.getElementById("mensaje");
var labelMsj = document.getElementById("labelMensaje");

var myArrInputs = [inputNombre, inputEmail, inputTel, inputMsj];
var myArrLabel = [labelNombre, labelEmail, labelTel, labelMsj];

function validarInput() {
    for (let i = 0; i < myArrInputs.length; i++) {
        if (myArrInputs[i].value !== '') {
            myArrLabel[i].classList.add('activo');
        } else {
            myArrLabel[i].classList.remove('activo');
        }
    }
}

inputNombre.addEventListener('blur', validarInput);
inputEmail.addEventListener('blur', validarInput);
inputTel.addEventListener('blur', validarInput);
inputMsj.addEventListener('blur', validarInput);