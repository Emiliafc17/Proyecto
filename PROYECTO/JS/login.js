const user = document.getElementById ("UserName")
const password = document.getElementById ("password")
const login = document.getElementById ("form")

document.addEventListener("DOMContentLoaded", 
function() {
    document.getElementById("formulario").addEventListener('submit', validarFormulario); 
});
function validarFormulario(evento) {
    evento.preventDefault();
    this.submit();
}


