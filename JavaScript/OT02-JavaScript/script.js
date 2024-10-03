let animais = [];

animais.push("Cachorro", "Lobo", "Guepardo");
alert("Array no Exercício 1: " + animais + ".");

animais.shift(1);
alert("Array no Exercício 2: " + animais + ".");

animais.unshift("Búfalo", "Avestruz");
alert("Array no Exercício 3: " + animais + ".");

animais[2] = "Girafa";
alert("Array no Exercício 4: " + animais + ".");

let frutas = ["Abacate", "Kiwi", "Pêra"];
alert("Array no Exercício 5 com a quantidade de frutas declaradas: " + frutas.length + ".");

for(let i=0; i<frutas.length; i++){
    alert("Exercício 6: Fruta da posição " + (i) + " do array frutas = " + (frutas[i] + "."))
}







