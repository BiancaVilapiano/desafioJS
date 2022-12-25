//Faça uma função chamada biggestNumberFrom3 que recebe três parâmetros chamados val1, val2 e val3 do tipo number e retorna um number que é o parâmetro de maior valor;

export function biggestNumberFrom3(val1, val2, val3){
    if(val1 > val2 && val1 > val3)
        return val1;
   
    if(val2 > val1 && val2 > val3)
        return val2;
    
    if(val3 > val1 && val3 > val2)
        return val3;
}

