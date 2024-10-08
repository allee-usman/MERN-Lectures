//$ Faker is a node module/package that generates random fake data. Install it by running the following command: "npm install faker"

// require it
const { faker } = require('@faker-js/faker');

let getRandomUser = () => {
	return {
		userId: faker.string.uuid(),
		username: faker.internet.userName(),
		email: faker.internet.email(),
		password: faker.internet.password(),
	};
};

console.log(getRandomUser());
