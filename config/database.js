/*eslint-env node */

//in case mongodb installed locally
//var mongourl = process.env.MONGO_URI? process.env.MONGO_URI : 'mongodb://localhost:27017/exampleDb';


var mongourl = process.env.MONGO_URI? process.env.MONGO_URI : 'mongodb://mongo:27017/exampleDb';

module.exports = {
	// mongo database connection url
	url : mongourl
};