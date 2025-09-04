//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.


let listaDeAmigos = []; //criar uma lista para armazenar os nomes dos amigos


function adicionarAmigo() { //criar uma função para adicionar amigos na lista

    let amigo = document.querySelector('input').value; //obter os nomes dos participantes


    if (amigo.trim() !== "") { //condição para ignorar entradas em branco
        listaDeAmigos.push(amigo); //adicionar o amigo na lista de participantes

        console.log(listaDeAmigos); //visualizar a lista de amigos
        console.log(amigo); //visualizar o nome do amigo participante

        let novoAmigo = document.getElementById('resultado'); //variavel para acessar a tag ul chamada resultado
        novoAmigo = document.createElement('li'); //criar uma tag lista para armazenar o item da lista
        novoAmigo.textContent = amigo; //alterar o html da li para armaenar o nome do participante
        resultado.appendChild(novoAmigo); //vincular o item da lista na tag ul

        alert(`${amigo} foi adicionado à lista de participantes do amigo secreto!`);

     
    } else {
        console.log("Entrada vazia ignorada."); //mensagem para indicar que não foi adicionado um amigo
        alert('Você não adicionou um amigo!');
        }
    }
