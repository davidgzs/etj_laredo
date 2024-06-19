// BOTONES
const boton1= document.querySelector("button");
boton1.addEventListener("click", borrarTodo);


// Función para cargar el contenido de usuario
function loadUser(url) {
    document.getElementById('userDetailFrame').src = url;
}

function borrarTodo(){
    document.getElementById('userDetailFrame').src = '';
    // document.getElementById(".user-detail").reset();
}
