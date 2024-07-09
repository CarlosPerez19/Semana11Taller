// Cambiar estilos de párrafos
function cambiarEstilosParrafos() {
    let parrafos = document.querySelectorAll('p');
    parrafos.forEach(parrafo => {
        parrafo.classList.toggle('parrafo-estilo');
    });
}

// Estilizar párrafos pares
function estilizarPares() {
    let parrafos = document.querySelectorAll('p:nth-child(even)');
    parrafos.forEach(parrafo => {
        parrafo.classList.toggle('par');
    });
}

// Estilizar párrafos impares
function estilizarImpares() {
    let parrafos = document.querySelectorAll('p:nth-child(odd)');
    parrafos.forEach(parrafo => {
        parrafo.classList.toggle('impar');
    });
}

// Mostrar imágenes
function mostrarImagenes() {
    let divImagenes = document.getElementById('divImagenes');
    divImagenes.innerHTML = `
        <img src="imagen1.jpg" alt="Imagen 1">
        <img src="imagen2.jpg" alt="Imagen 2">
        <img src="imagen3.jpg" alt="Imagen 3">
    `;
}

// Ocultar imágenes
function ocultarImagenes() {
    let divImagenes = document.getElementById('divImagenes');
    divImagenes.innerHTML = '';
}

// Cambiar fondo de página
function cambiarFondo() {
    document.body.classList.toggle('fondo-pagina');
}

// Cambiar colores de títulos
function cambiarColoresTitulos() {
    let titulos = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    titulos.forEach(titulo => {
        titulo.style.color = 'blue';
    });
}

// Validar formulario
function validarFormulario() {
    let nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellido').value;
    let edad = document.getElementById('edad').value;
    let correo = document.getElementById('correo').value;
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = '';

    if (!nombre || !apellido || !edad || !correo) {
        alert('Por favor, complete todos los campos.');
        return false;
    }

    if (edad < 18) {
        alert('Debe ser mayor de 18 años.');
        return false;
    }

    resultado.innerHTML = `Nombre: ${nombre} <br> Apellido: ${apellido}`;
    return false;
}
