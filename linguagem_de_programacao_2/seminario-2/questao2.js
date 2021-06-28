verresposta.addEventListener('click', questao1);

function questao1(){
    var opcao1 = window.document.getElementById('resp1');
    var opcao2 = window.document.getElementById('resp2');
    var opcao3 = window.document.getElementById('resp3');
    var opcao4 = window.document.getElementById('resp4');
    var pai = window.document.getElementById('form');
    
    pai.removeChild(opcao1);
    pai.removeChild(opcao2);
    pai.removeChild(opcao4);
}