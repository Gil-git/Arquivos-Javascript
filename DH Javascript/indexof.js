let pessoa = ["Gilvani", 1.74];
console.log(pessoa)

// push - adiciona elementos no final do array
pessoa.push("50 anos");
console.log(pessoa)

// pop - retira o ultimo elemento do array
pessoa.pop();
console.log(pessoa)

/*let excluido = pessoa.pop();
console.log(excluido);
*/

// unshift - coloca o elemento no inicio do array 
// alteram o comprimento do array
pessoa.unshift("50 anos");
console.log(pessoa)

//shift -  retira elemento no inicio do array
// alteram o comprimento do array
pessoa.shift();
console.log(pessoa)


console.log("************")

// indexof - mostra o indice, a posição  do elemento no array
console.log(pessoa.indexOf(1.74))
console.log("************")
console.log(pessoa.indexOf("gilvani"))  // retorna valor negativo -1, o elemento não existe

