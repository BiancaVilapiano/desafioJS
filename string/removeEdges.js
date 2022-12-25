//faça uma função chamada removeEdges que recebe um parâmetro chamado text do tipo string e retorna a string sem o primeiro e último caractere;

function removeEdges(text){

    // transforma a string em um array
    let array = text.split('');
    
    //remove o primeiro indice do array
    array.shift();
    //remove o ultimo indice do array
    array.pop();
    // transforma o array novamente em uma string
    return array.join('');

}









