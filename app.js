let amigos = []
let listaDeAmigos = amigos

function adicionarAmigo() {
    let nome = document.getElementById('amigo').value;
    
    if (nome == "") {
        alert('Digite um nome válido');
    } else {
        amigos.push(nome);
        console.log(amigos);
        let lista = document.getElementById('listaAmigos');
        let item = document.createElement('li');
        item.textContent = nome;
        lista.appendChild(item);
    }
    document.getElementById('amigo').value = '';
}

function sortearAmigo() { 
    let numeroDoAmigoNaLista = Math.floor(Math.random() * amigos.length);
    let nomeSorteado = amigos[numeroDoAmigoNaLista];
    document.getElementById('resultado').innerHTML = `O amigo secreto sorteado é: ${nomeSorteado}`
}