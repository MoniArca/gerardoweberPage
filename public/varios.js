function iniciarFormulario() {
    const form = document.getElementById('opcion'); // toma el formulario por id
    if (form) {
        form.addEventListener('submit', redireccionar); // asocia el evento 'submit' al formulario
    }
}

function redireccionar(event) {
    event.preventDefault(); // Prevenir que el formulario se envíe y la página se recargue
    const boton = event.submitter; // Obtener el botón que fue presionado

    if (boton.id === 'titulos') {
        window.location.href = '/titulos'; // Redirigir a una nueva página o URL
    } else if (boton.id === 'presentacion1.html') {
        window.location.href = '/publicaciones-internacionales';
    } else if (boton.id === 'publiEspecializada') {
        window.location.href = '/publicaciones-especializadas';
    }
}