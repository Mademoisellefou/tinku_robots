var express = require('express');
var app = express();
var path = require('path')
app.set('view engine', 'ejs');
app.use('/public', express.static('public'));
app.set('views', path.join(__dirname, 'views'))
app.get('/upload', function(req, res) {
  res.render('pages/index');
});
app.get('/upload', function(req, res) {
  res.render('pages/index');
});
app.listen(8000);
console.log('Server is listening on port 8080');