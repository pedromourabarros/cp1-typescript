// 1. Instalando e Compilando TypeScript
// Para instalar o TypeScript globalmente, use o comando:
// npm install -g typescript
// Para verificar a versão do TypeScript instalada:
// tsc --version
// 2. Tipos Básicos e Declaração de Variáveis
// Declaração de variáveis com tipos
var nome = "Maria"; // A variável 'nome' deve ser do tipo 'string'
var idade = 30; // A variável 'idade' deve ser do tipo 'number'
var ativo = true; // A variável 'ativo' deve ser do tipo 'boolean'
// Erro de Tipagem
// Tentando atribuir um valor de tipo incompatível
// idade = "30";  // Erro: 'string' não pode ser atribuído a 'number'
// 2.1 Tipos Comuns
// Tipos comuns usados em TypeScript
var nome2 = "Carlos"; // string
var idade2 = 25; // number
var ativo2 = false; // boolean
// 2.3 Arrays e Tuplas
// Exemplo de Array
var notas = [8, 9, 10]; // Um array de números
notas.push(7); // Adiciona o número 7 ao array
console.log(notas[0]); // Exibe o primeiro elemento do array: 8
// Exemplo de Tupla
var aluno = ["João", 25]; // Tupla com um string e um number
console.log(aluno[0]); // Exibe o nome do aluno: "João"
console.log(aluno[1]); // Exibe a idade do aluno: 25
// aluno[1] = "Maria";  // Erro: Tipo 'string' não pode ser atribuído a 'number'
// 2.4 Enum
// Definindo um enum para os estados de uma tarefa
var Status;
(function (Status) {
    Status[Status["Pendente"] = 0] = "Pendente";
    Status[Status["EmAndamento"] = 1] = "EmAndamento";
    Status[Status["Concluido"] = 2] = "Concluido"; // Concluido será 2
})(Status || (Status = {}));
var tarefa = Status.EmAndamento; // A tarefa está em andamento
console.log(Status.Pendente); // Saída: 0
console.log(Status.EmAndamento); // Saída: 1
console.log(Status.Concluido); // Saída: 2
// Enum com valores personalizados
var StatusPersonalizado;
(function (StatusPersonalizado) {
    StatusPersonalizado[StatusPersonalizado["Pendente"] = 1] = "Pendente";
    StatusPersonalizado[StatusPersonalizado["EmAndamento"] = 2] = "EmAndamento";
    StatusPersonalizado[StatusPersonalizado["Concluido"] = 3] = "Concluido"; // Concluido será 3
})(StatusPersonalizado || (StatusPersonalizado = {}));
// 3. Funções em TypeScript
// Função com Tipagem
// Função que soma dois números
function soma(a, b) {
    return a + b; // Retorna a soma dos dois números
}
console.log(soma(5, 3)); // Saída: 8
// Função com Parâmetros Opcionais
// Função que saudação e, se passar idade, exibe a idade também
function saudacao(nome, idade) {
    return idade ? "Ol\u00E1, ".concat(nome, ", voc\u00EA tem ").concat(idade, " anos!") : "Ol\u00E1, ".concat(nome, "!");
}
console.log(saudacao("Maria")); // Saída: "Olá, Maria!"
console.log(saudacao("João", 25)); // Saída: "Olá, João, você tem 25 anos!"
// Função com Valor Padrão
// Função que saudação e, se idade não for passada, usa valor padrão 18
function saudacaoPadrao(nome, idade) {
    if (idade === void 0) { idade = 18; }
    return "Ol\u00E1, ".concat(nome, ", voc\u00EA tem ").concat(idade, " anos!");
}
console.log(saudacaoPadrao("Pedro")); // Saída: "Olá, Pedro, você tem 18 anos!"
console.log(saudacaoPadrao("Ana", 22)); // Saída: "Olá, Ana, você tem 22 anos!"
// Criando um objeto que segue a interface
var pessoa1 = {
    nome: "Carlos",
    idade: 30
};
// Acessando as propriedades do objeto
console.log(pessoa1.nome); // Saída: "Carlos"
console.log(pessoa1.idade); // Saída: 30
// 5. Classes
// Definindo uma classe com construtor e método
var Carro = /** @class */ (function () {
    function Carro(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
    Carro.prototype.exibirDetalhes = function () {
        console.log("".concat(this.marca, " - ").concat(this.modelo, " (").concat(this.ano, ")"));
    };
    return Carro;
}());
// Criando uma instância da classe Carro
var carro1 = new Carro("Honda", "Civic", 2022);
carro1.exibirDetalhes(); // Saída: "Honda - Civic (2022)"
// 6. Generics
// Função genérica para retornar um valor do tipo passado
function identidade(valor) {
    return valor;
}
var resultado1 = identidade("Olá Mundo");
console.log(resultado1); // Saída: "Olá Mundo"
var resultado2 = identidade(100);
console.log(resultado2); // Saída: 100
