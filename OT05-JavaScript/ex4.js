function calculaIMC(peso, alt){
    return peso / (alt * alt);
}
//peso/(altura x altura)

let imc = calculaIMC(95, 1.75);
console.log(imc); 