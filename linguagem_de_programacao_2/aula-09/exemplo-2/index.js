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
    const user = {
        nome: nome,
        cpf: cpf
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

// ALTERANDO O USUARIO
app.post('/edit/:id', (req, res) => {
    const nome = req.body.nome;
    const cpf = req.body.cpf;
    const userId = req.params.id;
    connection.query('UPDATE `usuario` SET nome = ?, cpf = ? WHERE id = ?', [nome, cpf, userId], (err, results) => {
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