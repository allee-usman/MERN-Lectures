const mongoose = require('mongoose');

const url = 'mongodb://localhost:27017/testDB';

async function main() {
	await mongoose.connect('mongodb://127.0.0.1:27017/testDB');
}

main()
	.then((res) => {
		console.log('Connection established!');
	})
	.catch((err) => {
		console.log(err);
	});

const userSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		minlength: 3, // minimum length of the string.
		maxlength: 50, // maximum length of the string.
		select: true, // to always include the field in the query result.
	},
	username: {
		type: String,
		required: true, // avoid blank enteries.
		unique: true, // unique index to avoid duplicate enteries.
		lowercase: true, // converts the string to lowercase.
		trim: true, // removes the extra spaces from the string.
	},
	age: {
		type: Number,
		min: [18, 'You are not eligible'], // minimum value of the number with custom error message.
		max: 65, // maximum value of the number.
		required: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
		match: /.+\@.+\..+/, // regex pattern for email validation.
	},
	isActive: {
		type: Boolean,
		default: true, // default value of the field.
	},
	createdAt: {
		type: Date,
		default: Date.now,
		immutable: true, // to avoid the update of the field.
	},
	hobbies: {
		type: [String], // array of strings.
		enum: {
			// to restrict the values to the given array.
			values: ['reading', 'gaming', 'coding', 'traveling'],
			message: '{VALUE} is not supported', // custom error message.
		},
		//Note: You can also use "enum" with "Number" type.
	},
	address: {
		street: {
			type: String,
			required: true,
		},
		city: {
			type: String,
			required: true,
		},
		state: {
			type: String,
			required: true,
		},
		zipCode: {
			type: String,
			required: true,
			match: /^[0-9]{5}(?:-[0-9]{4})?$/,
		},
	},
	socialMediaHandles: {
		type: Map,
		of: String,
	},
});

const User = mongoose.model('User', userSchema);

const user = new User({
	name: 'Ali Usman',
	username: 'alleeU  ',
	age: 22,
	email: 'alleeu429040@gmail.com',
	hobbies: ['reading', 'gaming'],
	address: {
		street: '123 Main Street',
		city: 'Pattoki',
		state: 'Punjab',
		zipCode: '55300',
	},
	socialMediaHandles: {
		facebook: 'https://www.facebook.com/alleeU',
		twitter: 'https://twitter.com/alleeU',
		github: 'https://github.com/alleeu',
	},
});

async function saveRecord() {
	try {
		await user.save();
		console.log('User saved successfully');
	} catch (error) {
		console.error(error.message);
	}
}
saveRecord();
