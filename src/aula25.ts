// 1. Instalando e Compilando TypeScript

// Para instalar o TypeScript globalmente, use o comando:
// npm install -g typescript

// Para verificar a versão do TypeScript instalada:
// tsc --version

// 2. Tipos Básicos e Declaração de Variáveis

// Declaração de variáveis com tipos
let nome: string = "Maria";  // A variável 'nome' deve ser do tipo 'string'
let idade: number = 30;      // A variável 'idade' deve ser do tipo 'number'
let ativo: boolean = true;   // A variável 'ativo' deve ser do tipo 'boolean'

// Erro de Tipagem
// Tentando atribuir um valor de tipo incompatível
// idade = "30";  // Erro: 'string' não pode ser atribuído a 'number'

// 2.1 Tipos Comuns

// Tipos comuns usados em TypeScript
let nome2: string = "Carlos";    // string
let idade2: number = 25;         // number
let ativo2: boolean = false;     // boolean

// 2.3 Arrays e Tuplas

// Exemplo de Array
let notas: number[] = [8, 9, 10];  // Um array de números
notas.push(7);  // Adiciona o número 7 ao array
console.log(notas[0]);  // Exibe o primeiro elemento do array: 8

// Exemplo de Tupla
let aluno: [string, number] = ["João", 25];  // Tupla com um string e um number
console.log(aluno[0]);  // Exibe o nome do aluno: "João"
console.log(aluno[1]);  // Exibe a idade do aluno: 25
// aluno[1] = "Maria";  // Erro: Tipo 'string' não pode ser atribuído a 'number'

// 2.4 Enum

// Definindo um enum para os estados de uma tarefa
enum Status {
    Pendente,     // Pendente será 0
    EmAndamento,  // EmAndamento será 1
    Concluido     // Concluido será 2
}

let tarefa: Status = Status.EmAndamento;  // A tarefa está em andamento
console.log(Status.Pendente);     // Saída: 0
console.log(Status.EmAndamento);  // Saída: 1
console.log(Status.Concluido);    // Saída: 2

// Enum com valores personalizados
enum StatusPersonalizado {
    Pendente = 1,     // Pendente agora será 1
    EmAndamento = 2,  // EmAndamento será 2
    Concluido = 3     // Concluido será 3
}

// 3. Funções em TypeScript

// Função com Tipagem
// Função que soma dois números
function soma(a: number, b: number): number {
    return a + b;  // Retorna a soma dos dois números
}

console.log(soma(5, 3));  // Saída: 8

// Função com Parâmetros Opcionais
// Função que saudação e, se passar idade, exibe a idade também
function saudacao(nome: string, idade?: number): string {
    return idade ? `Olá, ${nome}, você tem ${idade} anos!` : `Olá, ${nome}!`;
}

console.log(saudacao("Maria"));     // Saída: "Olá, Maria!"
console.log(saudacao("João", 25));  // Saída: "Olá, João, você tem 25 anos!"

// Função com Valor Padrão
// Função que saudação e, se idade não for passada, usa valor padrão 18
function saudacaoPadrao(nome: string, idade: number = 18): string {
    return `Olá, ${nome}, você tem ${idade} anos!`;
}

console.log(saudacaoPadrao("Pedro"));     // Saída: "Olá, Pedro, você tem 18 anos!"
console.log(saudacaoPadrao("Ana", 22));   // Saída: "Olá, Ana, você tem 22 anos!"

// 4. Interfaces

// Definindo uma interface para um objeto de pessoa
interface Pessoa {
    nome: string;
    idade: number;
    ativo?: boolean;  // O campo 'ativo' é opcional
}

// Criando um objeto que segue a interface
let pessoa1: Pessoa = {
    nome: "Carlos",
    idade: 30
};

// Acessando as propriedades do objeto
console.log(pessoa1.nome);   // Saída: "Carlos"
console.log(pessoa1.idade);  // Saída: 30

// 5. Classes

// Definindo uma classe com construtor e método
class Carro {
    marca: string;
    modelo: string;
    ano: number;

    constructor(marca: string, modelo: string, ano: number) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    exibirDetalhes(): void {
        console.log(`${this.marca} - ${this.modelo} (${this.ano})`);
    }
}

// Criando uma instância da classe Carro
let carro1 = new Carro("Honda", "Civic", 2022);
carro1.exibirDetalhes();  // Saída: "Honda - Civic (2022)"

// 6. Generics

// Função genérica para retornar um valor do tipo passado
function identidade<T>(valor: T): T {
    return valor;
}

let resultado1 = identidade<string>("Olá Mundo");
console.log(resultado1);  // Saída: "Olá Mundo"

let resultado2 = identidade<number>(100);
console.log(resultado2);  // Saída: 100
