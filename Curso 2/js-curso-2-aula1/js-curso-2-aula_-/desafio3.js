// Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.
alert("Calcule seu imc de forma simples, responda as perguntas a seguir:")
let peso = parseInt(prompt("Digite seu peso:"));
let altura = parseInt(prompt("Digite sua altura:"));

function imc(a, b) {
    return alert(`O seu imc é: ` + a / b * b);
}
imc(peso, altura);

// Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.

alert("Digite um número, e vou exibir o resultado fatorial dele!");

let numero = parseInt(prompt("Digite um número:"));
let resultado = fatorial(numero);
alert(`O fatorial de ${numero} é ${resultado}`);

function fatorial(numero) { 
    if (numero === 0 || numero === 1) { 
        return 1; 
    } 
    return numero * fatorial(numero - 1); 
}

// Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.

let valorEmDolar = parseFloat(prompt("Digite o valor em dólares:"));
let valorEmReais = converterParaReais(valorEmDolar);
alert(`O valor de $${valorEmDolar.toFixed(2)} em reais é R$${valorEmReais.toFixed(2)}`);

function converterParaReais(dolar) {
    const cotacaoDolar = 6.06;
    return dolar * cotacaoDolar;
}

// Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.
function calcularAreaEPerimetro() {
    let altura = parseFloat(prompt("Digite a altura da sala (em metros):"));
    let largura = parseFloat(prompt("Digite a largura da sala (em metros):"));

    let area = altura * largura;
    let perimetro = 2 * (altura + largura);

    alert(`A área da sala é: ${area} m²`);
    alert(`O perímetro da sala é: ${perimetro} m`);
}

calcularAreaEPerimetro();


// Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.
function calcularAreaEPerimetroCircular() {
    alert("Vamos iniciar o cálculo!");

    let raio = parseFloat(prompt("Digite o raio da sala (em metros):"));
    const pi = 3.14;

    let area = pi * raio * raio;
    let perimetro = 2 * pi * raio;

    alert(`A área da sala circular é: ${area} m²`);
    alert(`O perímetro da sala circular é: ${perimetro} m`);
}

calcularAreaEPerimetroCircular();



// Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.
function mostrarTabuada() {
    alert("Vamos iniciar a tabuada!");
    
    let numero = parseInt(prompt("Digite um número para ver a tabuada:"));

    let mensagem = `Tabuada do ${numero}:\n`;
    for (let i = 1; i <= 10; i++) {
        mensagem += `${numero} x ${i} = ${numero * i}\n`;
    }

    alert(mensagem);
}


mostrarTabuada();





