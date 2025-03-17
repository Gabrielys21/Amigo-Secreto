// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo
function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();
    if (nombre && !amigos.includes(nombre)) {
        amigos.push(nombre);
        actualizarListaAmigos();
        input.value = '';
    }
}

// Función para actualizar la lista de amigos en el DOM
function actualizarListaAmigos() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    amigos.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        const button = document.createElement('button');
        button.textContent = 'Eliminar';
        button.onclick = () => eliminarAmigo(index);
        li.appendChild(button);
        lista.appendChild(li);
    });
}

// Función para eliminar un amigo
function eliminarAmigo(index) {
    amigos.splice(index, 1);
    actualizarListaAmigos();
}

// Función para sortear los amigos
function sortearAmigo() {
    if (amigos.length < 2) {
        alert('Debe haber al menos dos amigos para realizar el sorteo.');
        return;
    }
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';
    const amigosSorteados = [...amigos];
    amigosSorteados.sort(() => Math.random() - 0.5);
    amigos.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.textContent = `${amigo} es el amigo secreto de ${amigosSorteados[index]}`;
        resultado.appendChild(li);
    });
}

// Función para seleccionar un amigo aleatoriamente
function seleccionarAmigoAleatorio() {
    if (amigos.length === 0) {
        alert('No hay amigos disponibles para seleccionar.');
        return;
    }
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `El amigo seleccionado es: ${amigoSorteado}`;
}
