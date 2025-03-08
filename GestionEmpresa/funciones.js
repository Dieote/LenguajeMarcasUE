function cargarFormulario() {
    fetch('formRegistro.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('mostrarForm').innerHTML = data;
            document.getElementById('mostrarForm').style.display = 'block';
        })
        .catch(error => console.error('Error cargando el formulario:', error));
}

function accionesForm() {
    const tipoEmpleado = document.getElementById("tipo").value;
        const accionesDiv = document.getElementById("accionesDiv");

        if (tipoEmpleado === "jefe") {
            accionesDiv.style.display = "block"; // Muestra el campo si es Jefe
        } else {
            accionesDiv.style.display = "none"; // Oculta el campo si no es Jefe
        }
}