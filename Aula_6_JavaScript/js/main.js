//Manipulação de elementos da página (botão e texto)

function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>"; // injetar texto HTML dentro da classe Js
}  

function redirecionar(){
    window.open("https://www.linkedin.com/in/alexia-gasperi-128a7a1b9/"); // abre a url em outra janela
    window.location.href = "https://www.linkedin.com/in/alexia-gasperi-128a7a1b9/"; // abre a url na mesma janela
}

function trocar(elemento){
    document.getElementById("mousemove").innerHTML= "Obrigado por passar o mouse"; // inteja texto HTML a partir de um ID
    elemento.innerHTML = "Obrigado por passar o mouse"; // não necessita de um ID, pois é setado no próprio elemento
}

function voltar(elemento){
    document.getElementById("mousemove").innerHTML= "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("Página carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value)
}
