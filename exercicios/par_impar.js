//Vamos importar o módulo "readline" para interagir com a entrada e sauda do terminal
const readLine = require('readline').createInterface({
    input:process.stdin, //Define a entrada como o fluxo de entrada padrão(teclado)
    output:process.stdout, //Define a saída como o fluxo de saida padrão (terminal)
});

//Exibe uma pergunta no terminal e espera pela resposta do usuário
readLine.question('Por favor, digite um número: ',(numeroDigitado)=>{
    //Converte a entrada do usuário( que é uma string) para um número inteiro
    const numero = parseInt(numeroDigitado);

    //Verifica se a conversão para o número inteiro foi bem sucedida
    if(!isNaN(numero)){
        //Se o número for divisível por 2 (o resto da divisão é 0), ele é par
        if(numero%2 == 0){
            console.log(`O número ${numero} é par.`)
        }else{
            console.log(`O número ${numero} é impar.`)
        }
    }
    //fechar a interface do 'readline' encerrando a interação com o terminal
    readLine.close();
})