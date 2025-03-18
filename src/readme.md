# TypeScript - Aula 25: Introdução ao TypeScript

## Objetivo
Compreender os conceitos básicos do TypeScript e suas vantagens.

## O que é TypeScript?
TypeScript é um superset do JavaScript que adiciona tipagem estática, permitindo detectar erros antes da execução.

## Instalação e Compilação
- **Instalação**:
    ```bash
    npm install -g typescript
    ```
- **Compilação**:
    ```bash
    tsc exemplo.ts
    ```

## Tipos Básicos
- **Variáveis**:
    ```typescript
    let nome: string = "Maria";
    ```
- **Arrays**:
    ```typescript
    let notas: number[] = [8, 9, 10];
    ```
- **Tuplas**:
    ```typescript
    let aluno: [string, number] = ["João", 25];
    ```

## Funções
Exemplo de função com tipagem:
```typescript
function soma(a: number, b: number): number {
    return a + b;
}


# TypeScript - Aula 07: Interfaces e Tipagem Avançada

## Interfaces
As interfaces definem contratos para objetos e classes.

**Exemplo**:
```typescript
interface Usuario {
    nome: string;
    idade: number;
    email?: string; // Propriedade opcional
}

const usuario: Usuario = { nome: "João", idade: 30 };

## Implementação de Interface em Classes

Uma classe implementando uma interface:

```typescript
interface Pessoa {
    nome: string;
    falar(): void;
}

class Estudante implements Pessoa {
    nome: string;
    
    constructor(nome: string) {
        this.nome = nome;
    }

    falar() {
        console.log(`${this.nome} está falando.`);
    }
}

## Tipos de Funções em Interfaces

Definindo funções dentro de uma interface:

```typescript
interface Calculadora {
    somar(a: number, b: number): number;
    subtrair(a: number, b: number): number;
}

class Operacoes implements Calculadora {
    somar(a: number, b: number): number {
        return a + b;
    }

    subtrair(a: number, b: number): number {
        return a - b;
    }
}

## Union Types e Intersection Types

**Union Types**: Permite que uma variável tenha mais de um tipo.

```typescript
let valor: string | number;
valor = "Texto"; // Ok
valor = 123;     // Ok

## Intersection Types

**Intersection Types**: Combina múltiplos tipos em um único tipo.

```typescript
interface Animal {
    nome: string;
}

interface Mamifero {
    temPelos: boolean;
}

type AnimalMamifero = Animal & Mamifero;

const cachorro: AnimalMamifero = { nome: "Rex", temPelos: true };

## Generics

Funções genéricas permitem trabalhar com diferentes tipos sem perder a segurança da tipagem:

```typescript
function retornarElemento<T>(elemento: T): T {
    return elemento;
}

const numero = retornarElemento(123);  // tipo inferido como number
const texto = retornarElemento("Olá Mundo");  // tipo inferido como string

## Tipos Literais

Permite especificar um valor exato para uma variável:

```typescript
let cor: "vermelho" | "verde" | "azul";
cor = "vermelho"; // Ok
cor = "amarelo"; // Erro

## Tipagem Avançada com Type Aliases

Criar nomes alternativos para tipos complexos:

```typescript
type ID = string | number;
const userId: ID = 123;  // ou "abc"


## Conclusão

Nas aulas de **Introdução ao TypeScript** (Aula 25) e **Interfaces e Tipagem Avançada** (Aula 07), aprendi conceitos fundamentais que vão me ajudar a escrever códigos mais seguros e eficientes. Na primeira aula, entendi como o TypeScript melhora o desenvolvimento ao adicionar tipagem estática ao JavaScript, facilitando a detecção de erros antes da execução e tornando o código mais fácil de manter. Vi como utilizar tipos básicos, arrays, tuplas, enums e funções, além de aprender sobre a implementação de classes e modificadores de acesso, que ajudam a organizar melhor o código.

Na segunda aula, me aprofundei em **interfaces** e **tipagem avançada**, como **Union Types**, **Intersection Types**, **Generics**, **Tipos Literais** e **Type Aliases**. Com essas ferramentas, posso criar tipos mais flexíveis e complexos, melhorando a organização e a segurança do código. Isso me dá a capacidade de criar funções mais genéricas, trabalhar com tipos compostos e até especificar valores exatos para variáveis, o que deixa o código mais robusto e confiável.

Agora, estou mais preparado para aplicar esses conceitos em meus projetos e criar soluções modernas e escaláveis, aproveitando ao máximo o poder do TypeScript.

