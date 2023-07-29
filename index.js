var valor1 = parseInt(prompt("Digite um VALOR"));
var operacaoUsuario = prompt("Digite a OPERAÇÃO de deseja, ex: +, -, / ou * ");
var valor2 = parseInt(prompt("Digite o SEGUNDO VALOR"));

function calculadora(a, operacao, b) {
  if (operacao == "+" ) {
    return soma(a, b);
  } else if (operacao == "-") {
    return subtracao(a, b);
  } else if (operacao == "/") {
    return divisao(a, b);
  } else if (operacao == "*") {
    return multiplicacao(a, b);
  }else{
    alert("Deu Errado!")
  }
}

function soma(a, b) {
  return a + b;
}

function subtracao(a, b) {
  return a - b;
}

function multiplicacao(a, b) {
  return a * b;
}

function divisao(a, b) {
  return a / b;
}

function exibirResultado(a, operacao, b) {
    alert("Seu resultado é: " + (calculadora(valor1, operacaoUsuario, valor2)))
}


function calcular(a, operacao, b){
    exibirResultado();
}