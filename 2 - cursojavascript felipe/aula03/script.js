// Arrays
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array

const nomes = ["Felipe", "João", "Julia"];

console.log(nomes.length);

nomes.push("Daniel"); // add elemento no final
nomes.push(22);
nomes.push(false);

console.log(nomes);
console.log(nomes[0]);
console.log(nomes[nomes.length - 1]); // ultimo elemento
console.log(nomes[-1]); // js não tem acessos negativos

nomes.unshift(true); // adicionar no inicio
console.log(nomes);

nomes.pop(); // remover do final
console.log(nomes);

nomes.shift(); // remover do inicio
console.log(nomes);

// Verificando o indice de um elemento
console.log(nomes.indexOf("Julia"));
console.log(nomes.indexOf("Rafael")); // não encontrado retorna -1

// Ordenando
let numeros = [5, 4, 3, 2, 1];
console.log(numeros.sort());
console.log(nomes.sort());
