const somar =() => console.log("Estou em uma arrow function")
somar();

const soma = numero =>console.log("recebi um número:" + numero)
soma(10);

const soma2  = (numA, numB) => console.log("recebi um número:" + numA * numB)
soma2(20, 30);

const soma3  = (numA, numB) => {
    console.log("recebi um número:" + numA)
    return numA + numB
}

console.log(soma3(20, 30));
