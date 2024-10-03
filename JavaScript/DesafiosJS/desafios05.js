//Desafio 05
/*
Crie uma variável qualquer, que receba um array com alguns valores
aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/

let valores = [1, 14, 18, 19, 25]

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/

function retornaArray(valores){
    return valores;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/

let retorno = retornaArray(valores);
console.log(retorno[2]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores;
e o
segundo, um número. A função deve retornar o valor de um índice do array
que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o
número passado no
segundo parâmetro.
*/

function segundaFuncao(valores, numero){
    return console.log(valores[numero]);
}
let numero = 4;
retorno = segundaFuncao(valores, numero);

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/

const valoresDiversos = [42, "texto", true, null, { chave: "valor" }];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/

retorno = retornaArray(valoresDiversos);
console.log(retorno);

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome
do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
- `quantidadePaginas` - Number (quantidade de páginas)
- `autor` - String
- `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/

function book(nomeLivro) {
    const livros = {
        "O Senhor dos Anéis": {
            quantidadePaginas: 1216,
            autor: "J.R.R. Tolkien",
            editora: "HarperCollins"
        },
        "1984": {
            quantidadePaginas: 368,
            autor: "George Orwell",
            editora: "Companhia das Letras"
        },
        "Dom Casmurro": {
            quantidadePaginas: 304,
            autor: "Machado de Assis",
            editora: "Companhia das Letras"
        }
    };

    // Retorna o livro específico ou todos os livros se nenhum parâmetro for passado
    return nomeLivro ? livros[nomeLivro] : livros;
}

console.log(book('O Senhor dos Anéis'));


/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/

console.log(book());

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro
qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/

const nomeDoLivro = "O Senhor dos Anéis"; // Escolha o nome do livro
const livro = book(nomeDoLivro);

if (livro) {
    console.log(`O livro ${nomeDoLivro} tem ${livro.quantidadePaginas} páginas!`);
} else {
    console.log("Livro não encontrado.");
}


/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer,
usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
const nomeDoLivro2 = "1984"; // Escolha o nome do livro
const livro2 = book(nomeDoLivro2);

if (livro2) {
    console.log(`O autor do livro ${nomeDoLivro2} é ${livro2.autor}.`);
} else {
    console.log("Livro não encontrado.");
}

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer,
usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
if (livro) {
    console.log(`O livro ${nomeDoLivro} foi publicado pela editora ${livro.editora}.`);
} else {
    console.log("Livro não encontrado.");
}
