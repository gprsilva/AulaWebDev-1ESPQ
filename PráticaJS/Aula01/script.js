//--------------- Exercícios Aula 01 ---------------

//1. Crie duas variáveis (nome e idade). Exiba a frase: "Meu nome é [nome] e tenho [idade] anos." no console.
// let nome = 'Guilherme';
// let idade = 18;
// console.log(`Meu nome é ${nome} e teno ${idade} anos.`)

//2. Crie duas variáveis numéricas (valor1 e valor2) e exiba soma, subtração, multiplicação e divisão.
// let valor1 = 10;
// let valor2 = 5;
// console.log(`Soma: ${valor1 + valor2}`);
// console.log(`Subtração: ${valor1 - valor2}`);
// console.log(`Multiplicação: ${valor1 * valor2}`);
// console.log(`Divisão: ${valor1 / valor2}`);

//3. Crie variáveis para representar uma tarefa (título, descrição e status booleano). Mostre essas informações no console.
// let titulo = "Estudar JavaScript";
// let descricao = "Praticar exercícios de JavaScript para melhorar.";
// let status = true;
// console.group("Tarefa:");
// console.log(`Título: ${titulo}
// Descrição: ${descricao}
// Status: ${status}`);
// console.groupEnd();

//4. Copie o trecho abaixo e observe o resultado no console. Por que o resultado é "105" ao invés de 15?
// let numero1 = 10;
// let numero2 = "5";
// console.log(numero1 + numero2);
//Explique a razão no comentário do próprio código. Em seguida, modifique-o para realizar a soma corretamente.
//R: Isso ocorre pois o numero2 é uma string, e ao somarmos uma string com um número, o JS converte o num em uma string
//  e concatena os valores, ao invés de realizar a soma.
// let numero1 = 10;
// let numero2 = "5";
// console.log(numero1 + Number(numero2));

//5.Crie uma variável versaoApp (número) e exiba a mensagem: "Bem-vindo ao aplicativo [nome] versão [versaoApp]"
//  usando template strings.
// let nomeApp = "MeuApp";
// let versaoApp = 1.0;
// console.log(`Bem-vindo ao aplicativo ${nomeApp} versão ${versaoApp}`);

//6.Peça ao usuário dois valores (pode usar prompt() ou atribuições diretas) e compare usando ==, === e >.
// Mostre no console o resultado de cada comparação.
// let valor1 = Number(prompt("Digite o primeiro valor:"));
// let valor2 = prompt("Digite o segundo valor:");
// console.log(`Comparação usando == : ${valor1 == valor2}
// Comparação usando === : ${valor1 === valor2}
// Comparação usando > : ${valor1 > valor2}`);

//7.Crie uma variável prioridade (valor inicial 3) e use operadores de incremento e atribuição para aumentar
//  até 5. Exiba no console cada passo.
// let prioridade = 3;
// console.log(`Prioridade inicial: ${prioridade}`);
// prioridade++;
// console.log(`Após incremento: ${prioridade}`);
// prioridade++;
// console.log(`Após segundo incremento: ${prioridade}`);

//Desafio gerado pela IA:
// Crie um programa em JavaScript que simule o cadastro de um usuário
// e realize algumas operações com os dados.
//
// O programa deve:
//
// 1. Criar variáveis para armazenar informações do usuário.
// 2. Exibir os dados no console de forma formatada.
// 3. Realizar cálculos com os valores informados.
// 4. Fazer comparações entre os dados.
// 5. Atualizar valores utilizando operadores de incremento ou atribuição.
// 6. Analisar um trecho de código envolvendo tipos diferentes e explicar o comportamento.
//
// Utilize console.log para mostrar todos os resultados.

// console.log("Bem-vindo ao HealthCenter, esse é o nosso sistema de cadastro de usuário!");
// let nome = prompt("Digite o seu nome:");
// let idade = Number(prompt("Digite a sua idade:"));
// let altura = Number(prompt("Digite a sua altura (em metros):"));
// let peso = Number(prompt("Digite o seu peso (em kg):"));
// let estuda = Boolean(prompt("Você estuda? (true/false)"));

// console.log(`Dados do usuário:
//     Nome: ${nome}
//     Idade: ${idade} anos
//     Altura: ${altura} metros
//     Peso: ${peso} kg
//     Estuda: ${estuda}`);

// let imc = peso/(altura ** 2);
// console.log(`IMC: ${imc.toFixed(2)}`);
