//Faça uma função chamada shuffleString que recebe um parâmetro chamado text do tipo string e retorna uma string com a vor do parâmetro "embaralhado".

export function shuffleString(text){
  
    //funcao que divide os caracter de uma string, transformando a em array
    let val = text.split('');
 
    // funcao 
    for(let i = val.length - 1; i > 0; i --){


        // funcao que retorna um numero/caracter aleatorio
        let rand = Math.floor(Math.random() * (i + 1));

       
         //variavel que armazena o indice temporariamente
        let temp = val[i];

        
       //variavel do indice que vai armazenar a variavel indice aleatorio  
        val[i] = val[rand];

        // variavel que guarda o indice aleatorio que recebe a variavel temporaria
        val[rand] = temp;


    }
    //junta os caracteres de um array transformando as em string's
    return val.join('');
}
 

