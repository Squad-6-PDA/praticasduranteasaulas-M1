var nome;

function exibir() {
    nome = prompt("digite seu nome")

    while (nome.length < 3) {
        alert("Nome inválido: Número de caracteres menor que três digitos")
        nome = prompt("Digite aqui o seu nome novamente")
    }
    alert("parabéns, seu nome foi registrado, " + nome +"!")
    document.write(`parabéns ${nome}, seu nome foi registrado em nosso sistema.`)
}
exibir()