let valores = [8, 1, 7, 4, 2, 9];
for (let pos = 0; pos < valores.length; pos++) { //for que ira percorrer o indece de chaves do vetor
    window.document.write(`A posição ${pos} tem o valor ${valores[pos]} <br>`); //"write" vai mostrar a posição que é indicado por "${pos}", bem como o valor que é representado por "valores[pos]" que irá pegar o valor da posição indicada, o "<br>" vai ser utilizado para quebra a linha
}

window.document.write(`<br>`); //"<br>" vai fazer uma quebra de linha

for (let pos in valores) { //é um for expecifico para array, ele ira perporrer o indece "pos" de um vetor chamado "valores", basicamente é um for para mostrar um array mas mais simples
    window.document.write(`A posição ${pos} tem o valor ${valores[pos]} <br>`);//"write" vai mostrar a posição que é indicado por "${pos}", bem como o valor que é representado por "valores[pos]" que irá pegar o valor da posição indicada, o "<br>" vai ser utilizado para quebra a linha
}

/*
valores.indexOf(7); // "indexOf(7)" vai buscar no vetor o valor "7" e retornar a posição (ou chave) de onde esta o valor buscado, caso ele não encontre o valor buscado sera retornado o valor "-1", a letra "O" tem que estar em maiuscula
*/

window.document.write(`<br><hr>`); //"<br>" vai fazer uma quebra de linha, "<hr>" separar os dois for com uma linha horizontal

var num = new Array(5, 8, 2, 9, 3); //vai criar um array "num" de num 5, 8, 2, 9, 3

window.document.write(`Vetor antes do "push" e "sort" <br>`); //vai exibir uma mensagem, "<br>" vai fazer uma quebra de linha

for (let pos in num) { 
    window.document.write(`A posição ${pos} tem o valor ${num[pos]} <br>`);
}

num.sort(); // "sort();" função para ordenar os valores do vetor "num"

num.push(1); // vai acressentar o valor "1" na ultima posição do vetor

let pos = num.indexOf(8); // a variavel "pos" ira receber a chave da posição do valor "8" no vetor "num"

window.document.write(`<br><br>`); //"<br>" vai fazer uma quebra de linha

window.document.write(`A valor 8 esta na posição ${pos}<br><br>`); //vai exibir uma mensagem, "<br>" vai fazer uma quebra de linha

window.document.write(`Vetor Apos o "push" e "sort"<br>`); //vai exibir uma mensagem, "<br>" vai fazer uma quebra de linha

for (let pos in num) { 
    window.document.write(`A posição ${pos} tem o valor ${num[pos]} <br>`);
}

let pos1 = num.indexOf(4); // a variavel "pos" ira receber a chave da posição do valor "4" no vetor "num"

window.document.write(`<br><br>`); //"<br>" vai fazer uma quebra de linha

if (pos1 == -1) {
    window.document.write(`A valor 8 não foi encontrado`); //vai exibir uma mensagem, "<br>" vai fazer uma quebra de linha
} else {
    window.document.write(`A valor 4 esta na posição ${pos}<br><br>`); //vai exibir uma mensagem, "<br>" vai fazer uma quebra de linha
}