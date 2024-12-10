// Criar uma função que exibe "Olá, mundo!" no console.
function saudacao() { 
    console.log("Olá, mundo!"); 
}

// Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
let nome = prompt("Digite seu nome:");

function nomes() {
    alert(`Olá, ${nome}!`);
}

// Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.

let resultadoDobro = dobro(parseInt(prompt("Digite um número:")));
  console.log(resultadoDobro);

        function dobro(numero) {
            return numero * 2;
        }

// Criar uma função que recebe três números como parâmetros e retorna a média deles. 

alert("Digite 3 números e calcule a média!")

let number1 = parseInt(prompt("Digite o primeiro número:"));
let number2 = parseInt(prompt("Digite o segundo número:"));
let number3 = parseInt(prompt("Digite o terceiro número:"))
let media = calcularMedia(number1, number2, number3);
console.log(media);

        function calcularMedia(number1, number2, number3) {
            return (number1 + number2 + number3) / 3;
        }


// Criar uma função que recebe dois números como parâmetros e retorna o maior deles.

alert("Bem vindo! Digite dois números e direi o maior deles!");

let number1 = parseInt(prompt("Digite o primeiro Número:"));
let number2 = parseInt(prompt("Digite o segundo Número:"));

function doisNumeros(n1, n2) {
    return n1 > n2 ? alert(n1) : alert(n2)
 }
doisNumeros(number1, number2);
  
// Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo
alert("Me diga um número que irei multiplicar ele, por ele mesmo:")
let number1 = prompt("Digite um número:");

function numero(n1) {
    return alert(`O dobro de ${number1} é: ` + n1 * n1);
}

numero(number1);
