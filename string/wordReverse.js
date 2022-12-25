//Faça uma função chamada wordReverse que recebe um parâmetro chamado text do tipo string contendo várias palavras separadas por espaço e retorne uma string com as palavras invertidas de trás para frente;

export function wordReverse(text){
    
    
    //variavel que transfora a string em um array
    let val = text.split(' ');
    

    //variavel que reverte a array
    let reverse = val.reverse();
    

    // variavel que transforma o array em string novamente
    let join = reverse.join(' ');

    //retorna a string reversa
    return join;

}
