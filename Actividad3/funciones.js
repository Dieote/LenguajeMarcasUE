let mayusculaActiva = false;
let inputActivo = null;

function openTeclado() {
    document.getElementById('cajaTeclado').style.display = 'flex';
}

function closeTeclado() {
    document.getElementById('cajaTeclado').style.display = 'none';
}

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("input").forEach(input => {
        input.addEventListener("focus", () => {
            inputActivo = input;
            openTeclado();
        });
    });

    // Letras
    document.querySelectorAll(".letra").forEach(btn => {
        btn.addEventListener("click", () => {
            if (inputActivo){
                let letra = btn.textContent;
                inputActivo.value += mayusculaActiva ? letra.toUpperCase() : letra;
            }
        });
    });

    // Números y símbolos
    document.querySelectorAll(".numero, .simbolo").forEach(btn => {
        btn.addEventListener("click", () => {
            if (inputActivo){
                inputActivo.value += btn.textContent;
            }
        });
    });

    // Borrar
    document.getElementById("borrar").addEventListener("click", () => {
        if(inputActivo){
            inputActivo.value = inputActivo.value.slice(0, -1);
        }
    });

    // Espacio
    document.getElementById("espacio").addEventListener("click", () => {
        inputActivo.value += " ";
    });

    // Enter
    document.getElementById("enter").addEventListener("click", () => {
        inputActivo.value += "\n"; // o podrías enviar un form, según tu caso
    });

    // Mayúsculas
    document.getElementById("mayus").addEventListener("click", () => {
        mayusculaActiva = !mayusculaActiva;
        document.getElementById("mayus").style.backgroundColor = mayusculaActiva ? "#db43a9" : "";
    });
});