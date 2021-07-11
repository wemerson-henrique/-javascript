//ADIÇÃO DO MÓDULOS
const express = require('express');
const app = express();
const twig = require('twig');
const bodyParser = require('body-parser');
// CONEXAO COM BANCO DE DADOS
const connection = require('./config/database');

// DEFINE AS VIEWS ENGINES (template engines)
app.set('view engine','html');
app.engine('html', twig.__express);
app.set('views','views');

// DEFINE O MIDDLEWARE BODY-PARSER
app.use(bodyParser.urlencoded({extended:false}));

app.get('/', (req, res) => {
    // RETORNA TODOS OS USUARIOS DO BANCO DE DADOS
    connection.query('SELECT * FROM `usuario`', (err, results) => {
        if (err) throw err;
        // RENDERIZA O ARQUIVO INDEX.HTML CONTENDO TODOS OS USUARIOS
        res.render('index',{
            usuarios:results
        });
    });
    
});

// INSERINDO UM USUARIO NO BANCO DE DADOS
app.post('/', (req, res) => {
    const nome = req.body.nome;
    const cpf = req.body.cpf;
    const gr = req.body.gr;
    const sexo = req.body.sexo;
    const email = req.body.email;
    const telefone = req.body.telefone;
    const endereco = req.body.endereco;
    const uf = req.body.uf;
    const cep = req.body.cep;
    const cidade = req.body.cidade;
    const usuario = req.body.usuario;
    const senha = req.body.senha;

    const user = {
        nome: nome,
        cpf: cpf,
        gr: gr,
        sexo: sexo,
        email: email,
        telefone: telefone,
        endereco: endereco,
        uf: uf,
        cep: cep,
        cidade: cidade,
        usuario: usuario,
        senha: senha
    }
    connection.query('INSERT INTO `usuario` SET ?', user, (err) => {
        if (err) throw err;
        console.log('Usuario inserido');
        return res.redirect('/');
    });
});

// PÁGINA DE EDIÇÃO
app.get('/edit/:id', (req, res) => {
    const edit_userId = req.params.id;
    // PROCURA USUARIO PELO ID
    connection.query('SELECT * FROM `usuario` WHERE id=?',[edit_userId] , (err, results) => {
        if (err) throw err;
        res.render('edit',{
            user:results[0]
        });
    });
});

// PÁGINA DE LISTAR
app.get('/listar', (req, res) => {
    // PROCURA USUARIO PELO ID
    connection.query('SELECT * FROM `usuario`', (err, results) => {
        if (err) throw err;
        // RENDERIZA O ARQUIVO INDEX.HTML CONTENDO TODOS OS USUARIOS
        res.render('listar',{
            usuarios:results
        });
    });
});

// ALTERANDO O USUARIO
app.post('/edit/:id', (req, res) => {
    const nome = req.body.nome;
    const cpf = req.body.cpf;
    const gr = req.body.gr;
    const sexo = req.body.sexo;
    const email = req.body.email;
    const telefone = req.body.telefone;
    const endereco = req.body.endereco;
    const uf = req.body.uf;
    const cep = req.body.cep;
    const cidade = req.body.cidade;
    const usuario = req.body.usuario;
    const senha = req.body.senha;

    const userId = req.params.id;
    connection.query('UPDATE `usuario` SET nome = ?, cpf = ?, gr = ?, sexo = ?, email = ?, telefone = ?, endereco = ?, uf = ?, cep = ?, cidade = ?, usuario = ?, senha = ? WHERE id = ?', [nome, cpf, gr, sexo, email, telefone, endereco, uf, cep, cidade, usuario, senha,  userId], (err, results) => {
        if (err) throw err;
        if(results.changedRows === 1){
            console.log('USUARIO alterado');
            return res.redirect('/');
        }
    });
});

// REMOVENDO O USUARIO
app.get('/delete/:id', (req, res) => {
    connection.query('DELETE FROM `usuario` WHERE id = ?', [req.params.id], (err, results) => {
        if (err) throw err;
        res.redirect('/');
    });
});
// DEFINE  PAGE DE ERRO 404
app.use('/',(req,res) => {
    res.status(404).send('<h1>404 Page Not Found!</h1>');
});
// SE CONEXAO DO BANCO DE DADOS RETORNA SUCESSO
connection.connect((err) => {
    if (err) throw err;
    app.listen(3000);
});