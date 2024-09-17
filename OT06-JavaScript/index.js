/*
Exercícios para Praticar Objetos:
1. Criar e Acessar um Objeto: Crie um objeto chamado carro com
propriedades como marca, modelo e ano. Em seguida, acesse e
imprima a propriedade modelo do objeto.
2. Adicionar e Modificar Propriedades de um Objeto: A partir do objeto
carro criado, adicione uma propriedade cor e modifique o ano do
carro. Imprima o objeto modificado.
3. Criar um Método em um Objeto: Crie um objeto chamado calculadora
com um método soma que aceite dois números e retorne a soma deles.
4. Iterar Sobre as Propriedades de um Objeto: Dado um objeto, use um
loop for...in para iterar sobre todas as suas propriedades e imprimir
cada uma delas.
5. Entendendo Referências de Objetos: Crie um objeto livro com
propriedades como titulo e autor. Em seguida, crie outra variável
que referencie o objeto livro e modifique a propriedade titulo.
Verifique se o objeto original foi alterado.
6. Usando Métodos Avançados de Objeto: Dado um objeto, use o método
Object.keys() para listar todas as chaves do objeto. Repita o
processo com Object.values() para listar todos os valores
*/

// Exercício 1
let carro = {
    marca: 'Volkswagem',
    modelo: 'Gol',
    ano: '2013'
}
console.log(carro)

// Exercício 2
carro.ano = '2025';
carro.cor = 'Branco';
console.log(carro)

// Exercício 3
const calculadora = {
    soma: function(a, b) {
      return a + b;
    }
  };

  const resultado = calculadora.soma(5, 3);
  console.log("A soma é: " + resultado);

// Exercício 4
const pessoa = {
    nome: "Rafael",
    idade: 19,
    cidade: "Joinville"
  };
  
  for (let propriedade in pessoa) {
    console.log(propriedade + ": " + pessoa[propriedade]);
  }

// Exercício 5
let livro = {
    titulo: 'Histórias do Rafa',
    autor: 'Rafa'
}
console.log(livro);

let novoLivro = livro;
novoLivro.titulo = 'Contos do Rafa';
console.log(livro);  

// Exercício 6
let gol = {
    motor: '1.0',
    consumo: '11,6 KM/L',
    velocidadeMax: '180 KM/H'
}

console.log(Object.keys(gol));
console.log(Object.values(gol));