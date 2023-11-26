var express = require('express');
var app = express();
var path = require('path')
var bodyParser = require('body-parser')
app.set('view engine', 'ejs');
app.use('/public', express.static('public'));
app.set('views', path.join(__dirname, 'views'))
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json())
app.get('/upload', function(req, res) {
  res.render('pages/index');
});
app.post('/upload', function(req, res) {
  res.json({ data: req.body })
});
app.listen(8000);
console.log('Server is listening on port 8080');