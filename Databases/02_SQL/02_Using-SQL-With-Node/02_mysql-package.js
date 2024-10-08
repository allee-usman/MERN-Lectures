//import the mysql2 module
const mySql = require('mysql2');
const { faker } = require('@faker-js/faker');

//create connection to database
const connection = mySql.createConnection({
	host: 'localhost',
	user: 'root',
	database: 'temp',
	password: 'newpassword',
});

//run query
// try {
// 	connection.query('SELECT * FROM user', (err, result) => {
// 		if (err) throw err;
// 		console.log(result);
// 	});
// } catch (err) {
// 	console.log(err);
// }

/*
-- So far we have learned 4 ways to execute SQL Commands:
#1. In mySQL Workbench
#2. Using mysql2 package
#3. Using CLI
Access mySQL connection in CLI: mysql -u root -p

Now let's see another method:
#4. Using "schema.sql" files:
Make "schema.sql" file and write queries in it, then in CLI, run the file!
*/

//=> PLACEHOLDER:
//insert one user:
// let query = 'INSERT INTO user (name) VALUES (?)';
// let user = 'Hassan';

// try {
// 	connection.query(query, user, (err, result) => {
// 		if (err) throw err;
// 		console.log(result);
// 	});
// } catch (err) {
// 	console.log(err);
// }

//insert multiple users into table
// let query = 'INSERT INTO user (name) VALUES ?'; // do not use (?) placeholder for inserting multiple users
// let users1 = ['Usman', 'Alamat', 'John']; //wrong method
// let users2 = [['Usman'], ['Alamat'], ['John']]; //valid method

// try {
// 	connection.query(query, [users2], (err, result) => {
// 		if (err) throw err;
// 		console.log(result);
// 	});
// } catch (err) {
// 	console.log(err);
// }

//NOTE: While inserting multiple users if we pass 'users' as placeholders, only the first user will be inserted. The right way is to pass the array as '[users]'

//insert bulk user using "faker"

let bulkUsers = [];

let getRandomUser = () => {
	return [
		faker.internet.userName(),
		faker.internet.email(),
		faker.internet.password(),
	];
};

for (let i = 0; i < 100; i++) {
	bulkUsers.push(getRandomUser());
}

let bulkUserQuery = 'INSERT INTO user (name, email, password) VALUES ?';

try {
	connection.query(bulkUserQuery, [bulkUsers], (err, result) => {
		if (err) throw err;
		console.log(result);
	});
} catch (err) {
	console.log(err);
}

// close the connection
connection.end();
