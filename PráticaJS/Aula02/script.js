//--------------- Exercícios Aula 02 ---------------

//1.Crie uma variável nivelAcesso (1, 2 ou 3). Se o acesso for 3, exiba "Acesso Total"; se for 2, exiba "Acesso Parcial"; senão, exiba "Acesso Negado".
// let nivelAcesso = 3;
// if (nivelAcesso ===3){
//     console.log("Acesso Total");
// }
// else if (nivelAcesso === 2){
//     console.log("Acesso Parcial");
// }
// else{
//     console.log("Acesso Negado");
// }

//2.Crie uma variável nota. Use o switch para avaliar:
// -Se 10, exiba "Nota Máxima".
// -Se 8 ou 9, exiba "Muito Bom".
// -Se 6 ou 7, exiba "Bom".
// -Se 5, exiba "Regular".
// -Caso contrário, exiba "Nota insuficiente"
// let nota = 8;

// switch (nota) {
//     case 10:
//         console.log("Nota Máxima");
//         break;
//     case 9:
//     case 8:
//         console.log("Muito Bom");
//         break;
//     case 7:
//     case 6:
//         console.log("Bom");
//         break;
//     case 5:
//         console.log("Regular");
//         break;
//     default:
//         console.log("Nota insuficiente");
// }

//3.Use um for para exibir apenas os números pares de 1 a 10 no console.
// for(let i = 1; i<=10;i++){
//     if(i % 2 === 0){
//         console.log(i)
//     }
//     else{
//         continue
//     }
// }

//4. Usando um while, some todos os números de 1 a 5 e exiba o resultado.
// let soma=0;
// let i = 1;
// while(i<=5){
//     soma+=i;
//     i++;
// }
// console.log(soma);

//5.Crie uma contagem regressiva usando do/while que inicie em 3 e vá até 1, exibindo "FIM!" ao término.
// let i =3;
// do{
//     console.log(i);
//     i--;
// }while(i>0);
// console.log("FIM!");

//6. Peça ao usuário dois valores (prompt() ou atribuições diretas) e um operador (+, -, *, /). Use switch
//  para realizar a operação e exibir o resultado.

// let valor1 = Number(prompt("Digite o primeiro número:"))
// let valor2 = Number(prompt("Digite o segundo número:"))
// let operador = prompt("Digite o operador (+, -, *, /):")

// switch(operador){
//     case "+":
//         console.log(`Resultado: ${valor1 + valor2}`);
//         break;
//     case "-":
//         console.log(`Resultado: ${valor1 - valor2}`);
//         break;
//     case "*":
//         console.log(`Resultado: ${valor1 * valor2}`);
//         break;
//     case "/":
//         if (valor2 !== 0) {
//             console.log(`Resultado: ${valor1 / valor2}`); 
//         } else {
//             console.log("Erro: Divisão por zero não é permitida.");
//         }
//         break;
//     default:
//         console.log("Operador inválido. Por favor, use +, -, * ou /.");
// }

//7.Crie um sistema que receba uma nota (0-10) e calcule a média de 3 notas. Use condicionais para determinar o conceito:
// A (9-10): Excelente
// B (7-8.9): Bom
// C (5-6.9): Regular
// D (3-4.9): Insuficiente
// F (0-2.9): Reprovado

// let nota1 = Number(prompt("Digite a primeira nota (0-10):"));
// let nota2 = Number(prompt("Digite a segunda nota (0-10):"));
// let nota3 = Number(prompt("Digite a terceira nota (0-10):"));
// let media = (nota1 + nota2 + nota3) / 3;

// switch (media){
//     case media >= 9 && media <= 10:
//         console.log("Conceito A: Excelente");
//         break;
//     case media >= 7 && media < 9:
//         console.log("Conceito B: Bom");
//         break;
//     case media >= 5 && media < 7:
//         console.log("Conceito C: Regular");
//         break;
//     case media >= 3 && media < 5:
//         console.log("Conceito D: Insuficiente");
//         break;
//     case media >= 0 && media < 3:
//         console.log("Conceito F: Reprovado");
//         break;
// }

//8.Crie um programa que gere a tabuada de um número usando diferentes tipos de loops. Compare os resultados
// let numero = Number(prompt("Digite um número para gerar a tabuada:"));
// console.log("Tabuada usando for:");
// for(let i = 1; i <= 10; i++){
//     console.log(`${numero} x ${i} = ${numero * i}`);
// }
// console.log("Tabuada usando while:");
// let i = 1;
// while(i <= 10){
//     console.log(`${numero} x ${i} = ${numero * i}`);
//     i++;
// }
// console.log("Tabuada usando do/while:");
// i = 1;
// do{
//     console.log(`${numero} x ${i} = ${numero * i}`);
//     i++;
// } while(i <= 10);