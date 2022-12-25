//Faça uma função chamada decreaseNumberBy10Pct que recebe um parâmetro chamado val do tipo number e retorna um number equivalente ao valor do parâmetro - 10%;

export function decreaseNumberBy10Pct(val){
    return val - (val / 100 ) * 10
}

