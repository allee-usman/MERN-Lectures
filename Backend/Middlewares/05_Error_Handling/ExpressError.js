class myError extends Error {
	constructor(statusCode, message) {
		super(); // call base class constructor
		this.message = message;
		this.statusCode = statusCode;
	}
}
module.exports = myError;
