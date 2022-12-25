//Faça uma função chamada stringInitials que recebe um parâmetro chamado text do tipo string contendo várias palavras e retorna uma string extraindo apenas o primeiro caractere de cada palavra em caixa alta;

export function stringInitials(text){
    //variavel que transforma uma string em um array, map percorre a lista item por item 
    let array = text.split(' ').map(i =>
    //charArt pega o caracter do indice escolhido, join transforma o array novamente em uma string, e o toUpperCase deixa os caracter em caixa alta.
    i.charAt(0)).join('').toUpperCase();

    return array;

}






