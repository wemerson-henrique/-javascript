questao01.addEventListener('click',funQuest01);
questao02.addEventListener('click',funQuest02);
questao03.addEventListener('click',funQuest03);
questao03Listar.addEventListener('click',funQuest03Listar);

//----------------------------------------------------------------questão 01 ----------------------------------------------------------------
function funQuest01 () {
    var valGaso = window.document.getElementById('valGaso').value; //pesa valor do input da gasolina pelo id e atribui seu valor a uma variavel
    var valAlco = window.document.getElementById('valAlco').value; //pesa valor do input da Alcool pelo id e atribui seu valor a uma variavel
    
    //a condição abaixo ira calcular qual sera mais vantajoso
    if (valAlco <= valGaso * 0.7) {
        var resposta = `álcool`;
    } else {
        var resposta = `gasolina`;
    }

    //o codigo a baixo ira exebir uma mensagem indicando qual combustivel é mais vantajoso
    window.document.getElementById('resQuest01').innerHTML = `É mais vantajoso abastecer com ${resposta}`;
}

//----------------------------------------------------------------questão 02 ----------------------------------------------------------------
function funQuest02 () {
    var valSala = Number(window.document.getElementById('valSala').value); //pesa o valor do input do salario pelo id e atribui seu valor a uma variavel, "Number" ira converter a string para um valor numerico


    var percenualAplicado; //cria uma variavel que vai receber o percentual de aumento
    
    //a condição a baixo ira ser utilisada para atribuir o percentual do almento
    if (valSala <= 280) {

        percenualAplicado = 20;

    } else if (valSala > 280 && valSala < 700) {

        percenualAplicado = 15;

    } else if (valSala > 700 && valSala < 1500) {

        percenualAplicado = 10;

    } else if (valSala > 1500) {

        percenualAplicado = 5;
        
    }

    var valAlmentado = valSala * (percenualAplicado / 100); //calcula o valor a ver acreditado ao salario
    var novSal = valSala + valAlmentado; //vai calcular o novo salario aser recebido pelo colaborador

    //o codigo a baixo ira exibir uma mensagem au usuario mostrando o salário antes do reajuste; o percentual de aumento aplicado; o valor do aumento; o novo salário, após o aumento.
    window.document.getElementById('resQuest02').innerHTML = `
    Salário antes do reajuste: R$ ${valSala}<br>
    Percentual de aumento aplicado: ${percenualAplicado}%<br>
    Valor do aumento: R$ ${valAlmentado}<br>
    Novo salário, após o aumento: R$ ${novSal}
    `;
}

//----------------------------------------------------------------questão 03 ----------------------------------------------------------------
var matriculas = new Array();

function funQuest03 () {
    var matricula = window.document.getElementById('matricula').value;
    var nome = window.document.getElementById('nome').value;
    var nota = window.document.getElementById('nota').value;

    var novoAluno = new Aluno(matricula,nome,nota);

    matriculas.push(novoAluno);

    window.alert(`Aluno ${novoAluno.nome} cadastrado com sucesso!`);
    
    window.document.getElementById('matricula').value = null;
    window.document.getElementById('nome').value = null;
    window.document.getElementById('nota').value = null;
}

function funQuest03Listar () {
    var resposta = `
    <table border="1"><tr>
    <th>Matrícula</th>
    <th>Nome</th>
    <th>Nota</th></tr>`;

    for(var i = 0; i < matriculas.length; i++ ){
        resposta += `<tr>
        <td>${matriculas[i].matricula}</td>
        <td>${matriculas[i].nota}</td>
        <td>${matriculas[i].nome}</td>
        </tr>`
    }

    resposta += `</table>`
    
    window.document.getElementById('resQuest03').innerHTML = resposta;
}

function Aluno (matricula,nome,nota) {
    this.matricula = matricula;
    this.nome = nome;
    this.nota = nota;
}

//----------------------------------------------------------------questão 04 ----------------------------------------------------------------