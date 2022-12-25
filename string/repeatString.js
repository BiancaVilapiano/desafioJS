//Faça uma função chamada repeatString que recebe um parâmetro chamado text do tipo string e uma chamada n do tipo number e retorna uma string que é o parâmetro text repetido n vezes;

export function repeatString(text, n){
    let texto = ''   
    for (let i = 0; i < n; i++){
        texto += text
    }
    return texto;
}

