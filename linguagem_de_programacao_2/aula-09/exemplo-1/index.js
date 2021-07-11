// Node.js: HTTP SERVER Handling GET and POST Request 
// Show HTML Form at GET request.
// At POST Request: Grab form data and display them.

// At the top of the file
const { parse } = require('querystring');
var http = require('http');
var fs = require('fs');
var mysql = require('mysql');
var con;//CONEXAO COM BANCO DE DADOS

var server = http.createServer(function (req, res) {

    if (req.method === "GET") {
        res.writeHead(200, { "Content-Type": "text/html" });
        fs.createReadStream("./form.html", "UTF-8").pipe(res);
    } else if (req.method === "POST") {
      collectRequestData(req, result => {
        console.log(result);
        conectDB();
        insert(result.inome, result.icpf);
        select();
        res.end(`cadastrado com sucesso: ${result.inome}`);
        });
    }
}).listen(3000);

function collectRequestData(request, callback) {
    const FORM_URLENCODED = 'application/x-www-form-urlencoded';
    if(request.headers['content-type'] === FORM_URLENCODED) {
        let body = '';
        request.on('data', chunk => {
            body += chunk.toString();
        });
        request.on('end', () => {
            callback(parse(body));
        });
    }
    else {
        callback(null);
    }
}

//CONEXAO COM BANCO DE DADOS
function conectDB(){
  con = mysql.createConnection({
    host: "remotemysql.com",
    user: "4n1kkjClGl",
    password: "PWCC6hN3Th",
    database:"4n1kkjClGl"
  });

  con.connect(function(err) {
    if (err){
      console.log("error: database");
      console.log(err)
      return
  }
    console.log("Connected to database!");
    return con;
  });
}
//INSERIR NO BANCO DE DADOS
function insert(inome, icpf){
  const novoUsuario = {nome: inome, cpf: icpf}
  con.query(
    'INSERT INTO usuario SET ?', novoUsuario, (err, res) => {
    if (err) throw err
    console.log('Novo usuario add');
  })
}

//RETORNA TODOS OS USUARIOS CADASTRADOS NO BANCO DE DADOS
function select(){
  con.query('SELECT * FROM usuario', (err, result) => {
    if (err) throw err
   
    console.log('Usuarios: ', result, '\n\n')
  })
}