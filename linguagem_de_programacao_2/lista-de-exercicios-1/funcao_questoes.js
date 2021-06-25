//Feito por wemerson henrique em 20/06/2021
        chamarfuncao1.addEventListener('click', funcao1);
        chamarfuncao2.addEventListener('click', funcao2);
        chamarfuncao3.addEventListener('click', funcao3);
        chamarfuncao4.addEventListener('click', funcao4);
        chamarfuncao5.addEventListener('click', funcao5);
        chamarfuncao6.addEventListener('click', funcao6);
        chamarfuncao7.addEventListener('click', funcao7);
        chamarfuncao8.addEventListener('click', funcao8);

        //QUESTAO-01
        function funcao1 () {
            var c = Number.parseFloat(window.prompt("Escreva a temperatura em celsius"));
            var f = 1.8*c+32;
            window.document.getElementById('resposta1').innerHTML=f;
        }

        //QUESTAO-02
        function funcao2 () {
            var L = Number.parseFloat(window.prompt("Escreva tamanho do lado do quadrado"));
            var A=L**2;
            var P=L*4;
            window.document.getElementById('resposta2').innerHTML="A area é: " + A + " O perimetro é: " + P;
        }
        

        //QUESTAO-03
        function funcao3 (){
            var H = Number.parseFloat(window.prompt("A altura do retamgulo"));
            var B = Number.parseFloat(window.prompt("A base do retamgulo"));
            var A=B*H;
            var P=2*B+2*H;
            window.document.getElementById('resposta3').innerHTML="A area é: " + A + " O perimetro é: " + P;
        }
        

        //QUESTAO-04
        function funcao4 () {
            var hora = Number.parseInt(window.prompt("Escreva a hora atual"));
            var min = hora*60;
            window.document.getElementById('resposta4').innerHTML="As horas em minutos são: " + min;
        }

        //QUESTAO-05
        function funcao5 () {
            var idade1 = Number.parseInt(window.prompt("Escreva a primeira idade"));
            var idade2 = Number.parseInt(window.prompt("Escreva a segunda idade"));
            var idade3 = Number.parseInt(window.prompt("Escreva a tercira idade"));
            var idade4 = Number.parseInt(window.prompt("Escreva a quarta idade"));
            var media = (idade1 + idade2 + idade3 + idade4)/4;
            window.document.getElementById('resposta5').innerHTML="A média das idades é: " + media;
        }

        //QUESTAO-06
        function funcao6 () {
            var num1 = Number.parseInt(window.prompt("Escreva um numero"));
            var num2 = Number.parseInt(window.prompt("Escreva outro numero"));
            if (num1 > num2) {
                window.document.getElementById('resposta6').innerHTML=num1 + " é maior que " + num2;
            }else if (num1 < num2) {
                window.document.getElementById('resposta6').innerHTML=num2 + " é maior que " + num1;
            } else {
                window.document.getElementById('resposta6').innerHTML="Os numeros são inguais";
            }
        }

        //QUESTAO-07
        function funcao7 () {
            var peso = Number.parseFloat(window.prompt("Escreva seu peso"));
            var altura = Number.parseFloat(window.prompt("Escreva sua altura"));
            IMC= peso/(altura*2);
            if (IMC < 25) {
                window.document.getElementById('resposta7').innerHTML="Peso  Ideal " + IMC;
            } else if (IMC > 25) {
                window.document.getElementById('resposta7').innerHTML="Acima do peso " + IMC;
            } else {
                window.document.getElementById('resposta7').innerHTML= IMC;
            }
        }

        //QUESTAO-08
        function funcao8 (){
            var num = Number.parseInt(window.prompt("Escreva um numero"));
            for (var i = num; i >= 0; i--) {
                window.document.getElementById('resposta8').innerHTML+= i + " ";
            }
        }