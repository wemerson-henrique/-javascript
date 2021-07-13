questao01.addEventListener('click',funQuest01);

function funQuest01(){
    var valGaso = window.document.getElementById('valGaso').value; //pesa valor do input da gasolina pelo id e atribui seu valor a uma variavel
    var valAlco = window.document.getElementById('valAlco').value; //pesa valor do input da Alcool pelo id e atribui seu valor a uma variavel
    
    if(valAlco <= valGaso * 0.7) {
        var resposta = `álcool`;
    }else{
        var resposta = `gasolina`;
    }

    window.document.getElementById('resQuest01').innerHTML = `É mais vantajoso abastecer com ${resposta}`;
}