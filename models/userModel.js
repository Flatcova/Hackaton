var mongoose = require('mongoose');
	Schema = mongoose.Schema;

var UserSchema = Schema({
	displayName:{type:String},
	image:{type:String},
	email:{type:String},
	google:{
		id: String,
		token: String
	},
	twitter:{id: String,
		token: String},
	facebook:{id: String,
		token: String}
});
module.exports = mongoose.model('User', UserSchema);