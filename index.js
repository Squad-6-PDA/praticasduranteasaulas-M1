function exibirNome() {
    var nome = document.getElementById("fullname").value;

    var quantidadeCaracteres = nome.replace(/\s+/g, '').length;


    document.write(`<p> Nome Completo: ${nome} <br> Quantidade de letras: ${quantidadeCaracteres}</p>`)
}
