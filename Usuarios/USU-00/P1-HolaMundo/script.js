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
<<<<<<< HEAD
    document.getElementById('nombre').value = 'Román';
=======
    document.getElementById('nombre').value = 'LUISMI';
>>>>>>> 40ed7e494f70ef95c738f326a6f613cd31328938
    document.getElementById('saludoPersonal').innerHTML = '';
    let numPulsaciones = 0;
    document.getElementById("resultado").textContent =
        "RESULTADO: " + numPulsaciones;
}