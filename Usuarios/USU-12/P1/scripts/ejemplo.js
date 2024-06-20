// let nombreUsuario; //declaro la variable nombre
// nombreUsuario = "Estefi"; //asigno un valor a la variable nombre
// let edad;
// edad = 26;
// let telefono;
// telefono = 695958546;
// let direccion;
// direccion = "calle san lorenzo n4";
// const parrafoNombre = document.querySelector(".nombreUsuario");//declaro la variable y guardo en ella el selector de clase
// parrafoNombre.textContent = "El usuario es "+ nombreUsuario;
// const claseedad = document.querySelector(".edad");
// claseedad.textContent = "La edad es " + edad;
// const numero = document.querySelector(".telefono");
// numero.textContent = "El teléfono es " + telefono;
// const calle = document.querySelector(".direccion");
// calle.textContent = "La direccion es "+ direccion;

// let edad = prompt ("dime tu edad"); //declaro la variable edad y le signo el valor


let nombre; //declaro la variable
nombre = prompt("indroduzca nombre de usuario"); //asigno un valor a la variable
let edad = prompt ("Dime tu edad"); //declaro la variable edad y asigno un valor
const claseNombre = document.querySelector (".nombre");
claseNombre.textContent = "Bienvenido " + nombre; //declaro la variable y guardo el selector de clase.
const claseEdad= document.querySelector (".edad");
claseEdad.textContent = "La edad del usuario es " + edad;



