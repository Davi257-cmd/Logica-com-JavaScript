// Agora, caso a idade seja maior ou igual que 18, exiba um alerta com a mensagem "Pode tirar a habilitação!".

// alert ("Bem vindo ao site para tirar sua habilitação");
// let idade = prompt("Digite sua idade")

// if (idade >= 18) {
    // console.log(alert("Pode tirar habilitação!"))
// } else {
    // console.log(alert("Não pode tirar habilitção!"))
// }

// alert('Boas vindas ao jogo do número secreto');
// let numeroSecreto = 5;
// console.log(numeroSecreto)
// let chute = prompt('Escolha um número entre 1 e 10');

// se chute for igual ao número secreto
// if (chute == numeroSecreto) {
    // alert('Isso ai! Você descobriu o número secreto (5)');
// } else {
    // alert('Você errou :(')
// }


alert('Boas vindas ao jogo do número secreto');

// Adicione um console.log para verificar o valor de "chute" após a entrada do usuário
let chute = prompt('Escolha um número entre 1 e 10');
console.log('Valor do chute:', chute);

let numeroSecreto = 4;

// Adicione um console.log para verificar a comparação entre "chute" e "numeroSecreto"
console.log('Resultado da comparação:', chute == numeroSecreto);

if (chute == numeroSecreto) {
    alert('Acertou');
} else {
    // Adicione um console.log para verificar o valor de "numeroSecreto" quando o jogador erra
    console.log('Valor do número secreto:', numeroSecreto);
    alert('O número secreto era ' + numeroSecreto);
}