
const nombre = document.getElementById("RegistroNombre")
const cedula = document.getElementById("RegistroCedula")
const email = document.getElementById("Registroemail")
const password = document.getElementById("password")
const confpassword = document.getElementById("confpassword")
const form = document.getElementById("formulario")

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formulario").addEventListener('submit', validarFormulario); 
    });

function validarFormulario(evento) {
    evento.preventDefault();
    if (password.value != confpassword.value){
        alert('Las contraseñas no coinciden')
        return;
    }
    this.submit();
}

