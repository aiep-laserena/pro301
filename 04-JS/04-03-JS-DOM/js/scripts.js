// Seleccionar elementos...

// querySelector

const textoHeading = document.querySelector(".header__texto h2");
console.log(textoHeading);

textoHeading.textContent = "Nuevo Heading"; // También se puede utilizar .text

// querySelectorAll
const enlaces = document.querySelectorAll(".navegacion a");
console.log(enlaces);

// Algunas operaciones...

// Cambiar el texto
enlaces[0].textContent = "Nuevo Texto enlace";

// Cambiar el enlace del primer enlace
enlaces[0].href = "google.com";

// Agregar una clase...
enlaces[0].classList.add("nueva-clase");

// Eliminar una clase...
// enlaces[0].classList.remove('navegacion__enlace');

// Generar HTML desde JavaScript...
const nuevoEnlace = document.createElement("A");

console.log(nuevoEnlace);

// Un enlace tiene una clase...
nuevoEnlace.classList.add("navegacion__enlace");

// Tiene un href
nuevoEnlace.href = "nuevo-enlace.html";

// Tiene un Texto...
nuevoEnlace.textContent = "Un Nuevo Enlace";

// console.log(nuevoEnlace);

// Finalmente se agrega donde lo deseamos colocar...

// Tienes que seleccionar el elemento padre

const navegacion = document.querySelector(".navegacion");
navegacion.appendChild(nuevoEnlace);

// Eventos en JavaScript...

// Hay muchos eventos ocurriendo en tus sitios y aplicaciones web, cuando un usuario da click, cuando dan scroll, al presionar en un botón, enviar un formulario, pero uno de los más comunes es esperar a que el documento este listo...

console.log("1");
window.addEventListener("load", function () {
  // Cuando el Archivo JS y los archivos dependientes han cargado como es el HTML y las imagenes...
  console.log("2");
});

window.onload = function () {
  console.log("3");
};

document.addEventListener("DOMContentLoaded", function () {
  // Este se ejecuta cuando el HTML ha sido descargado pero no espera por CSS o imagenes...
  console.log("4");
});

console.log("5");

// Estos closures también pueden ser con una función aparte...

// // Eventos Scroll...
// window.onscroll = function(e) {
//     console.log('scrolling...');

//     console.log(this.scrollY);
// }

// Eventos con Click y submit...

// const btnEnviar = document.querySelector('.formulario input[type=submit]');
// console.log(btnEnviar);

// btnEnviar.addEventListener('click', function() { // callback o closure
//     console.log('click');
// });

const datos = {
  nombre: "",
  email: "",
  mensaje: "",
};

// submit
const formulario = document.querySelector(".formulario");

formulario.addEventListener("submit", function (e) {
  e.preventDefault();

  console.log(e);

  console.log("Di click y la página ya no recarga");

  console.log(datos);

  // Validar el Formulario...

  const { nombre, email, mensaje } = datos;

  if (nombre === "" || email === "" || mensaje === "") {
    console.log("Al menos un campo esta vacio");
    mostrarError("Todos los campos son obligatorios");
    return; // Detiene la ejecución de esta función
  }

  console.log("Todo bien...");

  mostrarMensaje("Mensaje enviado correctamente");
});

function mostrarError(mensaje) {
  const alerta = document.createElement("p");
  alerta.textContent = mensaje;
  alerta.classList.add("error");

  formulario.appendChild(alerta);

  setTimeout(() => {
    alerta.remove();
  }, 3000);
}

function mostrarMensaje(mensaje) {
  const alerta = document.createElement("p");
  alerta.textContent = mensaje;
  alerta.classList.add("correcto");
  formulario.appendChild(alerta);

  setTimeout(() => {
    alerta.remove();
  }, 3000);
}

// Eventos de los Inputs...
const nombre = document.querySelector("#nombre");
const email = document.querySelector("#email");
const mensaje = document.querySelector("#mensaje");

nombre.addEventListener("input", leerTexto);
email.addEventListener("input", leerTexto);
mensaje.addEventListener("input", leerTexto);

function leerTexto(e) {
  // console.log(e);
  // console.log(e.target.value);

  datos[e.target.id] = e.target.value;

  console.log(datos);
}
