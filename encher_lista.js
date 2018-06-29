var fs = require('fs');

function obterListasDoArquivo(arquivo) {
    const linhas = obterConteudoArquivo(arquivo).split('\n');
    let listas = [];
    while (listas.length < linhas[0]) {
        for (let linha = 1; linha + 1 < linhas.length; linha += 2) {
            listas.push(linhas[linha + 1].split(' ').slice(0, linhas[linha]).map(parseFloat));
        }
    }
    return listas;
}

function obterConteudoArquivo(arquivo) {
    try {
        return fs.readFileSync(arquivo, 'ascii');
    } catch (exception) {
        return exception.message;
    }
}

function EncherLista (lista) {
    let maximo_esquerda = 0;
    let maximo_direita = 0;
    let esquerda = 0;
    let direita = lista.length - 1;
    let resultado = 0;

    while (esquerda < direita){
        if (lista[esquerda] <= lista[direita]){
            if (lista[esquerda] >= maximo_esquerda){
                maximo_esquerda = lista[esquerda]
            }
            else{
                resultado += maximo_esquerda - lista[esquerda]
            }
            esquerda +=1
        }
        else{
            if(lista[direita] >= maximo_direita){
                maximo_direita = lista[direita]
            }
            else{
                resultado += maximo_direita - lista[direita]
            }
            direita -=1
        }
    }
    return resultado
}


let argumento = process.argv.slice(2).toString();
const listas = obterListasDoArquivo(argumento);
for (let index = 0; index < listas.length; index++) {
    lista = listas[index];
    console.log(EncherLista(lista));
}