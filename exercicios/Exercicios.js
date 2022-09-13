//Construa uma função que leia 3 números representando os lados de um triangulo, e determine se eles formam um triangulo equilátero, isósceles ou escaleno. Exemplo: Lado A=1, lado B=2, lado C=3 formam um triangulo escaleno, Lado A=1, lado B=1, lado C=2 formam um isósceles, Lado A=3, lado B=3, lado C=3 formam um equilátero, e Lado A=1, lado B=2, lado C=5 não formam um triangulo válido

function triangulos(a = 2, b = 5, c = 10) {
  if (a === b && b === c && c === a) {
    document.getElementById("triangulo").innerHTML = `triangulo equilatero`;
  } else if (a === b || b === a || c === a) {
    document.getElementById("triangulo").innerHTML = "Triangulo isósceles ";
  } else if (a > b || b > a || c > b) {
    document.getElementById("triangulo").innerHTML = "Triangulo escaleno ";
  } else {
    document.getElementById("triangulo").innerHTML =
      "não é um triangulo válido";
  }
}

triangulos(1, 2, 3);



//Crie um programa capaz de calcular a função matemática "fatorial". Se possível resolva utilizando recursividade
function fatorialRecursivo(n) {
  if (n === 0) return 1;
  if (n === 1) return 1;
  return n * fatorialRecursivo(n - 1);
}
document.getElementById(
  "fatorialRecursivo"
).innerHTML = `Este é o resultado utilizando Recursividade: ${fatorialRecursivo(
  10
)}`;


//Crie um programa capaz de calcular a função matemática "fatorial". Se possível resolva utilizando laços de repetição
function Fatorial(n) {
  let resultado = n;
  for (let i = 1; i < n; i++) {
    resultado = resultado * i;
  }
  return resultado;
}
document.getElementById(
  "FatorialRepeticao"
).innerText = `Este é o resultado para FATORIAL de: ${Fatorial(5)}`;



//Crie um programa utilizando orientação a objetos para um dos exercícios anteriores






//Crie um programa que receba uma palavra ou frase e mostre o texto invertido. Exemplo: "programação" deve aparecer como "oãçamargorp"
const palavra = "Marcos";

let palavraReverse = "";
for (let i = palavra.length - 1; i >= 0; i--) {
  palavraReverse += palavra[i];
}
document.getElementById(
  "inverse"
).innerHTML = `A palavra ${palavra} ao contrário fica ${palavraReverse}`;

//Crie um programa capaz de mostrar a sequencia de Fibonacci até o n-ésimo termo desejado. Exemplo para n=6 a saída deverá ser: 1,1,2,3,5,8
function fibonacci(n) {
  if (n === 1) return 1;
  if (n === 2) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(n)



//- Crie uma tabela "Pessoa" com os seguintes campos:CPF, Nome Completo, Idade (o correto seria Data de Nascimento, mas para este teste IDADE está adequado) e telefone. Crie uma chave primária de acordo com o que voce achar apropriado e justifique sua escolha.

//create table pessoa(idPessoa integer PRIMARY KEY, CPF varchar(14), nomeCompleto varchar(100), idade integer, telefone varchar(20))




