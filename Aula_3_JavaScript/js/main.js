//Laço de repetição, condicionais e DATE 

//teste IF

var idade = prompt("Qual a sua idade?"); // o comando prompt manda uma mensagem na tela e o valor digitado é armazenado na variável
if(idade >= 18){
    alert("maior de idade");
}else{
    alert("menor de idade");
}



//teste WHILE

var count = 0;

while (count <= 5){
    console.log(count);
    count++;
}



//teste FOR

var num;
for (num = 0; num <= 5; num++){
    alert(num);
}


// teste DATE

var d = new Date();
alert(d.getMonth()+1); // exibe o mês
alert(d.getSeconds()); // exibe os segundos
alert(d.getDay()); // exibe o dia
alert(d.getHours()); // exibe as horas
alert(d); // exibe a data completa
