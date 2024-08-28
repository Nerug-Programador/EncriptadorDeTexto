// Función para convertir el texto a minúsculas
function convertirMinusculas() {
    const textarea = document.getElementById("texto-entrada");
    textarea.value = textarea.value.toLowerCase();
}

// Función para alternar la visibilidad de los elementos
function alternarContenido() {
    const imagen = document.querySelector('.message-section__img');
    const contenidoAntes = document.querySelector('.message-section__content');
    const contenidoDespues = document.querySelector('.message-section__encrypt__or__decrypt');
    const botonCopiar = document.getElementById('copiarBtn');

    imagen.style.display = 'none';
    contenidoAntes.style.display = 'none';
    contenidoDespues.style.display = 'flex';
    botonCopiar.style.display = "block";
}

// Función para validar el texto ingresado
function validarTexto(event) {
    const textarea = document.getElementById("texto-entrada");
    const texto = textarea.value;
    const regex = /^[a-z\s]*$/;

    if (!regex.test(texto)) {
        textarea.value = texto.replace(/[^a-z\s]/g, '');
        alert("Solo se permiten letras minúsculas y espacios.");
    }
}

// Función para verificar si hay contenido encriptado antes de habilitar el botón de copiar
function verificarContenidoP() {
    const textoEncriptado = document.getElementById("textoEncriptado").innerText;
    const copiarBtn = document.getElementById("copiarBtn");
    copiarBtn.disabled = textoEncriptado.trim() === "";
}

// Función para procesar el texto (encriptar o desencriptar)
function procesarTexto(accion) {
    const texto = document.getElementById("texto-entrada").value;
    let resultado;

    switch (accion) {
        case 'encriptar':
            resultado = texto
                .replace(/e/g, "enter")
                .replace(/i/g, "imes")
                .replace(/a/g, "ai")
                .replace(/o/g, "ober")
                .replace(/u/g, "ufat");
            break;
        case 'desencriptar':
            resultado = texto
                .replace(/enter/g, "e")
                .replace(/imes/g, "i")
                .replace(/ai/g, "a")
                .replace(/ober/g, "o")
                .replace(/ufat/g, "u");
            break;
        default:
            console.error("Acción no válida.");
            return;
    }

    // Insertar el resultado en la etiqueta <p>
    const textoEncriptadoElement = document.getElementById("textoEncriptado");
    textoEncriptadoElement.innerText = resultado;

    // Alternar la visibilidad
    alternarContenido();
    verificarContenidoP();
}

// Función para copiar el texto encriptado al portapapeles
async function copiarTexto() {
    const texto = document.getElementById("textoEncriptado").innerText;

    try {
        await navigator.clipboard.writeText(texto);
    } catch (err) {
        console.error("Error al copiar el texto: ", err);
    }
}
