//Funções

function soma (n1, n2){
    return n1 + n2;
}

function setREplace (frase, nome, novo_nome){
    return frase.replace(nome, novo_nome);
}

var validar = 0;
function validaIdade(idade){
    if(idade >= 18){
        validar = true;

    }else{
        validar = false;
    }
    return validar;
}

alert(soma(5,10));

alert(setREplace("Este é o Japão", "Japão", "Brasil"));

var idade = prompt("Qual sua idade");
validaIdade(idade);
console.log(validar);