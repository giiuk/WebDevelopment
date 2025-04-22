function faixaEtaria(){
    let idadeDigitada = document.getElementById("idadeDigitada").value;

    if (idadeDigitada <= 12){
        let p = document.getElementById("textoIdade")
        p.innerHTML = "Sua faixa etária é: <b>Criança<b>"
        
    } else if(idadeDigitada > 12 && idadeDigitada <= 17){
         let p = document.getElementById("textoIdade")
        p.innerHTML = "Sua faixa etária é: <b>Adolescente<b>"
    }else if (idadeDigitada > 17 && idadeDigitada <= 64){
         let p = document.getElementById("textoIdade")
        p.innerHTML = "Sua faixa etária é: <b>Adulto<b>"
    }else{
         let p = document.getElementById("textoIdade")
        p.innerHTML = "Sua faixa etária é: <b>Idoso<b>"
    }
}