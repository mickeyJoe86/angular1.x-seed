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
	let userList = [
		{
			id: '1',
			name: 'Jane',
			role: 'Designer',
			location: 'New York',
			twitter: 'gijane'
		},
		{
			id: '2',
			name: 'Bob',
			role: 'Developer',
			location: 'New York',
			twitter: 'billybob'
		},
		{
			id: '3',
			name: 'Jim',
			role: 'Developer',
			location: 'Chicago',
			twitter: 'jimbo'
		},
		{
			id: '4',
			name: 'Bill',
			role: 'Designer',
			location: 'LA',
			twitter: 'dabill'
		}
	];
	res.writeHead(200, { "Content-Type": "application/json" });
	json = JSON.stringify(userList);
	res.end(json);
});

app.listen(app.get('port'), function () {
	console.log('App is running on port', app.get('port'));
});
