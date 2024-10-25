# Encriptador de Textos

## Descripción

Este es un encriptador de textos desarrollado principalmente en JavaScript, con apoyo de HTML y CSS para la estructura y el estilo. El programa permite encriptar y desencriptar mensajes de texto utilizando un algoritmo simple de sustitución de caracteres. Además, incluye una interfaz de usuario amigable que facilita la interacción.

## Características

- **Conversión Automática**: Convierte automáticamente el texto ingresado a minúsculas.
- **Validación de Entrada**: Solo permite letras minúsculas y espacios.
- **Encriptación**: Encripta el texto reemplazando las vocales con secuencias específicas.
- **Desencriptación**: Desencripta el texto reemplazando las secuencias específicas con las vocales originales.
- **Copiar al Portapapeles**: Permite copiar el texto encriptado o desencriptado al portapapeles.

## Tecnologías Utilizadas

- **JavaScript**: Lógica de encriptación y desencriptación, validación y manejo de eventos.
- **HTML**: Estructura de la página web.
- **CSS**: Estilos y diseño de la interfaz de usuario.

## Instrucciones de Uso

1. Clona este repositorio.
    ```sh
    git clone https://github.com/Nerug-Programador/EncriptadorDeTexto.git
    ```
2. Navega al directorio del proyecto.
    ```sh
    cd encriptador-de-textos
    ```
3. Abre el archivo `index.html` en tu navegador web.

## Requisitos

    Un navegador web moderno (Google Chrome, Mozilla Firefox, Microsoft Edge, etc.).

    Conexión a Internet (para clonar el repositorio desde GitHub).

## Autor

    William German Aranguren Buitrago - Tu GitHub

## Licencia

    Este proyecto no tiene una licencia específica.

## Ejemplo de Uso

1. Ingresa el texto que deseas encriptar en el área de texto.
2. Haz clic en el botón "Encriptar" para encriptar el texto.
3. El texto encriptado aparecerá en la sección de mensajes.
4. Para desencriptar, ingresa el texto encriptado en el área de texto y haz clic en "Desencriptar".
5. El texto desencriptado aparecerá en la sección de mensajes.
6. Puedes copiar el texto encriptado o desencriptado al portapapeles haciendo clic en el botón "Copiar".

## Código Fuente

### JavaScript

```javascript
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
