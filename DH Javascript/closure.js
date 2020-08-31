// function pai
function saudacao(nome){
    let mensagem = "Olá, seja bem vindo";

    // function filha
    function juntarNome(){
        return mensagem + ' ' + nome;
    }
    return juntarNome();
}

console.log(saudacao("Gilvani"));