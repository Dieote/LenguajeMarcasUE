function cargarFormulario() {
    fetch('formRegistro.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('mostrarForm').innerHTML = data;
            document.getElementById('mostrarForm').style.display = 'block';
        })
        .catch(error => console.error('Error cargando el formulario:', error));
}