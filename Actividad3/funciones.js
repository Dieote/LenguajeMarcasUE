let mayusculaActiva = false;

function openTeclado() {
    document.getElementById('cajaTeclado').style.display = 'flex';
}

function closeTeclado() {
    document.getElementById('cajaTeclado').style.display = 'none';
}

/*document.addEventListener("DOMContentLoaded", function () {
    const input = document.getElementById("inputEscritura");

    // Letras
    document.querySelectorAll(".letra").forEach(btn => {
        btn.addEventListener("click", () => {
            let letra = btn.textContent;
            input.value += mayusculaActiva ? letra.toUpperCase() : letra;
        });
    });

    // Números y símbolos
    document.querySelectorAll(".numero, .simbolo").forEach(btn => {
        btn.addEventListener("click", () => {
            input.value += btn.textContent;
        });
    });

    // Borrar
    document.getElementById("borrar").addEventListener("click", () => {
        input.value = input.value.slice(0, -1);
    });

    // Espacio
    document.getElementById("espacio").addEventListener("click", () => {
        input.value += " ";
    });

    // Enter
    document.getElementById("enter").addEventListener("click", () => {
        input.value += "\n"; // o podrías enviar un form, según tu caso
    });

    // Mayúsculas
    document.getElementById("mayus").addEventListener("click", () => {
        mayusculaActiva = !mayusculaActiva;
        document.getElementById("mayus").style.backgroundColor = mayusculaActiva ? "#ccc" : "";
    });
});*/