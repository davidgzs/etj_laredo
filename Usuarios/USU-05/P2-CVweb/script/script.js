// Seleccionar  imagen por su ID
const imagen = document.getElementById('miImagen');

// rutas de las imágenes
const imagenOriginal = 'fotop.png';
const imagenNueva = 'imagen2.jpg';

// Agrega evento para cambiar la imagen cuando el ratón pasa sobre ella
imagen.addEventListener('mouseover', function() {
    imagen.src = imagenNueva;
});

// Agrega evento para restaurar la imagen original cuando el ratón sale de ella
imagen.addEventListener('mouseout', function() {
    imagen.src = imagenOriginal;
});
