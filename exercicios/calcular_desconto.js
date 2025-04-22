const realine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

realine.question("Digite o valor da sua compra: ", (valorCompra)=>{
    if(valorCompra > 100){
         desconto = valorCompra * 0.1
         valorFinal = valorCompra - desconto
        console.log(`Você recebeu um desconto de R$${desconto} na sua compra.\nO valor final é de R$${valorFinal}`)
    } else{
        console.log(`Você recebeu NÃO recebeu desconto na sua compra.\nO valor final é de R$${valorCompra}`)
    }
    realine.close()
})