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
