// modo declarativo
// let numero = 32; // variavel de escopo global
function somar(a, b){
    // codigo
    // let numero = 32;//variavel de escopo local
    console.log("Estou somando...")
    return a + b;
}
// let resultadoSoma = somar(1, 2);
console.log(somar(1, 2));


// modo expressão
const multiplicar = function(a, b){
    // codigo
    console.log("Estou multiplicando...")
    return a * b;
}
// let resultadoMultiplica = multiplicar(2, 10);
console.log(multiplicar(2, 10));


function exemplo(){
    let string = "Olá, sou uma função";
    return exemplo;
}

    
 



