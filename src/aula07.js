// 1. Interfaces e Tipagem Avançada
var usuario1 = {
    nome: "Ana",
    idade: 25
};
console.log(usuario1); // Saída: { nome: "Ana", idade: 25 }
var somar = function (x, y) { return x + y; };
console.log(somar(10, 5)); // Saída: 15
var meuCachorro = {
    nome: "Rex",
    idade: 4,
    raca: "Labrador"
};
console.log(meuCachorro); // Saída: { nome: "Rex", idade: 4, raca: "Labrador" }
// 2. Generics
// **O que são Generics?**
// Generics permitem a criação de código reutilizável e flexível, permitindo que uma função, interface ou classe 
// trabalhe com diferentes tipos sem perder a segurança da tipagem.
function retornarElemento(elemento) {
    return elemento;
}
console.log(retornarElemento(10)); // Saída: 10
console.log(retornarElemento("Olá TypeScript")); // Saída: "Olá TypeScript"
var respostaTexto = {
    data: "Dados recebidos com sucesso!",
    sucesso: true
};
var respostaNumerica = {
    data: 200,
    sucesso: true
};
console.log(respostaTexto); // Saída: { data: "Dados recebidos com sucesso!", sucesso: true }
console.log(respostaNumerica); // Saída: { data: 200, sucesso: true }
// **Generics em Classes**
// Classes também podem se beneficiar do uso de Generics.
var Caixa = /** @class */ (function () {
    function Caixa(conteudo) {
        this.conteudo = conteudo;
    }
    Caixa.prototype.obterConteudo = function () {
        return this.conteudo;
    };
    return Caixa;
}());
var caixaNumerica = new Caixa(100);
console.log(caixaNumerica.obterConteudo()); // Saída: 100
var caixaTexto = new Caixa("Presente");
console.log(caixaTexto.obterConteudo()); // Saída: "Presente"
// **Exemplo com Array**
var Lista = /** @class */ (function () {
    function Lista() {
        this.itens = [];
    }
    Lista.prototype.adicionarItem = function (item) {
        this.itens.push(item);
    };
    Lista.prototype.obterItens = function () {
        return this.itens;
    };
    return Lista;
}());
var listaNumeros = new Lista();
listaNumeros.adicionarItem(5);
listaNumeros.adicionarItem(10);
console.log(listaNumeros.obterItens()); // Saída: [5, 10]
var listaPalavras = new Lista();
listaPalavras.adicionarItem("Olá");
listaPalavras.adicionarItem("TypeScript");
console.log(listaPalavras.obterItens()); // Saída: ["Olá", "TypeScript"]
function buscarUsuario(id) {
    console.log("Buscando usu\u00E1rio com ID: ".concat(id));
}
buscarUsuario(123); // Saída: Buscando usuário com ID: 123
buscarUsuario("abc123"); // Saída: Buscando usuário com ID: abc123
// **Union Types**
// Union Types permitem que uma variável aceite múltiplos tipos de dados.
var resposta;
resposta = "Sucesso";
console.log(resposta); // Saída: "Sucesso"
resposta = true;
console.log(resposta); // Saída: true
var funcionario1 = {
    nome: "Carlos",
    idade: 35,
    cargo: "Engenheiro",
    salario: 5000
};
console.log(funcionario1);
var produtoParcial = {
    nome: "Notebook"
};
console.log(produtoParcial); // Saída: { nome: "Notebook" }
// 4. Boas Práticas em TypeScript
// **Use Tipos Específicos Sempre que Possível**
// Evite o uso de any, pois ele anula as vantagens da tipagem estática.
var valorCerto = "Teste";
var configApp = { versao: "1.0.0" };
// configApp.versao = "1.1.0"; // Erro! Não pode alterar a propriedade "versao"
// **Documente Seu Código**
/**
 * Soma dois números e retorna o resultado.
 * @param a Primeiro número
 * @param b Segundo número
 * @returns Soma dos dois valores
 */
function somarValores(a, b) {
    return a + b;
}
var meuCarro = {
    marca: "Fiat",
    modelo: "Uno",
    ano: 2015,
    motor: "1.0"
};
console.log(meuCarro); // Saída: { marca: "Fiat", modelo: "Uno", ano: 2015, motor: "1.0" }
var multiplicar = function (a, b) { return a * b; };
console.log(multiplicar(5, 4)); // Saída: 20
// 2. Generics
// Exercício 3: Função Genérica inverterArray
function inverterArray(arr) {
    return arr.reverse();
}
var numeros = [1, 2, 3, 4, 5];
var strings = ["um", "dois", "três"];
console.log(inverterArray(numeros)); // Saída: [5, 4, 3, 2, 1]
console.log(inverterArray(strings)); // Saída: ["três", "dois", "um"]
var RepositorioUsuarios = /** @class */ (function () {
    function RepositorioUsuarios() {
        this.usuarios = [];
    }
    RepositorioUsuarios.prototype.salvar = function (dado) {
        this.usuarios.push(dado);
    };
    RepositorioUsuarios.prototype.obterTodos = function () {
        return this.usuarios;
    };
    return RepositorioUsuarios;
}());
var repositorio = new RepositorioUsuarios();
repositorio.salvar({ nome: "Maria", email: "maria@email.com" });
repositorio.salvar({ nome: "João", email: "joao@email.com" });
console.log(repositorio.obterTodos()); // Saída: [{ nome: "Maria", email: "maria@email.com" }, { nome: "João", email: "joao@email.com" }]
function processarResposta(resposta) {
    if (typeof resposta === "string") {
        console.log("Mensagem do servidor: ".concat(resposta));
    }
    else {
        console.log("Resposta do servidor: ".concat(resposta ? "Sucesso" : "Falha"));
    }
}
processarResposta("Dados recebidos com sucesso!"); // Saída: Mensagem do servidor: Dados recebidos com sucesso!
processarResposta(true); // Saída: Resposta do servidor: Sucesso
var estudanteTrabalhador = {
    nome: "Carlos",
    curso: "Engenharia",
    empresa: "Tech Corp",
    cargo: "Desenvolvedor"
};
console.log(estudanteTrabalhador);
// Saída: { nome: "Carlos", curso: "Engenharia", empresa: "Tech Corp", cargo: "Desenvolvedor" }
