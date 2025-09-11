let amigos = []; 

function adicionarAmigo() { //criar uma função para adicionar amigos na lista
    
    let nome = document.querySelector('input').value; //obter os nomes dos participantes

    if (nome.trim() !== "") { //condição para ignorar entradas em branco
                
        amigos.push(nome); //adicionar o amigo na lista de participantes 

        atualizarAmigos();
        limparCampo();
    } else {
        alert('Por favor, insira um nome.');
        }
    }

function limparCampo(){
    let limpar = document.getElementById('amigo'); //selecionar o campo com o Id amigo do HMTL
    limpar.value = ''; //limpar o campo de entrada para uma string vazia
    limpar.focus();
    }

function atualizarAmigos(){
 
    let novoAmigo = document.getElementById('listaAmigos'); //Obter o elemento HTML para selecionar a lista onde os amigos serão exibidos
    novoAmigo.innerHTML = ''; //se o HTML já possui algum nome, ele repetirá a listagem. Para evitar, usamos o método .innerHTML

    for (let i = 0; i < amigos.length; i++){
        
        novoAmigo = document.createElement('li'); //criar uma tag lista para armazenar o item da lista
        novoAmigo.textContent = amigos[i]; //alterar o html da li para armaenar o nome do participante
        listaAmigos.appendChild(novoAmigo);
    }
}

function sortearAmigo(){
    
    if (amigos == 0)
        alert('Sem amigos para sortear.');
    else{
       
        let aux = Math.floor((Math.random()*amigos.length+1)); //gerar um índice para sorteio
        let sorteado = amigos[aux-1]; //vincular o indice a um alemento da lista
        let amigoSorteado = document.getElementById('resultado');

        amigoSorteado.textContent = ("O amigo secreto sorteado é: " + sorteado);
        document.getElementById('listaAmigos').innerHTML = '';
    }
}




