const express = require('express');
const date = require(__dirname + '/date.js');

const app = express();

const listItems = ['Buy Food', 'Cook Food', 'Eat Food'];
const workItems = [];

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
	const day = date.getDate();

	res.render('list', { listTitle: day, listItems });
});

app.post('/', (req, res) => {
	const item = req.body.newItem;
	if (req.body.list === 'Work List') {
		//push item in work items
		workItems.push(item);
		res.redirect('/work');
	} else {
		//push item in list items
		listItems.push(item);
		res.redirect('/');
	}
});

app.get('/work', (req, res) => {
	res.render('list', { listTitle: 'Work List', listItems: workItems });
});

const port = 8080;
app.listen(port, () => {
	console.log(`Server is up & listening on ${port}`);
});
