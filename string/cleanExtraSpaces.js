//Faça uma função chamada cleanExtraSpaces que recebe um parâmetro chamado val do tipo string com várias palavras separadas por um ou mais espaços e retorna uma string removendo excessos de espaços;

export function cleanExtraSpaces(val){
 
    
    //splite separa a string em um array quando encontra o espaco (' ')
    let array = val.split(' ');

    // .indexOf mostra em qual indice o caracter se encontra
    let indice = val.indexOf(' ');

    // enquanto o indice for maior ou igual a 0 o .Splice exclui os indices da lista
    while(indice >= 0){
        array.splice(indice, 1)
        indice = array.indexOf(' ');
      
    }

    // faz com q o array volte a ser uma string com 1 espacamento entre elas
    return array.join(' ');

}


