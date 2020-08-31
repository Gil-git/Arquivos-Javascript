function contarImparesAte(num){
    let qtdDeImpares = 0;
    for( let i = 0; i <= num; i++){        
         if(i % 2 == 1){
            qtdDeImpares = qtdDeImpares + 1;             

        }
    }
    console.log(qtdDeImpares) 
}
contarImparesAte(10)

/*
function contarImparesAte(num){
    for(let i = 0; i <= num; i++){
        console.log(i)
    }
}
contarImparesAte(10)
*/

