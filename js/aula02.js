console.log("Script externo rodando para o DOM");

const tituloElemento = document.getElementById('tituloDinamico');//selecionar o elemento <h2> pelo seu ID
tituloElemento.textContent = "Texto alterado pelo JavaScript";//alterar o texto do <h2>
tituloElemento.style.color = 'green'// alterando a cor do texto

const botaoElemento = document.getElementById('meuBotao')//seleciona o botão pelo seu ID
botaoElemento.addEventListener('click', function(){
    alert('Botão foi clicado!!!')
})