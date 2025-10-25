// Os principais são number, string e boolean
var numero = 15
var str = "sou uma string"
var verdadeiro = true

// Particularidade JS
var strNumero = "20"

console.log(strNumero * 2)
console.log(strNumero / 2)
console.log(strNumero - 2)
console.log(strNumero + 2) // nesse caso é diferente, ele concatena

console.log("-------------------")
var novoNumero1 = strNumero * 20
var novoNumero2 = strNumero + 20
console.log((typeof(novoNumero1)))
console.log((typeof(novoNumero2)))

// Resolvendo o problema (Conversão) Number(), parseInt(), parseDouble()
console.log(Number(strNumero) + 2)

// tipo undefined
var minhaVariavel
console.log(minhaVariavel) // declarada, mas não definida o valor