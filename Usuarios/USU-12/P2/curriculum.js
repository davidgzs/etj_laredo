function changeImage() {
    const image = document.getElementById('image');
    if (image.src.includes('imagen1.jpg')) {
        image.src = 'imagen.png';
    } else {
        image.src = 'imagen1.jpg';
    }
}