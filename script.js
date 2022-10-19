



// Questão 1
let numeroInteiro = parseInt(prompt("Digite um numero inteiro"));
let numeroInteiroII = parseInt(prompt("Digite aqui outro numero inteiro"));
if (numeroInteiro > numeroInteiroII) {
    alert(`o maior numero é ${numeroInteiro} e a diferença é ${numeroInteiro - numeroInteiroII}`);
} else {
    alert(`o maior numero é ${numeroInteiroII} e a diferença é ${numeroInteiroII - numeroInteiro}`);
}





// Questão 2
let numero = parseFloat(prompt("digite um numero"));
let numeroII = parseFloat(prompt("digite outro numero"));
if (numero > numeroII) {
    alert(`o  numero  ${numero} é maior que ${numeroII}`);
} else {

    alert(`o numero  ${numeroII} é maior que ${numero}`);
    if (numero = numeroII);
        alert(`numeros iguais`);
}





// Questão 3
let salario = parseFloat(prompt("digite seu salário"));
let valorPrestacao = parseFloat(prompt("digite o valor da prestação"));

if (valorPrestacao * 0.3 > salario) {
    console.log("Emprestimo não concedido ");
} else {
    console.log("emprestimo concedido");
}




//Questão 4
let valor = parseFloat(prompt("escreva aqui um numero"));
let divisorI = 3;
let divisorII = 5;

if (valor % divisorI == 0 && valor % divisorII == 0) {

    alert(`Valor inválido`);

}
else if (valor % divisorI == 0) {
    alert(`Valor divisivel por 3`);
}

else if (valor % divisorII == 0) {
    alert(`Valor divisivel por 5`);
}
else if (valor % 2 == 0) {
    alert(`é par`);
}
else {
    alert(`é impar`);
}






// Questão 5
let diaSemana = parseInt(prompt("digite aqui um numero"));

if (diaSemana == 1) {
    alert(`domingo`);
}
else if (diaSemana == 2) {
    alert(`segunda`);
}
else if (diaSemana == 3) {
    alert(`terça`);
}
else if (diaSemana == 4) {
    alert(`quarta`);
}
else if (diaSemana == 5) {
    alert(`quinta`);
}
else if (diaSemana == 6) {
    alert(`sexta`);
}
else if (diaSemana == 7) {
    alert(`sabado`);
}
else if (diaSemana > 7) {

    alert(`erro`);

}






// Questão 6
let salarioFuncionario = parseFloat(prompt("Digite aqui o seu salário"));
let reajuste = 0.05 * salarioFuncionario + salarioFuncionario;

alert(`O salário do funcionário corrigido é de : ${reajuste}`);






// Questão 7

let dolar = parseFloat(prompt("digite o valor em dolar"));
let cotacaoDolar = 5.40;

let conversão = dolar * cotacaoDolar;

alert(`$${dolar} é equivalente a R$${conversão} tendo 5,40 como cotação`);





// Questão 8
let tipoDePulverização = parseInt(prompt("digite o tipo de pulverização, tendo em vista que as opções são: \n1)Ervas daninhas\n2)Gafanhotos \n3)Broca \n4)Todos acima"));
let areaPulverizada = parseFloat(prompt("Digite a area que será pulverizada"));

let ervasDaninhas = (50 * areaPulverizada);
let gafanhotos = (100 * areaPulverizada);
let broca = (150 * areaPulverizada);
let todosACima = (250 * areaPulverizada);
let desconto5 = 0;




if (tipoDePulverização === 1 && areaPulverizada > 1000) {
    desconto5 = ervasDaninhas - (ervasDaninhas * 0.95);
    alert(`o custo para pulverização com desconto é de R$${desconto5}`);

}
if (desconto5 > 750 && areaPulverizada < 1000) {
    desconto5 = ervasDaninhas - (ervasDaninhas * 0.95);
    alert(`o custo para pulverização com desconto é de R$${(desconto5 - 750) * 0.9 + 750}`);

} if (tipoDePulverização === 1 && areaPulverizada > 1000 && ervasDaninhas > 750) {
    alert(`o custo para pulverização com desconto é de R$${(ervasDaninhas - 750) * 0.9 + 750}`);
}
else {
    alert(`o custo para pulverização é ${ervasDaninhas}`);
}





if (tipoDePulverização === 2 && areaPulverizada > 1000) {
    desconto5 = gafanhotos - (gafanhotos * 0.95);
    alert(`o custo para pulverização com desconto é de R$${desconto5}`);

}
if (desconto5 > 750 && areaPulverizada < 1000) {
    desconto5 = gafanhotos - (gafanhotos * 0.95);
    alert(`o custo para pulverização com desconto é de R$${(desconto5 - 750) * 0.9 + 750}`);

} if (tipoDePulverização === 2 && areaPulverizada > 1000 && gafanhotos > 750) {
    alert(`o custo para pulverização com desconto é de R$${(gafanhotos - 750) * 0.9 + 750}`);
}
else {
    alert(`o custo para pulverização é ${gafanhotos}`);
}





if (tipoDePulverização === 3 && areaPulverizada > 1000) {
    desconto5 = broca - (broca * 0.95)
    alert(`o custo para pulverização com desconto é de R$${desconto5}`);

}
if (desconto5 > 750 && areaPulverizada < 1000) {
    desconto5 = broca - (broca * 0.95);
    alert(`o custo para pulverização com desconto é de R$${(desconto5 - 750) * 0.9 + 750}`);

} if (tipoDePulverização === 3 && areaPulverizada > 1000 && broca > 750) {
    alert(`o custo para pulverização com desconto é de R$${(broca - 750) * 0.9 + 750}`);
}
else {
    alert(`o custo para pulverização é ${broca}`);
}





if (tipoDePulverização === 4 && areaPulverizada > 1000) {
    desconto5 = todosACima - (todosACima * 0.95);
    alert(`o custo para pulverização com desconto é de R$${desconto5}`);

}
if (desconto5 > 750 && areaPulverizada < 1000) {
    desconto5 = todosACima - (todosACima * 0.95);
    alert(`o custo para pulverização com desconto é de R$${(desconto5 - 750) * 0.9 + 750}`);

} if (tipoDePulverização === 4 && areaPulverizada > 1000 && todosACima > 750) {
    alert(`o custo para pulverização com desconto é de R$${(todosACima - 750) * 0.9 + 750}`);
}
else {
    alert(`o custo para pulverização é ${todosACima}`);
}








//Questão 9 

let tempo = parseFloat(prompt("Digite o tempo de viagem"));
let velocidade = parseFloat(prompt("digite a velocidade em km por hora "));
let distancia = tempo * velocidade;
let litrosUsados = distancia / 12;

alert(`seu veiculo percorreu  ${distancia} km a ${velocidade}km por hora em ${tempo}H de viagem e consumiu ${litrosUsados.toFixed(2)}L de gasolina`);









// Questão 10

let valorDaFatura = parseFloat(prompt("Digite aqui o valor da fatura"));
let taxaDaFatura = parseFloat(prompt("Digite a taxa"));
let tempoDeAtraso = parseFloat(prompt("Digite o tempo de atraso"));

let prestacao = valorDaFatura + (valorDaFatura * (taxaDaFatura / 100) * tempoDeAtraso);

if (tempoDeAtraso <= 0 || tempoDeAtraso % 1 != 0) {
    alert(`Valor inválido, o tempo de atraso deve ser em dias`);

} else {
    alert(`R$${prestacao}`);
}
