const express = require('express');
const app = express();

const port = 8080;

app.get('/', (req, res) => {
	console.log('Accessing home route');
	res.send('<h1> Welcome to Portal </h1>');
});
app.get('/attendance', (req, res) => {
	res.send("<h1> Today's Attendance </h1>");
});
app.get('/courses', (req, res) => {
	res.send('<h1> Enrolled Courses </h1>');
});
app.get('/submission', (req, res) => {
	res.send('<h1> No Submission created </h1>');
});
app.get('/course-outline', (req, res) => {
	res.send('<h1> Here are the course outlines </h1>');
});
app.listen(port, () => {
	console.log(`App listening on port ${port}`);
});
