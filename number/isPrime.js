//Faça uma função chamada isPrime que recebe um parâmetro chamado val do tipo number e retorna um boolean indicando se o parâmetro é um número primo;

export function isPrime(val){
    if (val == 1)
        return false

    if (val == 2)
        return true
        
    if (val % 2 == 0)
        return false
    
     
    for (let i = 2; i < Math.sqrt(val); i++)
        if (val % i === 0) {
        return false;
        }
    return true;

             
}
