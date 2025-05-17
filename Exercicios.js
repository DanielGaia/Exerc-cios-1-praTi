const prompt = require('prompt-sync')();


//1. Escreva um programa que recebe um númerointeiro e verifica se ele é par ou ímpar
// utilizando uma estrutura de controle if.
 

// let numEscolhido = Number(prompt("Escolha um número: "))

// if (numEscolhido % 2 === 0) {
//     console.log("O seu número escolhido é par");
// } else {
//     console.log("O seu número escolhido é ímpar");
// }


//  2. Crie um programa que classifica a idade de uma pessoa em categorias (criança,
//  adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de
//  controle if-else

// let idade = Number(prompt("Qual a sua idade?"));

// if (idade <= 12) {
//     console.log("Você é uma criança");
// } else if (idade > 12 && idade < 18) {
//     console.log("Você é um adolescente");
// } else if (idade >= 18 && idade < 65) {
//     console.log("Você é um adulto");
// } else {
//     console.log("Você é um idoso");
// }

// 3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como
//  "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if

// notaAluno = Number(prompt("Digite sua nota: "))

// if(notaAluno >= 7){
//     console.log("Você passou")
// }else if(notaAluno >=5 && notaAluno < 7){
//     console.log("Você está de recuperação")
// }else{
//     console.log("Você está reprovado")
// }

//  4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
//  Utilize switch-case para implementar a lógica de cada opção selecionada


// console.log("Menu Interativo:");
// console.log("1 - Olá, tudo Bem?");
// console.log("2 - Mostrar o dia atualizado");
// console.log("3 - Sair");

// let opcao = prompt("Escolha uma opção (1, 2 ou 3): ");

// switch (opcao) {
//     case "1":
//         console.log("Olá! Espero que você esteja bem. 😊");
//         break;
//     case "2":
//         console.log(`A data atual é: ${new Date().toLocaleDateString()}`);
//         break;
//     case "3":
//         console.log("Até mais!");
//         break;
//     default:
//         console.log("Opção inválida. Escolha 1, 2 ou 3.");
// }

//  5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
//  determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
//  utilizando if-else

    // peso = Number(prompt("Digite o seu peso: "))
    // altura = Number(prompt("Digite sua altura: "))

    // calcImc = peso / (altura*altura)

    // if(calcImc >= 16 && calcImc <= 18.49){
    //     console.log("Voce está abaixo do peso ideal")
    // }else if(calcImc >= 18.50 && calcImc <= 24.99){
    //     console.log("Você está no peso ideal")
    // }else if(calcImc >= 25 && calcImc <= 29.99){
    //     console.log("Você está com sobrepeso")
    // }else {
    //     console.log("Você está com obesidade")
    // }

//     6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
//  formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
//  Isósceles, escaleno ou eqüilátero
    
// let ladoA = Number(prompt("Digite o Lado A: "))
// let ladoB = Number(prompt("Digite o Lado B: "))
// let ladoC = Number(prompt("Digite o Lado C: "))

// if(ladoA === ladoB && ladoB === ladoC){
//     console.log("Seu triângulo é um Equilátero")
// }else if(ladoA === ladoB || ladoB === ladoC || ladoA === ladoC){
//     console.log("Seu triângulo é um isósceles")
// }else if(ladoA !== ladoB && ladoB !== ladoC){
//     console.log("Seu triângulo é um escaleno")
// }else{
//     console.log("Não é um triângulo")
// }

// 7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, eR$0,25se
//  forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
//  compradas, calcule e escreva o valor total da compra


// macasCompradas = Number(prompt("Quantas maças foram compradas: "))
// let valorUnidade;
// let total;

// if(macasCompradas >= 12){
//     valorUnidade = 0.25
// }else{
//     valorUnidade = 0.30
// }

// total = macasCompradas * valorUnidade

// console.log(`O total da compra é: R$ ${total.toFixed(2)}`)

// 8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
//  e escreve-los em ordem crescente.

// let numero1 = Number(prompt("Digite o seu primeiro numero: "))
// let numero2 = Number(prompt("Digite o seu segundo numero(Diferente do primeiro): "))

// if(numero1 !== numero2){
//     if(numero1 < numero2){
//      console.log(`Números em ordem crescente: ${numero1}, ${numero2}`);
// } else {
//     console.log(`Números em ordem crescente: ${numero2}, ${numero1}`);
// }
// }else{
//     console.log(("Desculpe, o segundo número não pode ser igual ao primeiro"))
   
// }

//  9. Implemente um programa que exibe uma contagem regressiva de 10 até1 no console
//  utilizando um loop for

// for(let i = 10; i >= 1; i--){
//     console.log(i)
// }
//  10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes

// let numero = Number(prompt("Digite um número inteiro: "));

// for (let i = 1; i <= 10; i++) {
//     console.log(`Repetição ${i}: ${numero}`);
// }

//  11 Escreva um programa que solicita ao usuário 5 números e calcula a soma total
//  utilizando um loop for

// let soma = 0;

// for (let i = 1; i <= 5; i++) {
//     let numero = Number(prompt(`Digite o ${i}º número: `));
//     soma += numero;
// }

// console.log(`A soma total dos números é: ${soma}`);

//  12. Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a
//  10) utilizando um loop for

// let numero = Number(prompt("Digite um número para ver a tabuada: "));

// console.log(`Tabuada do ${numero}:`);
// for (let i = 1; i <= 10; i++) {
//     console.log(`${numero} x ${i} = ${numero * i}`);
// }

//  13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
//  a média aritmética desses números

// let soma = 0;
// let contador = 0;

// while (true) {
//     let numero = Number(prompt("Digite um número decimal (ou 0 para sair): "));

//     if (numero === 0) {
//         break; 
//     }

//     soma += numero;
//     contador++;
// }

// if (contador > 0) {
//     let media = soma / contador;
//     console.log(`A média aritmética dos números digitados é: ${media.toFixed(2)}`);
// } else {
//     console.log("Nenhum número foi inserido para calcular a média.");
// }

//  14 Crie um programa que calcula o fatorial de um número fornecido pelo usuário
//  utilizando um loop for ou while

// let numero = Number(prompt("Digite um número para calcular o fatorial: "));
// let fatorial = 1;
// let i = numero;

// while (i > 1) {
//     fatorial *= i;
//     i--;
// }

// console.log(`O fatorial de ${numero} é: ${fatorial}`);

// 15 - Escreva um programa que gera e imprime os primeiros 10 números da sequência de
//  Fibonacci utilizando um loop for

// let a = 0, b = 1, temp;

// console.log("Sequência de Fibonacci (10 primeiros números):");
// console.log(a);
// console.log(b);

// for (let i = 2; i < 10; i++) {
//     temp = a + b;
//     console.log(temp);
//     a = b;
//     b = temp;
// }
