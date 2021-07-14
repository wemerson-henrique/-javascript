submeter.addEventListener('click', questao3);
quest4Calcular.addEventListener('click', questao4);
botquestao06.addEventListener('click', questao6);
questao06Listar.addEventListener('click', funQuest06Listar);

function questao3 () {
    var idade = Number(window.document.getElementById('idade').value);

    var data = new Date(); //cria uma variaveu data
    var ano = data.getFullYear(); //pega o ano da variavel data

    var anoNascimento = ano - idade;

    window.document.getElementById('resposto3').innerHTML = `O seu ano de nascimento é: ${anoNascimento}`;

}

function questao4 () {
    var peso = Number(window.document.getElementById('peso').value);
    var altura = Number(window.document.getElementById('altura').value);

    var imc = peso / Math.pow(altura,2);

    window.document.getElementById('imc').value = `${imc.toFixed(2).replace('.',',')}`;

    var resp = window.document.getElementById('resposto4');

    if(imc < 18){

        resp.style.color = 'red';
        resp.innerHTML = `Baixo peso`;

    }else if (imc > 25) {
        resp.style.color = 'red';
        resp.innerHTML = `Acima do peso`;
    } else {
        resp.style.color = 'green';
        resp.innerHTML = `Saudável`;
    }
}
//------------------------
var produtos = new Array();

function questao6 () {
    var id = window.document.getElementById('id').value;
    var nome = window.document.getElementById('pnome').value;
    var valor = window.document.getElementById('valor').value;

    var novoProduto = new Produto(id,nome,valor);

    produtos.push(novoProduto);

    window.alert(`Aluno ${novoProduto.nome} cadastrado com sucesso!`);
    
    window.document.getElementById('id').value = null;
    window.document.getElementById('pnome').value = null;
    window.document.getElementById('valor').value = null;
}

function funQuest06Listar () {
    var resposta = `
    <table border="1"><tr>
    <th>Matrícula</th>
    <th>Nome</th>
    <th>Nota</th></tr>`;

    for(var i = 0; i < produtos.length; i++ ){
        resposta += `<tr>
        <td>${produtos[i].id}</td>
        <td>${produtos[i].nome}</td>
        <td>${produtos[i].valor}</td>
        </tr>`
    }

    resposta += `</table>`
    
    window.document.getElementById('resposto6').innerHTML = resposta;
}

function Produto (id,nome,valor) {
    this.id = id;
    this.nome = nome;
    this.valor = valor;
}
