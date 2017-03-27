var express = require('express');

var app = express();

app.set('view engine', 'pug');

app.use(express.static('public')); //Para que cualquier usuario pueda acceder a los archivos 
//que se encuentran en public

app.get('/', function(req, res) {
  res.render('index');
})

app.listen(3000, function (err) {
  if (err) return console.log('Hubo un error'), process.exit(1);

  console.log('Platizgram conectado en el puerto 3000');
})
