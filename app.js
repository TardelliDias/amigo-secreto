let amigos = []; //criar uma lista para armazenar os nomes dos amigos
let nome = '';
let amigoSorteado = '';
let novoAmigo = '';

function adicionarAmigo() { //criar uma função para adicionar amigos na lista
    
    nome = document.querySelector('input').value; //obter os nomes dos participantes

    if (nome.trim() !== "") { //condição para ignorar entradas em branco
    
        amigos.push(nome); //adicionar o amigo na lista de participantes 

        console.log(amigos); //visualizar a lista de amigos
        console.log(nome); //visualizar o nome do amigo participante    

        atualizarAmigos();
        limparCampo();
     
    } else {
        console.log("Entrada vazia ignorada."); //mensagem para indicar que não foi adicionado um amigo
        alert('Por favor, insira um nome.');
        }
    }

function limparCampo(){
    
    let limpar = document.getElementById('amigo'); //selecionar o campo com o Id amigo do HMTL
    limpar.value = ''; //limpar o campo de entrada para uma string vazia
    }

function atualizarAmigos(){
 
    novoAmigo = document.getElementById('listaAmigos'); //Obter o elemento HTML para selecionar a lista onde os amigos serão exibidos
    novoAmigo.innerHTML = ''; //se o HTML já possui algo ele repetirá. para não ocorrer isso usamos o metodo .innerHTML

    for (let i = 0; i < amigos.length; i++){
        
        novoAmigo = document.createElement('li'); //criar uma tag lista para armazenar o item da lista
        novoAmigo.textContent = amigos[i]; //alterar o html da li para armaenar o nome do participante
        listaAmigos.appendChild(novoAmigo);
    }
    //amigoSorteado.innerHTML = '';
}

function sortearAmigo(){
    //console.log('tamanho da lista: ',amigos.length);
    if (amigos == 0)
        console.log('lista vazia');
    else{
        //console.clear();
        //console.log('elementos na lista');
        //let ver = Math.random();
        
        let aux = Math.floor((Math.random()*amigos.length+1));
        let sorteado = amigos[aux-1];
        //console.log('função math.random', ver);
        //console.log('tamanho da lista: ', amigos.length);
        //console.log('numero do indice da lista: ',aux-1);
        console.log('Amigo Sorteado: ',sorteado);
        console.log('numero sorteado', aux);
        novoAmigo.innerHTML = '';
        amigoSorteado = document.getElementById('resultado');
        //amigoSorteado.innerHTML = '';
        amigoSorteado.textContent = sorteado;
        
    }
}


//FALTA USAR O innerHTML para exibir o amigo sorteado E LIMPAR A TELA