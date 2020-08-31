/*
const somar = (numA, numB) => numA + numB;

const calculadora = (numA, numB, operacao) => operacao(numA, numB);

console.log(calculadora(10, 20, (numA, numB) => numA - numB))

console.log(calculadora(10, 20, (numA, numB) => numA + numB))

console.log("==================")

function calcular (num1, num2, operacao){
    operacao(num1, num2)
    console.log("A operação foi realizada com sucesso")
}

function soma(num1, num2){
    console.log(num1 + num2)
}
calcular(10, 5, soma)
*/
let pets = [
    {
        nome: 'Yoshi',
        tipo: 'gato',       
        raça: 'viralata',
        idade: 3,
        genero: 'masculino',
        vacinado: true,
        servicos = []
    },

    {
    nome: 'Pituco',
        tipo: 'pássaro',       
        raça: 'calopsita',
        idade: 3,
        genero: 'fêmea',
        vacinado: false,
        servicos = []
}      
];

let banhar = "esta tomando banho"
let tosar = "esta fazendo a tosa"

function servicos (banho, tosa, operacao) {
    operacao(banho,tosa)
}

function servicosPrestados(banho, tosa){
    for(let i = 0; i < pets.length; i++){
        console.log("O pet " + pets[i].nome +" "+ banho + " e " + tosa)
    }
}

servicos(banhar, tosar, servicosPrestados)

console.log("================")

function servicos(pet, servico){
    servico(pet)
}

function darBanhoPet(pet){
    pet.servicos.push("banho")
    console.log("O pet" + pet.nome + "tomou banho")
}

function tosarPet(pet){
    pet.servicos.push("tosa")
    console.log("O pet" + pet.nome + "foi tosado")
}

servicos(pets[0], darBanhoPet)
servicos(pet[0], tosarPet)