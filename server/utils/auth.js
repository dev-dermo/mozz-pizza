const jwt = require('jsonwebtoken');

const secret = process.env.SECRET || 'secret';
const expiration = '2h';

module.exports = {
	signToken: function({}) {},
	authMiddleware: function({ req }) {},
};