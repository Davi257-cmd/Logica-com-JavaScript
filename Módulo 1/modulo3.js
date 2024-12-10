// alert('Boas vindas ao jogo do número secreto');
// let numeroSecreto = parseInt(Math.random() * 100 + 1);
// console.log(numeroSecreto);
// let chute;
// let tentativas = 1;

// enquanto chute não for igual ao n.s.
// while (chute != numeroSecreto) {
//     chute = prompt('Escolha um número entre 1 e 100');
//     // se chute for igual ao número secreto
//     if (chute == numeroSecreto) {
//         break;
//     } else {
//         if (chute > numeroSecreto) {
//             alert(`O número secreto é menor que ${chute}`);
//         } else {
//             alert(`O número secreto é maior que ${chute}`);
//         }
//         // tentativas = tentativas + 1;
//         tentativas++;
//     }
// }

// let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
// alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);

// if (tentativas > 1) {
//     alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas.`);
// } else {
//     alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa.`);
// }




// Atividades;
// Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.
alert("Bem vindo ao contador e 1 a 10")
let contador = 1

while(contador <= 10) {
    console.log(alert(contador));
    contador++;
}


// Crie um contador que começa em 10 e vá até 0 usando um loop while. Mostre cada número.

alert("Bem vindo ao contador e 10 a 0")
let contador = 10

while(contador >= 0) {
    console.log(alert(contador));
    contador--;
}

// Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.

alert("Bem vindo ao contador")

let contador = prompt("Digite um número:")

while(contador >=0) {
    console.log(alert(contador));
    contador--;
}

// Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.
let numeroFinal = parseInt(prompt("Digite um número:"));
let contador = 0;

while (contador <= numeroFinal) {
    console.log(alert(contador));
    contador++;
}
