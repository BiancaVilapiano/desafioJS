//Faça uma função chamada countVowels que recebe um parâmetro chamado val do tipo string e retorna um number com a contagem das vogais;


export function countVowels(val){
    let qtdVogais = 0

    for (let i = 0; i < val.length; i++){
        if (val[i] === 'a' || val[i] === 'e' || val[i] === 'i' ||  val[i] === 'o' ||  val[i] === 'u'){
            qtdVogais += 1;
        }
    }
    return qtdVogais;
}

