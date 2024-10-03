/*1. Criar e Adicionar Valores ao Set: Crie um Set chamado frutas e
adicione nele três frutas diferentes. Depois, tente adicionar uma fruta
que já está no Set.

2. Verificar Valores no Set: Use o método has para verificar se uma fruta
específica está no seu Set frutas.

3. Remover Valores do Set: Use o método delete para remover uma fruta
do seu Set frutas.

4. Limpar o Set: Use o método clear para limpar todo o seu Set frutas.

5. Tamanho do Set: Crie um Set com vários valores e use a propriedade
size para imprimir o número de elementos no Set.

6. Iterar Sobre um Set: Use um loop for...of para iterar sobre o seu Set
e imprimir cada valor.

7. Criar um Set a Partir de um Array: Crie um array com alguns valores
duplicados. Em seguida, crie um Set a partir desse array para remover
as duplicatas.
*/

//let frutas = ["maçã", "banana"];
let frutasUnicas = new Set();
frutasUnicas.add("banana");
frutasUnicas.add("maçã");
frutasUnicas.add("pêra");
frutasUnicas.add("banana");

console.log("===========================================");
console.log("Conteúdo dentro do Set inserido pelo 'add':");
for(let nome of frutasUnicas){
    console.log(nome);
}

console.log("===========================================");
console.log("A presença do item solicitado é: " + frutasUnicas.has("maçã"));
console.log("===========================================");

frutasUnicas.delete("banana");
console.log("Set após delete:");
for(let nome of frutasUnicas){
    console.log(nome);
}
console.log("===========================================");

frutasUnicas.clear();
console.log("Set após clear:");
for(let nome of frutasUnicas){
    console.log(nome);
}
console.log("===========================================");

let valores = [1, 2, 3, 4, 5];
let valoresUnicos = new Set(valores);
console.log("Tamanho Set Valores (size): " + valoresUnicos.size);
console.log("Conteúdo do Set: ");

for(let valor of valoresUnicos){
    console.log(valor);
}

console.log("===========================================");

let valoresDuplicados = [1, 2, 1, 4, 2, 3];
let valoresAnulaDuplicata = new Set(valoresDuplicados);
console.log("Conteúdo valores sem duplicação de valores: ");

for(let valor of valoresAnulaDuplicata){
    console.log(valor);
}













