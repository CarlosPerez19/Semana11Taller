document.addEventListener('DOMContentLoaded', function () {
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
        let divImagenes = document.getElementById('imagenesContainer');
        divImagenes.innerHTML = `
            <img src="img/Genshin Impact.jpg" alt="Imagen 1" class="imagen-visible">
            <img src="img/Osu.jpg" alt="Imagen 2" class="imagen-visible">
            <img src="img/lfd2.jpg" alt="Imagen 3" class="imagen-visible">
        `;
    }

    // Ocultar imágenes
    function ocultarImagenes() {
        let divImagenes = document.getElementById('imagenesContainer');
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
    function validarFormulario(event) {
        event.preventDefault();
        let nombre = document.getElementById('nombre').value;
        let apellido = document.getElementById('apellido').value;
        let edad = document.getElementById('edad').value;
        let correo = document.getElementById('correo').value;
        let resultado = document.getElementById('resultadoFormulario');
        resultado.innerHTML = '';

        if (!nombre || !apellido || !edad || !correo) {
            alert('Por favor, complete todos los campos.');
            return false;
        }

        let mensajeEdad;
        if (edad < 18) {
            mensajeEdad = 'Menor de 18 años';
            alert('Formulario enviado correctamente.');
        } else {
            mensajeEdad = 'Mayor de 18 años';
            alert('Formulario enviado correctamente.');
        }

        resultado.innerHTML = `Nombre: ${nombre} <br> Apellido: ${apellido} <br><br> Edad: ${edad}<br>(${mensajeEdad}) <br><br> Correo: <br> ${correo}`;
        return false;
    }

    // Asignar eventos a los botones
    document.getElementById('formulario').addEventListener('submit', validarFormulario);
    window.cambiarEstilosParrafos = cambiarEstilosParrafos;
    window.estilizarPares = estilizarPares;
    window.estilizarImpares = estilizarImpares;
    window.mostrarImagenes = mostrarImagenes;
    window.ocultarImagenes = ocultarImagenes;
    window.cambiarFondo = cambiarFondo;
    window.cambiarColoresTitulos = cambiarColoresTitulos;
});
