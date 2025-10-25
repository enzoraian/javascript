// Declaração de variáveis

var variavel1 = "Olá mundo"; // escopo global
let varivel2; // escopo local/bloco, pode ser alterado
const pi = 3.14; // // escopo local/bloco, não pode ser alterado

console.log(variavel1.length);

// const não torna o valor armazenado imutável, ele apenas impede a reatribuição da variável.
const varNomes = ["Felipe", "João", "Julia"];
console.log(varNomes);

varNomes.push("Daniel");
console.log(varNomes);

// Strings
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String

let primeiroNome = "Enzo";
let segundoNome = "Raian";

console.log("Meu nome é " + primeiroNome + " " + segundoNome);

// template literals ou template strings (ES6)
console.log(`Meu nome é ${primeiroNome} ${segundoNome}`);

let nomeCompleto = `${primeiroNome} ${segundoNome}`;
console.log(nomeCompleto.toUpperCase());
console.log(nomeCompleto.toLowerCase());

let nomes = "Felipe,João,Julia";
console.log(nomes.split(",")); // gera um array a partir de uma string, recebendo um delimitador

let texto = " texto com espaços ";
console.log(texto);
console.log(texto.trim());

// Tipo Number
let numero = 15;
console.log(typeof numero);

// Booleanos
let verdadeiro = true;
console.log(typeof verdadeiro);

// Null e Undefined

var semValor = null; // variavel não possui valor, é vazia
var naoDefinido; // variavel não foi definida
console.log(naoDefinido);
