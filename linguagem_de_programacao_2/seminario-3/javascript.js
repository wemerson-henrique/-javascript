cadastrar.addEventListener('click',Cadastrar);
listar.addEventListener('click',Listar);

var clientes = new Array();

function Cadastrar () {
    var nome = window.document.getElementById('nome').value;
    var cpf = window.document.getElementById('cpf').value;
    var gr = window.document.getElementById('gr').value;
    var sexo = window.document.getElementById('sexo').value;
    var email = window.document.getElementById('email').value;
    var telefone = window.document.getElementById('telefone').value;
    var endereco = window.document.getElementById('endereco').value;
    var uf = window.document.getElementById('uf').value;
    var cep = window.document.getElementById('cep').value;
    var cidade = window.document.getElementById('cidade').value;
    var usuario = window.document.getElementById('usuario').value;
    var senha = window.document.getElementById('senha').value;

    var novoCliente = new Cliente(nome,cpf,gr,sexo,email,telefone,endereco,uf,cep,cidade,usuario,senha);

    clientes.push(novoCliente);
    
    window.alert(`O ${novoCliente.nome} foi cadastrado com sucesso!`);
}

function Listar () {
    var mensagem = `<table border="1">
    <th>Nome</th> <th>CPF</th> <th>GR</th> <th>Sexo</th> <th>E-mail</th> <th>Telefone</th> <th>Endereço</th> <th>UF</th> <th>CEP</th> <th>Cidade</th> <th>Usuário</th> <th>Senha</th>`;

    for(var i = 0; i < clientes.length; i++){
        mensagem += `<tr>
        <td>${clientes[i].nome}</td> <td>${clientes[i].cpf}</td> <td>${clientes[i].gr}</td> <td>${clientes[i].sexo}</td> <td>${clientes[i].email}</td> <td>${clientes[i].telefone}</td> <td>${clientes[i].endereco}</td> <td>${clientes[i].uf}</td> <td>${clientes[i].cep}</td> <td>${clientes[i].cidade}</td> <td>${clientes[i].usuario}</td> <td>${clientes[i].senha}</td>
        </tr>`
    }
    mensagem += `</table>`

    window.document.getElementById('listaClientes').innerHTML = mensagem;
}

function Cliente (nome,cpf,gr,sexo,email,telefone,endereco,uf,cep,cidade,usuario,senha) {
    this.nome = nome;
    this.cpf = cpf;
    this.gr = gr;
    this.sexo = sexo;
    this.email = email;
    this.telefone = telefone;
    this.endereco = endereco;
    this.uf = uf;
    this.cep = cep;
    this.cidade = cidade;
    this.usuario = usuario;
    this.senha = senha;
}