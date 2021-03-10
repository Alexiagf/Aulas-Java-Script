//Array e dicionário

var lista = ["maçã", "pêra", "laranja"];
lista.push("uva");// adiciona um elemento ao array
console.log(lista); // imprime toda lista 
lista.pop(); // remove o último elemento da lista
console.log(lista[1]); // imprime um elemento determinado do array
console.log(lista.length); // tamanho da lista
console.log(lista.reverse()); // traz a lista ao contrário
console.log(lista.toString()); // transforma os dados do array em string
console.log(lista.join(" - ")); // concatena a lista com o modo de separação de preferência
var frutas = [{nome: "maçã", cor: "vermelha"}, {nome: "uva", cor: "roxo"}]// dicionário comporta vários arrays
console.log(frutas);
console.log(frutas[1].nome);// impressão de um dado determinado do dicionário