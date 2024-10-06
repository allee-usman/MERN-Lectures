const { v4: uuidv4 } = require('uuid');

exports.posts = [
	{
		postID: uuidv4(),
		username: '@allee-usman',
		postBody: 'Hello, I am learning about RESTful APIs!!',
	},
	{
		postID: uuidv4(),
		username: '@tauqs12',
		postBody: 'Welcome, My name is Tsuqir Hayat.',
	},
	{
		postID: uuidv4(),
		username: '@rosa_indica',
		postBody:
			'Of course, bad code can be cleaned up. But it’s very expensive.” — Robert C. Martin',
	},
];
