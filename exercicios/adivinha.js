let numeroSecreto = Math.floor(Math.random() * 10) + 1;

function jogoAdivinha(){
    let numeroDigitado = parseInt(document.getElementById("numeroDigitado").value)
    let p = document.getElementById("mensagem")

    if (isNaN(numeroDigitado) || numeroDigitado < 1 || numeroDigitado > 10 ){
        p.innerHTML = "Por favor, digite um número válido entre 1 e 10.";
        p.style.color = "red";
    }else if (numeroDigitado == numeroSecreto){
        p.innerHTML = "Parabéns, você acertou! 🥳";
        p.style.color = "green";
    }else if (numeroDigitado < numeroSecreto){
        p.innerHTML = "Tente um número maior";
        p.style.color = "orange";
    }else{
        p.innerHTML = "Tente um número menor";
        p.style.color = "blue";
    }
}