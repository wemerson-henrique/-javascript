var fs=require('fs');

  //abre um arquivo escreve
  fs.appendFile('meuarquivo.txt', 'Hello world, File!',
  function (err){
    if(err) throw err;
    console.log('Arquivo salvo');
  });