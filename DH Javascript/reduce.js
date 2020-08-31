// map
let numPares = [2,4,6,8,10];

let numParesDobro = numPares.map(function(valor){
    return valor * 2;
})
console.log(numParesDobro)

// filter - filtra 
let numFiltrados = numPares.filter(function(valor){
    return valor > 10
})
console.log(numFiltrados)

// reduce - converte o array em um único valor
let somaPares = numPares.reduce(function(acumulativo, valor){
    return acumulativo + valor
})
console.log(somaPares)
