var mysql = require('mysql');

var con = mysql.createConnection({
  host: "remotemysql.com",
  user: "BoF1XgYKLP",
  password: "LyLczskewf",
  database:"BoF1XgYKLP"
});

con.connect(function(err) {
  if (err){
console.log(err)
return
}
  console.log("Connected to database!(Conetado ao database!)");
});


/*const novoUsuario = {nome: 'wemerson', cpf: '0101'}
con.query(
    'INSERT INTO usuario SET ?', novoUsuario, (err, res) => {
    if (err) throw err

    console.log(`Novo usuario add ID: ${res.insertId}`)
})*/
/*
con.query('INSERT INTO usuario (nome,cpf) VALUES ("Maria Eduarda","1122");',(err)=>{
  if(err){
    throw err
    return
  }
  console.log("Row inserted")
});*/
/*
con.query('SELECT * FROM usuario', (err, rows) => {
    if (err) throw err

    console.log('Usuarios: ', rows, '\n\n')
})*/
/*
con.query('UPDATE usuario SET nome = ? WHERE ID = ?', 
    ['Joao Pedro', 2],
    (err,ressult) => {
        if(err) throw err;

        console.log('Alterado ', ressult)
    }
)*/
/*
con.query(
    'DELETE FROM usuario WHERE id = ?', [8], (err, result) => {
        if (err) throw err;

        console.log(`Deleted ${result.affectedRows} row(s)`);
    }
)*/