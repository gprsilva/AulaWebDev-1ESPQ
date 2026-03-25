// let a = 5, b = 10;

// console.log(a == b);   // false (igualdade)
// console.log(a === b);  // false (igualdade estrita)
// console.log(a != b);   // true (diferente)
// console.log(a !== b);  // true (diferente estrito)
// console.log(a < b);    // true (menor que)
// console.log(a > b);    // false (maior que)
// console.log(a <= b);   // true (menor ou igual)
// console.log(a >= b);   // false (maior ou igual)


// let idade = 25;
// let temCarteira = false;

// if (idade>=18 && temCarteira){
//     console.log("Pode dirigir.")
// }

// else if( idade < 18 || !temCarteira){
//     console.log("Não pode dirigir.")
// }

// if(!temCarteira){
//     console.log("Não pode dirigir, pois ainda precisa de carteira.")
// }


// let tarefaConcluida = true;

// if (tarefaConcluida) {
//   console.log("A tarefa está concluída!");
// }


// let prioridade = 2; // 1: baixa, 2: média, 3: alta

// if (prioridade === 1) {
//   console.log("Prioridade Baixa");
// } else if (prioridade === 2) {
//   console.log("Prioridade Média");
// } else if (prioridade === 3) {
//   console.log("Prioridade Alta");
// } else {
//   console.log("Prioridade desconhecida");
// }

// let diaSemana= new Date().getDay()
// switch (diaSemana) {
//     case 0:
//         console.log("Domingo")
//         break;
//     case 1:
//         console.log("Segunda")
//         break;
//     case 2:
//         console.log("Terça")
//         break;
//     case 3:
//         console.log("Quarta")
//         break;
//     case 4:
//         console.log("Quinta")
//         break;
//     case 5:
//         console.log("Sexta")
//         break;
//     case 6:
//         console.log("Sábado")
//         break;

//     default:
//         console.log("Dia inválido.")
//         break;
// }

// for (let i = 0; i<=5; i++){
//     console.log("Contagem:",i)
// }

// let contador = 0;
// while (contador < 5) {
//     console.log("Contagem:", contador);
//     contador++;

// }

// let numero = 5

// do{
//     console.log("Contagem:", numero)
//     numero--;
// }
// while(numero>0)



//----------------EXERCÍCIO 01----------------


// let nivelAcesso = 1;

// switch (nivelAcesso) {
//     case 2:
//         console.log("Acesso Parcial")
//         break;
//     case 3:
//         console.log("Acesso Total")
//         break;

//     default:
//         console.log("Acesso Negado")
//         break;
// }



//----------------EXERCÍCIO 02----------------

// let nota =6;
// switch (nota) {
//     case 10:
//         console.log("Nota Máxima")
//         break;
//     case 8 || 9:
//         console.log("Muito Bom")
//         break;
//     case 6 || 7:
//         console.log("Bom")
//         break;
//     case 5:
//         console.log("Regular")
//         break;

//     default:
//         console.log("Nota insulficiente.")
//         break;
// }

//----------------EXERCÍCIO 03----------------

// for(let i = 0; i<=10;i++){
//     if ((i%2)==0){
//         console.log(i)
//     }
// }

