
calcular.addEventListener('click', funcalcular);
limpar.addEventListener('click', funlimpar);

function funcalcular (a1,q,n) {
    var a1 = window.document.getElementById('a1').value;
    var q = window.document.getElementById('q').value;
    var n = window.document.getElementById('n').value;
    n += n-1;

    var an = a1 * (Math.pow(q, n));
    var resposta = window.document.createElement('p');
    resposta.innerHTML=`Resposta: ${an}`;
            
    //selecionando onde o para paragrafo sera enserido (o pai do paragrafo)
    var pai = window.document.getElementById('calculadora');
    //adicionando o paragrafo "vetor" a div (ou ao seu pai)
    pai.appendChild(resposta);
}
function funlimpar(){
    window.document.getElementById('a1').value=null;
    window.document.getElementById('q').value=null;
    window.document.getElementById('n').value=null;
}
