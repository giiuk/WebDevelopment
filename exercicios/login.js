const readline = require('readline').createInterface({
    input : process.stdin,
    output: process.stdout
})

const usuario = "gigi"
const senha = "aocoisaboa"
readline.question("Digite seu nome de usuário:", (inputUser) =>{
    readline.question("Digite sua senha: ", (inputSenha) =>{
        
        if (inputUser == usuario && inputSenha == senha){
            console.log(`Login bem sucedido.\nBem vinda, ${usuario}!`)
        }else{
            console.log("Credenciais Inválidas.")
        }
        readline.close()
    })

})