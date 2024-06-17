function buttonClicked1() {
   alert("HOLA " + document.getElementById("nombre").textContent);
}

let numButtonClicks = 0;
function buttonClicked2() {
    numButtonClicks = numButtonClicks + 1;
    document.getElementById("resultado").textContent =
        "Botón pulsado " + numButtonClicks + " veces.";
}

function buttonReset() {
    numButtonClicks = 0;
    document.getElementById("resultado").textContent = "";
}
