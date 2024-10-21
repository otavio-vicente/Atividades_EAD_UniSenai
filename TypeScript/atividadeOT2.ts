// Tipos básicos
let numero: number = 10;
let texto: string = "Olá, TypeScript!";
let booleano: boolean = true;

console.log(numero);
console.log(texto);
console.log(booleano);

// Tentando atribuir valores incorretos
// numero = "string"; // Isso causaria um erro de compilação
// texto = 123; // Isso também causaria um erro
// booleano = 1; // Erro de compilação

function somaNumeros(numeros: number[]): number {
    return numeros.reduce((acumulador, atual) => acumulador + atual, 0);
}

const resultado = somaNumeros([1, 2, 3, 4, 5]);
console.log(resultado); // Saída: 15

enum DiasDaSemana {
    Domingo,
    Segunda,
    Terça,
    Quarta,
    Quinta,
    Sexta,
    Sábado
}

function mensagemPorDia(dia: DiasDaSemana): void {
    switch (dia) {
        case DiasDaSemana.Domingo:
            console.log("Hoje é domingo!");
            break;
        case DiasDaSemana.Segunda:
            console.log("Hoje é segunda-feira.");
            break;
        // Adicione outros dias conforme necessário
        default:
            console.log("Dia da semana não reconhecido.");
    }
}

mensagemPorDia(DiasDaSemana.Segunda); // Saída: Hoje é segunda-feira.

type Produto = [string, number];

function imprimirProduto(produto: Produto): void {
    const [nome, preco] = produto;
    console.log(`Produto: ${nome}, Preço: R$${preco.toFixed(2)}`);
}

const meuProduto: Produto = ["Camiseta", 29.99];
imprimirProduto(meuProduto); // Saída: Produto: Camiseta, Preço: R$29.99

let variavelAny: any;

variavelAny = 5; // Número
console.log(variavelAny);

variavelAny = "Agora sou uma string!"; // String
console.log(variavelAny);

variavelAny = true; // Booleano
console.log(variavelAny);

function funcaoVoid(): void {
    console.log("Esta função não retorna nada.");
}

function funcaoUndefined(): undefined {
    console.log("Esta função retorna undefined.");
    return undefined;
}

funcaoVoid(); // Saída: Esta função não retorna nada.
funcaoUndefined(); // Saída: Esta função retorna undefined.

//Comparação entre Void e Undefined
/*Void: Usado quando uma função não retorna valor (ou não deve retornar).
Undefined: Usado quando você explicitamente quer retornar um valor indefinido.*/