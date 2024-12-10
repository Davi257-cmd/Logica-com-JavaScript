//Atividades:
// Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".

let diaDaSemana = prompt("Que dia da Semana é hoje?");

if (diaDaSemana === "sabado" || diaDaSemana === "domingo") {
    alert("Bom fim de Semana!");
} else {
    alert("Boa Semana!");
}

// Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.
let numero = prompt("Digite um número:");

if (numero > 0) {
    alert("O número é Positivo!");
} else {
    if (numero < 0)
    alert("O número é negativo!");
}

// Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.".
let jogo = prompt("Digite um numero:");

if (jogo >= 100) {
    alert("Parabéns, você venceu!");
} else {
    alert("Tente Novamente para Ganhar!");
}


// Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.
 
let saldoDaConta = 500
alert(`Seu saldo é de ${saldoDaConta}`);


// Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.
let nome = prompt("Digite seu nome:");
alert(`Seja bem vindo ao nosso site ${nome}`);