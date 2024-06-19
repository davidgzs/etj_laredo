function mostrarNombre() {
    let nombre = prompt("Introduce tu nombre:");
    if (nombre) {
        document.getElementById("saludo").innerHTML = "Bienvenido, " + nombre;
    }
}