let numPulsaciones = 0;

function boton1Pulsado() {
    const nombre = document.getElementById('nombre').value;
    /*alert('¡¡HOLA ' + nombre + '!!');*/
    document.getElementById('saludoPersonal').innerHTML = '¡¡HOLA <span class="bold">' + nombre + '</span>!!';
}

function boton2Pulsado() {
    numPulsaciones = numPulsaciones + 1;
    /*
    document.getElementById("resultado").textContent =
        "Botón2 pulsado " + numPulsaciones + " veces.";
    */
    document.getElementById("resultado").textContent =
        "RESULTADO: " + numPulsaciones;
}

function resetear() {
    document.getElementById('nombre').value = 'DAVID';
    document.getElementById('saludoPersonal').innerHTML = '';
    let numPulsaciones = 0;
    document.getElementById("resultado").textContent =
        "RESULTADO: " + numPulsaciones;
}