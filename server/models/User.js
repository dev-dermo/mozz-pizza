const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

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
	companyName: {
		type: String,
		unique: true,
	},
}, { timestamps: true });

// set up pre-save middleware to create password
userSchema.pre('save', async function(next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function(password) {
  return bcrypt.compare(password, this.password);
};

const User = model('User', userSchema);

module.exports = User;