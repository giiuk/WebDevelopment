const readLine = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});
readLine.question("Digite o valor total da conta: ", (valor) => {
    if (!isNaN(valor)) {
        if (valor > 100) {
            desconto = valor * 0.1;
            final = valor - desconto
            console.log(`Seu valor tem um desconto de R$${desconto}.\nO valor final é de: ${final}`);
        } else {
            console.log(`Seu valor é de R$${valor}.`);
        }
    }
    readLine.close();
})