//Faça uma função chamada extractNumber que recebe um parâmetro chamado val do tipo string e retorna um number extraindo/eliminando todos os caracteres que não forem numéricos;

export function extractNumber(val){
     
    return val.match(/\-?\d+\.?\d+/g).join(''); //funcao regex que filtra os caracteres, so podendo passar -, num, e .
    

}


