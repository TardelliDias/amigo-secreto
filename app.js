let amigos = []; 

function adicionarAmigo() { //Criar uma função para adicionar amigos na lista
    
    let nome = document.querySelector('input').value; //Obter os nomes dos participantes

    if (nome.trim() !== "") { //Condição para ignorar entradas em branco
                
        amigos.push(nome); //Adicionar o amigo na lista de participantes 

        atualizarAmigos();
        limparCampo();
    } else {
        alert('Por favor, insira um nome.');
        }
    }

function limparCampo(){
    let limpar = document.getElementById('amigo'); //Selecionar o campo com o Id amigo inserido no HMTL
    limpar.value = ''; //Limpar o campo de entrada
    limpar.focus();
    }

function atualizarAmigos(){
 
    let novoAmigo = document.getElementById('listaAmigos'); //Obter o elemento HTML para selecionar a lista onde os amigos serão exibidos
    novoAmigo.innerHTML = ''; //Se o HTML já possui algum nome, ele repetirá a listagem. Para evitar, usamos o método '.innerHTML'

    for (let i = 0; i < amigos.length; i++){
        novoAmigo = document.createElement('li'); //Criar uma tag do tipo lista para armazenar o item na lista
        novoAmigo.textContent = amigos[i]; //Alterar o HTML da lista para armazenar o nome do participante
        listaAmigos.appendChild(novoAmigo);
    }
}

function sortearAmigo(){
    
    if (amigos == 0)
        alert('Sem amigos para sortear.');
    else{
        let aux = Math.floor((Math.random()*amigos.length+1)); //Gerar um índice para sorteio
        let sorteado = amigos[aux-1]; //Vincular o índice a um alemento da lista
        let amigoSorteado = document.getElementById('resultado');

        amigoSorteado.textContent = ("O amigo secreto sorteado é: " + sorteado);
        document.getElementById('listaAmigos').innerHTML = '';
    }
}




