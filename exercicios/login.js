const readLine = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});
const usuario = "gigi"
const senha = "giovanna"
readLine.question("Digite o nome de usuario: ", (input_usuario) => {
    readLine.question("Digite sua senha: ", (input_senha) => {
        if (input_usuario == usuario || input_senha == senha) {
            console.log(`Bem vinda, ${usuario}`)
        } else {
            console.log("Usuário ou senha incorretos.")
        }
        readLine.close()
    })
})