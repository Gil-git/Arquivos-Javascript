let frutas = ["maça","banana","uva"];

let frutasDois = ["laranja","abacate","goiaba"];

let listaFrutas = [...frutas, ...frutasDois];

console.log(listaFrutas);

console.log("=======================")

let pessoa = {
    nome: "Gilvani",
    idade: "50 anos",
    altura: "1,74 cm",
    peso: "67 kg"
}

let infoPessoal = {
    tel: "(22) 98156-2356",
    rg:"123.456.785-10",
    ...pessoa
}

let pessoaCompleta = {
    enderco: "Rua A - 56",
    bairro: "xpto - RJ",
    ...infoPessoal
}

console.log(pessoaCompleta);

console.log("*************************")

//  funciona com FUNÇÕES

function letras (...parametros){
    console.log(parametros)
}
letras("a","b");