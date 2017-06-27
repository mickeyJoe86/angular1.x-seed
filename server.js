const express = require('express');
const app = express();
const request = require('request');


app.set('port', (process.env.PORT || 3000));
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/'));
app.use(express.static('./node_modules/angular/'));

app.get('/', (req, res) => {
	res.render('index');
});

app.get('/name', (req, res) => {
	res.writeHead(200, { "Content-Type": "application/json" });
	json = JSON.stringify({ name: 'Test' });
	res.end(json);
});

app.listen(app.get('port'), function () {
	console.log('App is running on port', app.get('port'));
});
