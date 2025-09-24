// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// ========================================
// Paso 1: Crear un array para almacenar los nombres
// ========================================
let amigos = [];


// ========================================
// Paso 2: Función para agregar amigos
// ========================================
function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim(); // quitamos espacios innecesarios

    // Validar entrada vacía
    if (nombre === "") {
        alert("Por favor, inserte un nombre."); // texto según consigna
        return;
    }

    // Agregar al array
    amigos.push(nombre);

    // Actualizar lista visible en pantalla
    actualizarLista();

    // Limpiar el campo de texto
    input.value = "";
}


// ========================================
// Paso 3: Función para actualizar la lista de amigos
// ========================================
function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // limpiar lista antes de mostrar de nuevo

    // Recorrer el array amigos
    amigos.forEach((amigo) => {
        let li = document.createElement("li"); // crear <li>
        li.textContent = amigo;               // agregar texto
        lista.appendChild(li);                // añadir al <ul>
    });
}


// ========================================
// Paso 4: Función para sortear los amigos
// ========================================
function sortearAmigo() {
    // Validar que haya amigos cargados
    if (amigos.length === 0) {
        alert("No hay nombres en la lista.");
        return;
    }

    // Generar índice aleatorio
    let indice = Math.floor(Math.random() * amigos.length);
    let elegido = amigos[indice];

    // Mostrar resultado en el HTML
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>🎉 Tu amigo secreto es: <strong>${elegido}</strong></li>`;
}