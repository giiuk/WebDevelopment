function detectorCor(){
    let digiteCor = document.getElementById("digiteCor").value

    if (digiteCor == "" || digiteCor ==null){
        let p = document.getElementById("textoCor");
        p.innerHTML = "O campo não pode ser vazio";
        p.style.color = "red"
    }
    else if(digiteCor == "red"){
        let p = document.getElementById("textoCor");
        p.innerHTML = "Você digitou vermelho";
        document.body.style.backgroundColor= "red"
    }
    else if (digiteCor == "blue"){
        let p = document.getElementById("textoCor");
        p.innerHTML = "Você digitou azul";
        document.body.style.backgroundColor= "blue"
    }
    else if (digiteCor == "green"){
        let p = document.getElementById("textoCor");
        p.innerHTML = "Você digitou verde";
        document.body.style.backgroundColor= "green"
    }
    else if (digiteCor == "pink"){
        let p = document.getElementById("textoCor");
        p.innerHTML = "Você digitou rosa";
        document.body.style.backgroundColor= "pink"
    }else{
            let p = document.getElementById("textoCor");
            p.innerHTML = "Cor não reconhecida";
            document.body.style.backgroundColor= "white"
            
        }
}