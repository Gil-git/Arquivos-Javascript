// map
let numPares = [2,4,6,8,10];

let numParesDobro = numPares.map(function(valor){
    return valor * 2;
})
console.log(numParesDobro)

// filter
let numFiltrados = numPares.filter(function(valor){
    return valor < 6
})
console.log(numFiltrados)

