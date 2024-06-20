document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario

    // Obtén los valores del formulario
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;

    // Crea un objeto con la información del usuario
    const userData = {
        name,
        age,
        email,
        gender
    };

    // Guarda la información en localStorage
    localStorage.setItem('userData', JSON.stringify(userData));

    // Muestra un mensaje de éxito (opcional)
    alert('Información registrada exitosamente');

    // Limpia el formulario (opcional)
    document.getElementById('userForm').reset();
});
