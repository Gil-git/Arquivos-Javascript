
// lenght - comprimento da string
let texto = "Oi eu sou o Gilvani"
console.log(texto.length);

// indexOf 
console.log(texto.indexOf('i'))
console.log(texto.indexOf('sou'))
console.log(texto.indexOf('Gil'))
console.log(texto.indexOf('joao')) //joao não existe, então -1

// slice
let palavra = texto.slice(0,3)
console.log(palavra)
console.log(texto)

// Trim - retira espaços necessários no inicio ou no fim da string
console.log(texto.trim())



// split - transformar uma string em um array
console.log(texto.split(" "))

// replace - permite trocar código
let textoNovo = texto.replace("Gilvani", "jonas")
console.log(textoNovo)

