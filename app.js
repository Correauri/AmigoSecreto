//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
const listaAmigos = document.getElementById('listaAmigos');
const resultado = document.getElementById('resultado');
const amigoInput = document.getElementById('amigo');
let amigos = [];

function adicionarAmigo() {
    const nomeAmigo = amigoInput.value.trim(); // Remove espaços em branco

    if (nomeAmigo !== "") { // Verifica se o nome não está vazio
        amigos.push(nomeAmigo); // Adiciona ao array
        const novoItem = document.createElement('li');
        novoItem.textContent = nomeAmigo;
        listaAmigos.appendChild(novoItem);
        amigoInput.value = ''; // Limpa o input
    }
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("É necessário pelo menos dois participantes para o sorteio.");
        return;
    }

    const amigosEmbaralhados = embaralhar(amigos.slice()); // Cria uma cópia para não alterar o original

    resultado.innerHTML = ''; // Limpa resultados anteriores

    for (let i = 0; i < amigos.length; i++) {
        const amigoAtual = amigos[i];
        const amigoSorteado = amigosEmbaralhados[i];

        if (amigoAtual === amigoSorteado) {
            // Garante que a pessoa não tire ela mesma
            sortearAmigo(); // Realiza o sorteio novamente se isso acontecer
            return; // Sai da função para não exibir resultados incorretos
        }
        const novoItem = document.createElement('li');
        novoItem.textContent = `${amigoAtual} tirou ${amigoSorteado}`;
        resultado.appendChild(novoItem);

    }
}

function embaralhar(array) {
    // Algoritmo Fisher-Yates
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Troca os elementos
    }
    return array;
}