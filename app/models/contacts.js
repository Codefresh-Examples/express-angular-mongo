/*eslint-env node */

var mongoose = require('mongoose');

module.exports = mongoose.model('Contact', {
	name : String,
	email: String,
	done : Boolean
});