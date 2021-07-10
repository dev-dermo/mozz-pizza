const { Schema, model } = require('mongoose');

const userSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
		match: [/.+@.+\..+/, 'Please provide a valid email address.']
	},
	password: {
		type: String,
		required: true,
		minlength: 8,
	},
	isAdmin: {
		type: Boolean,
		default: false,
	},
	isPartner: {
		type: Boolean,
		default: true,
	},
	business: {
		type: String,
		unique: true,
	},
}, { timestamps: true });

const User = model('User', userSchema);

module.exports = User;