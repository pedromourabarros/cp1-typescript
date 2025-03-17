// 1. Interfaces e Tipagem Avançada

// **O que são Interfaces?**
// Interfaces são estruturas que permitem definir contratos para objetos, 
// garantindo que possuam determinados atributos e métodos.

interface Usuario {
    nome: string;
    idade: number;
    email?: string; // Propriedade opcional
}

const usuario1: Usuario = {
    nome: "Ana",
    idade: 25
};

console.log(usuario1); // Saída: { nome: "Ana", idade: 25 }

// **Interfaces com Funções**
// Podemos usar interfaces para tipar funções, garantindo que elas sigam uma assinatura específica.

interface Soma {
    (a: number, b: number): number;
}

const somar: Soma = (x, y) => x + y;
console.log(somar(10, 5)); // Saída: 15

// **Extensão de Interfaces**
// Podemos estender interfaces para reutilizar propriedades e manter um código mais organizado.

interface Animal {
    nome: string;
    idade: number;
}

interface Cachorro extends Animal {
    raca: string;
}

const meuCachorro: Cachorro = {
    nome: "Rex",
    idade: 4,
    raca: "Labrador"
};

console.log(meuCachorro); // Saída: { nome: "Rex", idade: 4, raca: "Labrador" }


// 2. Generics

// **O que são Generics?**
// Generics permitem a criação de código reutilizável e flexível, permitindo que uma função, interface ou classe 
// trabalhe com diferentes tipos sem perder a segurança da tipagem.

function retornarElemento<T>(elemento: T): T {
    return elemento;
}

console.log(retornarElemento<number>(10)); // Saída: 10
console.log(retornarElemento<string>("Olá TypeScript")); // Saída: "Olá TypeScript"

// **Generics em Interfaces**
// Podemos usar Generics para definir interfaces mais flexíveis.

interface RespostaAPI<T> {
    data: T;
    sucesso: boolean;
}

const respostaTexto: RespostaAPI<string> = {
    data: "Dados recebidos com sucesso!",
    sucesso: true
};

const respostaNumerica: RespostaAPI<number> = {
    data: 200,
    sucesso: true
};

console.log(respostaTexto); // Saída: { data: "Dados recebidos com sucesso!", sucesso: true }
console.log(respostaNumerica); // Saída: { data: 200, sucesso: true }

// **Generics em Classes**
// Classes também podem se beneficiar do uso de Generics.

class Caixa<T> {
    conteudo: T;

    constructor(conteudo: T) {
        this.conteudo = conteudo;
    }

    obterConteudo(): T {
        return this.conteudo;
    }
}

const caixaNumerica = new Caixa<number>(100);
console.log(caixaNumerica.obterConteudo()); // Saída: 100

const caixaTexto = new Caixa<string>("Presente");
console.log(caixaTexto.obterConteudo()); // Saída: "Presente"

// **Exemplo com Array**
class Lista<T> {
    private itens: T[] = [];

    adicionarItem(item: T): void {
        this.itens.push(item);
    }

    obterItens(): T[] {
        return this.itens;
    }
}

const listaNumeros = new Lista<number>();
listaNumeros.adicionarItem(5);
listaNumeros.adicionarItem(10);
console.log(listaNumeros.obterItens()); // Saída: [5, 10]

const listaPalavras = new Lista<string>();
listaPalavras.adicionarItem("Olá");
listaPalavras.adicionarItem("TypeScript");
console.log(listaPalavras.obterItens()); // Saída: ["Olá", "TypeScript"]


// 3. Manipulação Avançada de Tipos

// **Type Aliases**
// TypeScript permite definir alias para tipos, facilitando a reutilização e legibilidade do código.

type ID = string | number;

function buscarUsuario(id: ID) {
    console.log(`Buscando usuário com ID: ${id}`);
}

buscarUsuario(123); // Saída: Buscando usuário com ID: 123
buscarUsuario("abc123"); // Saída: Buscando usuário com ID: abc123

// **Union Types**
// Union Types permitem que uma variável aceite múltiplos tipos de dados.

let resposta: string | boolean;
resposta = "Sucesso";
console.log(resposta); // Saída: "Sucesso"
resposta = true;
console.log(resposta); // Saída: true
// resposta = 123; // Erro! Número não é um tipo válido para a variável resposta

// **Intersection Types**
// Intersection Types permitem combinar múltiplos tipos em um só, criando objetos que precisam atender a todas as restrições definidas.

type Pessoa = {
    nome: string;
    idade: number;
};

type Funcionario = {
    cargo: string;
    salario: number;
};

type FuncionarioDetalhado = Pessoa & Funcionario;

const funcionario1: FuncionarioDetalhado = {
    nome: "Carlos",
    idade: 35,
    cargo: "Engenheiro",
    salario: 5000
};

console.log(funcionario1); 
// Saída: { nome: "Carlos", idade: 35, cargo: "Engenheiro", salario: 5000 }

// **Utility Types**
// TypeScript fornece vários tipos utilitários prontos para facilitar o desenvolvimento.

interface Produto {
    id: number;
    nome: string;
    preco: number;
}

const produtoParcial: Partial<Produto> = {
    nome: "Notebook"
};

console.log(produtoParcial); // Saída: { nome: "Notebook" }


// 4. Boas Práticas em TypeScript

// **Use Tipos Específicos Sempre que Possível**
// Evite o uso de any, pois ele anula as vantagens da tipagem estática.
let valorCerto: string | number = "Teste";

// **Prefira Interfaces e Type Aliases**
// Defina contratos claros para objetos para melhorar a manutenção do código.

interface Cliente {
    nome: string;
    idade: number;
}

// **Utilize Readonly para Propriedades Imutáveis**
// Se uma propriedade não deve ser alterada, use readonly para garantir a segurança.
interface Config {
    readonly versao: string;
}

const configApp: Config = { versao: "1.0.0" };
// configApp.versao = "1.1.0"; // Erro! Não pode alterar a propriedade "versao"

// **Documente Seu Código**
/**
 * Soma dois números e retorna o resultado.
 * @param a Primeiro número
 * @param b Segundo número
 * @returns Soma dos dois valores
 */
function somarValores(a: number, b: number): number {
    return a + b;
}


// Exercícios TypeScript - Conceitos Avançados

// 1. Interfaces e Tipagem Avançada

// Exercício 1: Criação de Interface Carro
interface Carro {
    marca: string;
    modelo: string;
    ano: number;
    motor?: string; // Propriedade opcional
}

const meuCarro: Carro = {
    marca: "Fiat",
    modelo: "Uno",
    ano: 2015,
    motor: "1.0"
};

console.log(meuCarro); // Saída: { marca: "Fiat", modelo: "Uno", ano: 2015, motor: "1.0" }

// Exercício 2: Interface Multiplicacao
interface Multiplicacao {
    (a: number, b: number): number;
}

const multiplicar: Multiplicacao = (a, b) => a * b;
console.log(multiplicar(5, 4)); // Saída: 20


// 2. Generics

// Exercício 3: Função Genérica inverterArray
function inverterArray<T>(arr: T[]): T[] {
    return arr.reverse();
}

const numeros = [1, 2, 3, 4, 5];
const strings = ["um", "dois", "três"];

console.log(inverterArray(numeros)); // Saída: [5, 4, 3, 2, 1]
console.log(inverterArray(strings)); // Saída: ["três", "dois", "um"]

// Exercício 4: Interface genérica Repositorio
interface Repositorio<T> {
    salvar(dado: T): void;
    obterTodos(): T[];
}

class RepositorioUsuarios implements Repositorio<{ nome: string, email: string }> {
    private usuarios: { nome: string, email: string }[] = [];

    salvar(dado: { nome: string, email: string }): void {
        this.usuarios.push(dado);
    }

    obterTodos(): { nome: string, email: string }[] {
        return this.usuarios;
    }
}

const repositorio = new RepositorioUsuarios();
repositorio.salvar({ nome: "Maria", email: "maria@email.com" });
repositorio.salvar({ nome: "João", email: "joao@email.com" });

console.log(repositorio.obterTodos()); // Saída: [{ nome: "Maria", email: "maria@email.com" }, { nome: "João", email: "joao@email.com" }]


// 3. Manipulação Avançada de Tipos

// Exercício 5: Type Alias RespostaServidor
type RespostaServidor = string | boolean;

function processarResposta(resposta: RespostaServidor): void {
    if (typeof resposta === "string") {
        console.log(`Mensagem do servidor: ${resposta}`);
    } else {
        console.log(`Resposta do servidor: ${resposta ? "Sucesso" : "Falha"}`);
    }
}

processarResposta("Dados recebidos com sucesso!"); // Saída: Mensagem do servidor: Dados recebidos com sucesso!
processarResposta(true); // Saída: Resposta do servidor: Sucesso

// Exercício 6: Intersection Types EstudanteTrabalhador
type Estudante = {
    nome: string;
    curso: string;
};

type Trabalhador = {
    empresa: string;
    cargo: string;
};

type EstudanteTrabalhador = Estudante & Trabalhador;

const estudanteTrabalhador: EstudanteTrabalhador = {
    nome: "Carlos",
    curso: "Engenharia",
    empresa: "Tech Corp",
    cargo: "Desenvolvedor"
};

console.log(estudanteTrabalhador); 
// Saída: { nome: "Carlos", curso: "Engenharia", empresa: "Tech Corp", cargo: "Desenvolvedor" }
