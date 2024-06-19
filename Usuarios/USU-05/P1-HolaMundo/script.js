let numPulsaciones = 0;

function boton1Pulsado() {
    const nombre = document.getElementById('nombre').value;
    document.getElementById('saludoPersonal').innerHTML = '¡¡HOLA <span class="bold">' + nombre + '</span>!!';
}

function boton2Pulsado() {
    numPulsaciones = numPulsaciones + 1;

    document.getElementById("resultado").textContent =
        "RESULTADO: " + numPulsaciones;
}

function resetear() {
    document.getElementById('nombre').value = 'Jonathan';
    document.getElementById('saludoPersonal').innerHTML = '';
    let numPulsaciones = 0;
    document.getElementById("resultado").textContent =
        "RESULTADO: " + numPulsaciones;
}