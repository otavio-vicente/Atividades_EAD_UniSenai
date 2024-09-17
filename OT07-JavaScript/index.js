/*Exercícios para Praticar:
1. Criar e Adicionar Pares Chave-Valor no Map: Crie um Map chamado
livros e adicione nele três pares de chave-valor, onde a chave é o
título do livro e o valor é o autor.
2. Acessar Valor no Map: Acesse o valor associado a uma das chaves no
Map livros que você criou e imprima o nome do autor.
3. Iterar Sobre um Map: Use um loop for...of para iterar sobre o Map
livros e imprimir todos os pares chave-valor.
4. Usando Métodos do Map: size, delete, has: No seu Map livros, use o
método size para imprimir o número de livros, delete para remover um
livro pelo título e has para verificar se um livro ainda está no Map.
5. Map com Tipos de Chaves Diferentes: Crie um Map chamado colecao
que contém diferentes tipos de chaves (como string, number, object)
e seus respectivos valores.*/

// Exercício 1
let livro = new Map();
livro.set('Tupiniquins: A origem', 'Felipe Indigena Rothbart');
livro.set('Marchadores', 'Sorriso');
livro.set('Openhaimer', 'Lucas Boleia');
console.log(livro);

// Exercício 2
console.log("\n" + "Autor: " + livro.get('Tupiniquins: A origem'));

// Exercício 3
console.log("\n");
for (let [chave, valor] of livro) {
    console.log(`${chave}: ${valor}`);
}

// Exercício 4
console.log(livro.size);
livro.delete('Marchadores');
console.log(livro.has('Marchadores'));

// Exercício 5
const colecao = new Map();

colecao.set('chaveString', 'Este é um valor de string');
colecao.set(42, 'Este é um valor de número');
colecao.set(true, 'Este é um valor booleano');

const objetoChave = { nome: 'objeto' };
colecao.set(objetoChave, 'Este é um valor de objeto');

console.log(colecao);

console.log(colecao.get('chaveString'));  
console.log(colecao.get(42));           
console.log(colecao.get(true));         
console.log(colecao.get(objetoChave));    

colecao.forEach((valor, chave) => {
  console.log(`Chave: ${chave}, Valor: ${valor}`);
});
