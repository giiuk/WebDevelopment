//for
for(let i =0; i<5; i++){
    console.log(`Numero: ${i}`);
}

//while
let contador = 0;
while(contador < 3){
    console.log(`Contador  está em: ${contador}`) 
    contador++;
}

//for in
const pessoa = {
    nome: 'Ana',
    idade: 30,
    cidade: 'São Paulo'
}

for(const propriedade in pessoa){
    console.log(`${propriedade}: ${pessoa [propriedade]}`);
}


//for of
const cores = ['vermelho', 'azul', 'preto']; //crição de um array de cores
for(const cor of cores){ //execução de um laço de repetição of percorrendo todas as posições do array cores
    console.log(cor);

}


const resultadoDiv = document.getElementById('resultado')
const carro = {
    marca: 'Ford',
    modelo: 'Mustang',
    ano: '2007',
    cor: 'Azul',
    ligar: function(){
        console.log('O carro está ligado!!');
        exibirMensagemNoNavegador('O carro está ligado!!');
    },


obterDetalhes: function(){ //obterDetalhes é um outro método
    return `${this.marca} ${this.modelo} (${this.ano})`;
    //this se refere ao objeto carro dentro dos seus métodos
    }
};

console.log('---Objeto Literal---');
console.log(`Marca: ${carro.marca}`); // acessando a propriedade marca usando a notação de ponto
console.log(`Marca: ${carro['modelo']}`); // acessando a propriedade modelo usando conchetes
carro.ligar(); //chamando o método ligar usando a notação a notação de ponto

const detalhesCarro = carro.obterDetalhes();
console.log(`Detalhes do carro: ${detalhesCarro}`);
exibirMensagemNoNavegador(`Detalhes do carro: ${detalhesCarro}`)

console.log('--Exibindo o objeto---');
for(const propriedade in carro){
    console.log(`${propriedade}: ${carro[propriedade]}`)
    exibirMensagemNoNavegador(`${propriedade}: ${carro[propriedade]}`)
}

//Outra forma de exibir um objeto(converte o objeto para uma string JSON)
const carroJSON = JSON.stringify(carro);//converte o objeto carro no modelo String JSON
console.log(`Objeto carro com o JSON: ${carroJSON}`);
exibirMensagemNoNavegador(`Objeto carro com o JSON: ${carroJSON}`)

//funções construtoras
//Uma função construtora é usada para criar multiplos objetos com uma única estrutura
//Usamos a palavra chaveInew para invocar um construtor
function Pessoa(nome,idade,profissao){
    this.nome = nome; //cria uma propriedade 'nome' para um novo objeto e atribui o valor do parametro nome
    this.idade = idade;
    this.profissao = profissao;
    this.saudar = function(){
        console.log(`Olá, meu nome é ${this.nome} e eu sou ${this.profissao}`)
    }
}



//criando instancias (objetos) da função construtora Pessoa usando o 'new'
const pessoa1 = new Pessoa('Carlos', 32, 'Engenheiro de Software')
const pessoa2 = new Pessoa('Diego', 18, 'Engenheiro de Software')

console.log('--Funções Construtoras--');
console.log(`Nome da pessoa 1: ${pessoa1.nome}`);
pessoa1.saudar();
console.log(`Nome da pessoa 2: ${pessoa2.nome}`);
pessoa2.saudar();

function exibirMensagemNoNavegador(mensagem){
    const paragrafo = document.createElement('p'); //cria novo elemento de paragrafo
    paragrafo.textContent = mensagem; // define o texto do parágrafo com a mensagem
    resultadoDiv.appendChild(paragrafo);//adicionar o paragrafo elemento 'resultado' no html

}